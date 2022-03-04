"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.targetTextFileOpt = exports.targetImageFileOpt = exports.sourceImageFileOpt = exports.sourceTextFileOpt = void 0;
exports.sourceTextFileOpt = {
    param: 't',
    option: {
        alias: 'textfile',
        type: 'string',
        demand: 'Please specify the text file to be injected',
        nargs: 1,
        describe: 'Text file that contents to be injected to an image',
    },
};
exports.sourceImageFileOpt = {
    param: 'i',
    option: {
        alias: 'image',
        type: 'string',
        demand: 'Please specify source image file',
        nargs: 1,
        describe: 'Source image file',
    },
};
exports.targetImageFileOpt = {
    param: 'd',
    option: {
        alias: 'destination',
        type: 'string',
        demand: 'Please specify target image file',
        nargs: 1,
        describe: 'Target image file',
    },
};
exports.targetTextFileOpt = {
    param: 'r',
    option: {
        alias: 'result',
        type: 'string',
        nargs: 1,
        describe: 'Target text file',
    },
};
