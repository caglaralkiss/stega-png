"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateWithOpacityValues = void 0;
/**
 * Populates stego buffer with opacity values.
 *
 * @param originalBuffer - Image colors which are hidden message is not injected yet
 * @param stegoBuffer - Hidden message injected buffer but doesn't include opacity values
 *
 * @returns stegoBufferWithOpacity
 */
function populateWithOpacityValues(originalBuffer, stegoBuffer) {
    const injectionArr = originalBuffer.slice();
    let buffIndCounter = 0;
    for (let i = 0; i < injectionArr.length; i++) {
        if ((i + 1) % 4 === 0) {
            buffIndCounter++;
        }
        else {
            injectionArr[i] = stegoBuffer[i - buffIndCounter];
        }
    }
    return Buffer.from(injectionArr);
}
exports.populateWithOpacityValues = populateWithOpacityValues;
