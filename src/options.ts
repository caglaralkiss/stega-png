export const sourceTextFileOpt: any = {
	param: 't',
	option: {
		alias: 'textfile',
		type: 'string',
		demand: 'Please specify the text file to be injected',
		nargs: 1,
		describe: 'Text file that contents to be injected to an image',
	},
}

export const sourceImageFileOpt: any = {
	param: 'i',
	option: {
		alias: 'image',
		type: 'string',
		demand: 'Please specify source image file',
		nargs: 1,
		describe: 'Source image file',
	},
}

export const targetImageFileOpt: any = {
	param: 'd',
	option: {
		alias: 'destination',
		type: 'string',
		demand: 'Please specify target image file',
		nargs: 1,
		describe: 'Target image file',
	},
}

export const targetTextFileOpt: any = {
	param: 'r',
	option: {
		alias: 'result',
		type: 'string',
		nargs: 1,
		describe: 'Target text file',
	},
}
