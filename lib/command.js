"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reveal = exports.hide = void 0;
const jimp_1 = __importDefault(require("jimp"));
const chalk_1 = __importDefault(require("chalk"));
const promises_1 = require("fs/promises");
const stega_1 = require("stega");
const util_1 = require("./util");
async function hide(argv) {
    const img = await jimp_1.default.read(argv.image);
    const imgByte = img.bitmap.width * img.bitmap.height * 3;
    const file = await (0, promises_1.readFile)(argv.textfile);
    const fileByte = Buffer.byteLength(file);
    if (fileByte * 3 > imgByte) {
        console.log(chalk_1.default.red(`Image size for this file must be at least ${fileByte * 3} byte!`));
        return;
    }
    const pixels = Buffer.from(img.bitmap.data);
    const opacityFiltered = Buffer.from(pixels.filter((_, ind) => (ind + 1) % 4 !== 0));
    console.log(chalk_1.default.yellow.italic(`Injecting the ${argv.textfile} content to ${argv.destination}`));
    const stegoBuffer = (0, stega_1.inject)(file, opacityFiltered);
    const stegoBufferWithOpacity = (0, util_1.populateWithOpacityValues)(pixels, stegoBuffer);
    const clone = img.clone();
    clone.bitmap.data = stegoBufferWithOpacity;
    clone.writeAsync(argv.destination);
    console.log(chalk_1.default.green('Stego buffer is successfully created at ' + argv.destination));
}
exports.hide = hide;
async function reveal(argv) {
    const img = await jimp_1.default.read(argv.image);
    const pixels = Buffer.from(img.bitmap.data);
    const opacityFiltered = Buffer.from(pixels.filter((_, ind) => (ind + 1) % 4 !== 0));
    const hiddenBuffer = (0, stega_1.extract)(opacityFiltered);
    if (argv.result) {
        (0, promises_1.writeFile)(argv.result, hiddenBuffer, { encoding: 'utf8' });
    }
    else {
        console.log(hiddenBuffer.toString());
    }
}
exports.reveal = reveal;
