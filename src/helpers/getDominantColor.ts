import { FastAverageColor } from "fast-average-color";
import fs from "node:fs";
import sharp from "sharp";

function numbersToHex(numbers: [number, number, number]) {
  return (
    "#" + numbers.map((number) => number.toString(16).padStart(2, "0")).join("")
  );
}

export async function getDominantColor(src: string | URL) {
  const imageBuffer = fs.readFileSync(src);
  const image = sharp(imageBuffer).rotate();
  const imageBitmap = await image
    .flatten({ background: "#fff" })
    .ensureAlpha()
    .raw()
    .toBuffer();

  const fac = new FastAverageColor();
  const result = fac.getColorFromArray4(imageBitmap, {
    algorithm: "dominant",
    defaultColor: [255, 255, 255, 255],
  });

  fac.destroy();

  return numbersToHex([result[0], result[1], result[2]]);
}
