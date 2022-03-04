import Jimp from 'jimp'
import chalk from 'chalk'
import { readFile, writeFile } from 'fs/promises'
import { inject, extract } from 'stega'
import { populateWithOpacityValues } from './util'

type HideArgv = {
	textfile: string
	image: string
	destination: string
}

type RevealArgv = {
	image: string
	result?: string
}

export async function hide(argv: HideArgv): Promise<void> {
	const img = await Jimp.read(argv.image)
	const imgByte = img.bitmap.width * img.bitmap.height * 3

	const file = await readFile(argv.textfile)
	const fileByte = Buffer.byteLength(file)

	if (fileByte * 3 > imgByte) {
		console.log(
			chalk.red(
				`Image size for this file must be at least ${
					fileByte * 3
				} byte!`
			)
		)
		return
	}

	const pixels = Buffer.from(img.bitmap.data)
	const opacityFiltered = Buffer.from(
		pixels.filter((_, ind) => (ind + 1) % 4 !== 0)
	)

	console.log(
		chalk.yellow.italic(
			`Injecting the ${argv.textfile} content to ${argv.destination}`
		)
	)

	const stegoBuffer = inject(file, opacityFiltered)
	const stegoBufferWithOpacity = populateWithOpacityValues(
		pixels,
		stegoBuffer
	)

	const clone = img.clone()
	clone.bitmap.data = stegoBufferWithOpacity

	clone.writeAsync(argv.destination)

	console.log(
		chalk.green(
			'Stego buffer is successfully created at ' + argv.destination
		)
	)
}

export async function reveal(argv: RevealArgv): Promise<void> {
	const img = await Jimp.read(argv.image)

	const pixels = Buffer.from(img.bitmap.data)
	const opacityFiltered = Buffer.from(
		pixels.filter((_, ind) => (ind + 1) % 4 !== 0)
	)

	const hiddenBuffer = extract(opacityFiltered)

	if (argv.result) {
		writeFile(argv.result, hiddenBuffer, { encoding: 'utf8' })
	} else {
		console.log(hiddenBuffer.toString())
	}
}
