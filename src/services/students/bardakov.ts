import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class BardakovConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Voievoda Vladislav';
    }

    public getStudentEmail(): string {
        return 'insagramerr@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Bardakov',
            surname: '',
            email: this.getStudentEmail(),
            projectName: 'CopyPaster :(((((',
            personalProjectLink: 'https://myprojec.azurewebsites.net',
            header: ETCLOADPROJECT(),
            frames: generateETCLOADPROJECT()
        }
    }

}
function ETCLOADPROJECT(): IFrame {
    const pixels: IPixelState[] = [
        { x: 2, y: 2, color: Colour.White }, { x: 2, y: 3, color: Colour.White }, { x: 2, y: 4, color: Colour.White },
        { x: 3, y: 2, color: Colour.White },
        { x: 4, y: 2, color: Colour.White }, { x: 4, y: 3, color: Colour.White }, { x: 4, y: 4, color: Colour.White },
        { x: 5, y: 4, color: Colour.White },
        { x: 6, y: 4, color: Colour.White },
    ];

    return {
        frameNumber: 0,
        pixels: pixels,
    };
}

function generateETCLOADPROJECT(): IFrame[] {
    const frames: IFrame[] = [];

    const number4: IPixelState[] = [
        { x: 2, y: 2, color: Colour.White }, { x: 2, y: 3, color: Colour.White }, { x: 2, y: 4, color: Colour.White },
        { x: 3, y: 2, color: Colour.White },
        { x: 4, y: 2, color: Colour.White }, { x: 4, y: 3, color: Colour.White }, { x: 4, y: 4, color: Colour.White },
        { x: 5, y: 4, color: Colour.White },
        { x: 6, y: 4, color: Colour.White },
    ];

    const number2: IPixelState[] = [
        { x: 8, y: 2, color: Colour.White },
        { x: 9, y: 2, color: Colour.White }, { x: 9, y: 3, color: Colour.White }, { x: 9, y: 4, color: Colour.White },
        { x: 10, y: 4, color: Colour.White },
    ];

    const lettersOk: IPixelState[] = [
        { x: 17, y: 2, color: Colour.White }, { x: 12, y: 9, color: Colour.White }, { x: 12, y: 4, color: Colour.White },
        { x: 13, y: 2, color: Colour.White }, { x: 13, y: 4, color: Colour.White },
        { x: 14, y: 2, color: Colour.White }, { x: 14, y: 2, color: Colour.White }, { x: 11, y: 4, color: Colour.White },
    ];

    for (let frameNumber = 0; frameNumber < Constants.MaxTotalFrames; frameNumber++) {
        const pixels: IPixelState[] = [];

        const show4 = frameNumber % 30 < 10;
        const show2 = frameNumber % 30 >= 10 && frameNumber % 30 < 20;
        const showOk = frameNumber % 90 >= 20;
        const slideInOffset = (frameNumber % 10) - 5;

        if (show4) {
            pixels.push(...number4.map(pixel => ({ ...pixel, x: pixel.x + slideInOffset, color: Colour.White })));
        }
        if (show2) {
            pixels.push(...number2.map(pixel => ({ ...pixel, x: pixel.x + slideInOffset, color: Colour.White })));
        }
        if (showOk) {
            pixels.push(...lettersOk.map(pixel => ({ ...pixel, x: pixel.x - slideInOffset, color: Colour.White })));
        }

        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });
    }

    return frames;
}
