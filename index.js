const fs = require('fs');
const NodeVibrant = require('node-vibrant');
const rgbHex = require('rgb-hex');

/**
 * Pick up palette from image
 * @param {string} img_path 
 */
const pickPalette = async (img_path) => {
    const palettes = await NodeVibrant.from(img_path, {
        // options here
    }).getPalette()

    Object.getOwnPropertyNames(palettes).map((palette) => {
        console.log(`${palette} : ${rgbToHex(palettes[palette]._rgb)}`)
    })
}

/**
 * rgb to hex
 * @param {string} rgb_arr 
 */
const rgbToHex = (rgb_arr) => {
    const [r, g, b] = rgb_arr;
    return '#' + rgbHex(r, g, b);
}

const main = () => {
    // Read args
    const [node, js, ...args] = process.argv
    if(args.length > 0) {
        pickPalette(args[0])
    } else {
        console.log('to use `npm run palette <IMAGE_PATH>`')
    }
}

main()

