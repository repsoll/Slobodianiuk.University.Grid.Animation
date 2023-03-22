import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class LozoviiTarasConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Lozovii Taras';
    }

    public getStudentEmail(): string {
        return 'lozoviitaras777@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Taras',
            surname: 'Lozovii',
            email: this.getStudentEmail(),
            projectName: 'LovProject',
            personalProjectLink: '',
            header: {frameNumber:0, pixels: getHeaderFrame()},
            frames: generatemyProjectFrames()
        }
    }

}
function generatemyProjectFrames(): IFrame[] {
    const frames: IFrame[] = [];

    const circle: IPixelState[] = [
        { x: 5, y: 5, color: Colour.White },
        { x: 6, y: 5, color: Colour.White },
        { x: 7, y: 5, color: Colour.White },
        { x: 5, y: 6, color: Colour.White },
        { x: 7, y: 6, color: Colour.White },
        { x: 5, y: 7, color: Colour.White },
        { x: 6, y: 7, color: Colour.White },
        { x: 7, y: 7, color: Colour.White },
    ];

    const square: IPixelState[] = [
        { x: 10, y: 5, color: Colour.Black },
        { x: 11, y: 5, color: Colour.Black },
        { x: 10, y: 6, color: Colour.Black },
        { x: 11, y: 6, color: Colour.Black },
    ];

    const triangle: IPixelState[] = [
        { x: 15, y: 5, color: Colour.White },
        { x: 14, y: 6, color: Colour.White },
        { x: 15, y: 6, color: Colour.White },
        { x: 16, y: 6, color: Colour.White },
        { x: 13, y: 7, color: Colour.White },
        { x: 14, y: 7, color: Colour.White },
        { x: 15, y: 7, color: Colour.White },
        { x: 16, y: 7, color: Colour.White },
        { x: 17, y: 7, color: Colour.White },
    ];

    for (let frameNumber = 0; frameNumber < Constants.MaxTotalFrames; frameNumber++) {
        const pixels: IPixelState[] = [];

        const showCircle = frameNumber % 30 < 10;
        const showSquare = frameNumber % 30 >= 10 && frameNumber % 30 < 20;
        const showTriangle = frameNumber % 30 >= 20;
        const slideInOffset = (frameNumber % 10) - 5;

        if (showCircle) {
            pixels.push(...circle.map(pixel => ({ ...pixel, x: pixel.x + slideInOffset, color: Colour.White })));
        }
        if (showSquare) {
            pixels.push(...square.map(pixel => ({ ...pixel, x: pixel.x + slideInOffset, color: Colour.Black })));
        }
        if (showTriangle) {
            pixels.push(...triangle.map(pixel => ({ ...pixel, x: pixel.x - slideInOffset, color: Colour.White })));
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
  
    for (let x = 2; x < 14; x++) {
      result.push({ x: x, y: 3, color: Colour.White });
    }
  
    for (let y = 4; y < 11; y += 2) {
      result.push({ x: 2, y: y, color: Colour.White });
    }

    for (let x = 3; x < 13; x += 2) {
      result.push({ x: x, y: 11, color: Colour.White });
    }
  
    return result;
}
