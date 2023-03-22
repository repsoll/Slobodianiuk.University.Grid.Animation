import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class RuslanHavrilyakConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Ruslan Havrilyak';
    }

    public getStudentEmail(): string {
        return 'game.master.kvx@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Ruslan',
            surname: 'Havrilyak',
            email: this.getStudentEmail(),
            projectName: 'WorkWise',
            personalProjectLink: 'https://work-wise.azurewebsites.net/',
            header: {frameNumber:0, pixels: getHeaderFrame()},
            frames: generateWorkWiseFrames()
        }
    }

}

function generateWorkWiseFrames(): IFrame[] {
    const frames: IFrame[] = [];
    const squareSize = 4;

    for (let frameNumber = 0; frameNumber < 120; frameNumber++) {
        const pixels: IPixelState[] = [];
    const xOffset = Math.floor(frameNumber / 30) * squareSize;
    const yOffset = (frameNumber % 30) < 15 ? 0 : squareSize;

    for (let i = 0; i < squareSize; i++) {
        pixels.push({ x: xOffset + i, y: yOffset, color: Colour.White });
        pixels.push({ x: xOffset + squareSize - 1, y: yOffset + i, color: Colour.White });
        pixels.push({ x: xOffset + squareSize - 1 - i, y: yOffset + squareSize - 1, color: Colour.White });
        pixels.push({ x: xOffset, y: yOffset + squareSize - 1 - i, color: Colour.White });
    }

    frames.push({
        frameNumber: frameNumber,
        pixels: pixels,
    });
}

return frames;
}

function getHeaderFrame(): IPixelState[] {
    const result: IPixelState[] = [];
  
    for (let x = 2; x < 14; x += 2) {
      result.push({ x: x, y: 3, color: Colour.White });
    }
  
    for (let y = 4; y < 11; y++) {
      result.push({ x: 13, y: y, color: Colour.White });
    }

    for (let x = 4; x < 14; x += 2) {
      result.push({ x: x, y: 11, color: Colour.White });
    }
  
    return result;
  }

