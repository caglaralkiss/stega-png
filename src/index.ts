import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import {
	sourceTextFileOpt,
	sourceImageFileOpt,
	targetImageFileOpt,
	targetTextFileOpt,
} from './options'

import { hide, reveal } from './command'

yargs(hideBin(process.argv))
	.usage('Usage: $0 <command> [options]')
	.command(
		'hide',
		'Hide message inside a given PNG file',
		(paramYargs) => {
			return paramYargs
				.option(sourceTextFileOpt.param, sourceTextFileOpt.option)
				.option(sourceImageFileOpt.param, sourceImageFileOpt.option)
				.option(targetImageFileOpt.param, targetImageFileOpt.option)
		},
		(argv) => hide(argv as any)
	)
	.command(
		'reveal',
		'Extract the hidden text from an PNG file',
		(paramYargs) => {
			return paramYargs
				.option(sourceImageFileOpt.param, sourceImageFileOpt.option)
				.option(targetTextFileOpt.param, targetTextFileOpt.option)
		},
		(argv) => reveal(argv as any)
	)
	.demandCommand(1, 'Please specify one of the commands!')
	.strict()
	.help('h')
	.alias('h', 'help').argv
