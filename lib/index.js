"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const options_1 = require("./options");
const command_1 = require("./command");
(0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .usage('Usage: $0 <command> [options]')
    .command('hide', 'Hide message inside a given PNG file', (paramYargs) => {
    return paramYargs
        .option(options_1.sourceTextFileOpt.param, options_1.sourceTextFileOpt.option)
        .option(options_1.sourceImageFileOpt.param, options_1.sourceImageFileOpt.option)
        .option(options_1.targetImageFileOpt.param, options_1.targetImageFileOpt.option);
}, (argv) => (0, command_1.hide)(argv))
    .command('reveal', 'Extract the hidden text from an PNG file', (paramYargs) => {
    return paramYargs
        .option(options_1.sourceImageFileOpt.param, options_1.sourceImageFileOpt.option)
        .option(options_1.targetTextFileOpt.param, options_1.targetTextFileOpt.option);
}, (argv) => (0, command_1.reveal)(argv))
    .demandCommand(1, 'Please specify one of the commands!')
    .strict()
    .help('h')
    .alias('h', 'help')
    .argv;
