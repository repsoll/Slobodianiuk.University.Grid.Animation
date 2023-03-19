import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class VitaliiSynytskyiConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Vitalii Synytskyi';
    }

    public getStudentEmail(): string {
        return 'howery1337@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Vitalii',
            surname: 'Synytskyi',
            email: this.getStudentEmail(),
            projectName: 'Cactus',
            personalProjectLink: 'https://codeflow.azurewebsites.net',
            header: Constants.DefaultConfig.header,
            frames: generateFrames()
        }
    }
}
function generateFrames(): IFrame[] {
    const frames: IFrame[] = [];

    const firstFrame: IPixelState[] = [
        { x: 9, y: 1, color: Colour.White }, { x: 9, y: 2, color: Colour.White }, { x: 9, y: 3, color: Colour.White }, { x: 9, y: 4, color: Colour.White }, { x: 9, y: 5, color: Colour.White }, { x: 9, y: 6, color: Colour.White }, { x: 9, y: 7, color: Colour.White }, { x: 9, y: 8, color: Colour.White },
        { x: 9, y: 9, color: Colour.White }, { x: 9, y: 10, color: Colour.White }, { x: 9, y: 11, color: Colour.White }, { x: 9, y: 12, color: Colour.White }, { x: 9, y: 13, color: Colour.White }, { x: 9, y: 14, color: Colour.White }, { x: 9, y: 15, color: Colour.White },
        { x: 10, y: 0, color: Colour.White }, { x: 10, y: 15, color: Colour.White },
        { x: 11, y: 1, color: Colour.White }, { x: 11, y: 2, color: Colour.White }, { x: 11, y: 3, color: Colour.White }, { x: 11, y: 4, color: Colour.White }, { x: 11, y: 5, color: Colour.White }, { x: 11, y: 6, color: Colour.White }, { x: 11, y: 7, color: Colour.White }, { x: 11, y: 8, color: Colour.White },
        { x: 11, y: 9, color: Colour.White }, { x: 11, y: 10, color: Colour.White }, { x: 11, y: 11, color: Colour.White }, { x: 11, y: 12, color: Colour.White }, { x: 11, y: 13, color: Colour.White }, { x: 11, y: 14, color: Colour.White }, { x: 11, y: 15, color: Colour.White },
        { x: 12, y: 3, color: Colour.White }, { x: 12, y: 5, color: Colour.White }, { x: 12, y: 10, color: Colour.White }, { x: 12, y: 12, color: Colour.White },
        { x: 13, y: 3, color: Colour.White }, { x: 13, y: 5, color: Colour.White }, { x: 13, y: 10, color: Colour.White }, { x: 13, y: 12, color: Colour.White },
        { x: 14, y: 3, color: Colour.White }, { x: 14, y: 5, color: Colour.White }, { x: 14, y: 10, color: Colour.White }, { x: 14, y: 12, color: Colour.White },
        { x: 15, y: 4, color: Colour.White }, { x: 15, y: 5, color: Colour.White }, { x: 15, y: 6, color: Colour.White }, { x: 15, y: 7, color: Colour.White }, { x: 15, y: 8, color: Colour.White }, { x: 15, y: 9, color: Colour.White }, { x: 15, y: 10, color: Colour.White }, { x: 15, y: 11, color: Colour.White },
    ];

    const secondFrame: IPixelState[] = [
        { x: 4, y: 6, color: Colour.White }, { x: 4, y: 7, color: Colour.White }, { x: 4, y: 8, color: Colour.White }, { x: 4, y: 9, color: Colour.White },
        { x: 5, y: 5, color: Colour.White }, { x: 5, y: 10, color: Colour.White },
        { x: 6, y: 4, color: Colour.White }, { x: 6, y: 8, color: Colour.White }, { x: 6, y: 11, color: Colour.White },
        { x: 7, y: 4, color: Colour.White }, { x: 7, y: 6, color: Colour.White }, { x: 7, y: 11, color: Colour.White },
        { x: 8, y: 4, color: Colour.White }, { x: 8, y: 9, color: Colour.White }, { x: 8, y: 11, color: Colour.White },
        { x: 9, y: 1, color: Colour.White }, { x: 9, y: 2, color: Colour.White }, { x: 9, y: 3, color: Colour.White }, { x: 9, y: 4, color: Colour.White }, { x: 9, y: 5, color: Colour.White }, { x: 9, y: 6, color: Colour.White }, { x: 9, y: 7, color: Colour.White }, { x: 9, y: 8, color: Colour.White },
        { x: 9, y: 9, color: Colour.White }, { x: 9, y: 10, color: Colour.White }, { x: 9, y: 11, color: Colour.White }, { x: 9, y: 12, color: Colour.White }, { x: 9, y: 13, color: Colour.White }, { x: 9, y: 14, color: Colour.White }, { x: 9, y: 15, color: Colour.White },
        { x: 10, y: 0, color: Colour.White }, { x: 10, y: 15, color: Colour.White },
        { x: 11, y: 1, color: Colour.White }, { x: 11, y: 2, color: Colour.White }, { x: 11, y: 3, color: Colour.White }, { x: 11, y: 4, color: Colour.White }, { x: 11, y: 5, color: Colour.White }, { x: 11, y: 6, color: Colour.White }, { x: 11, y: 7, color: Colour.White }, { x: 11, y: 8, color: Colour.White },
        { x: 11, y: 9, color: Colour.White }, { x: 11, y: 10, color: Colour.White }, { x: 11, y: 11, color: Colour.White }, { x: 11, y: 12, color: Colour.White }, { x: 11, y: 13, color: Colour.White }, { x: 11, y: 14, color: Colour.White }, { x: 11, y: 15, color: Colour.White },
        { x: 12, y: 3, color: Colour.White }, { x: 12, y: 5, color: Colour.White }, { x: 12, y: 10, color: Colour.White }, { x: 12, y: 12, color: Colour.White },
        { x: 13, y: 3, color: Colour.White }, { x: 13, y: 5, color: Colour.White }, { x: 13, y: 10, color: Colour.White }, { x: 13, y: 12, color: Colour.White },
        { x: 14, y: 3, color: Colour.White }, { x: 14, y: 5, color: Colour.White }, { x: 14, y: 10, color: Colour.White }, { x: 14, y: 12, color: Colour.White },
        { x: 15, y: 4, color: Colour.White }, { x: 15, y: 5, color: Colour.White }, { x: 15, y: 6, color: Colour.White }, { x: 15, y: 7, color: Colour.White }, { x: 15, y: 8, color: Colour.White }, { x: 15, y: 9, color: Colour.White }, { x: 15, y: 10, color: Colour.White }, { x: 15, y: 11, color: Colour.White },
    ];

    const thirdFrame: IPixelState[] = [
        { x: 0, y: 6, color: Colour.White }, { x: 0, y: 7, color: Colour.White }, { x: 0, y: 8, color: Colour.White }, { x: 0, y: 9, color: Colour.White },
        { x: 1, y: 5, color: Colour.White }, { x: 1, y: 10, color: Colour.White }, { x: 1, y: 12, color: Colour.White },
        { x: 2, y: 4, color: Colour.White }, { x: 2, y: 8, color: Colour.White }, { x: 2, y: 11, color: Colour.White }, { x: 2, y: 13, color: Colour.White },
        { x: 3, y: 4, color: Colour.White }, { x: 3, y: 6, color: Colour.White }, { x: 3, y: 11, color: Colour.White }, { x: 3, y: 12, color: Colour.White },
        { x: 4, y: 4, color: Colour.White }, { x: 4, y: 9, color: Colour.White }, { x: 4, y: 11, color: Colour.White },
        { x: 5, y: 3, color: Colour.White }, { x: 5, y: 4, color: Colour.White }, { x: 5, y: 8, color: Colour.White }, { x: 5, y: 11, color: Colour.White }, { x: 5, y: 12, color: Colour.White }, { x: 5, y: 13, color: Colour.White },
        { x: 6, y: 2, color: Colour.White }, { x: 6, y: 4, color: Colour.White }, { x: 6, y: 6, color: Colour.White }, { x: 6, y: 11, color: Colour.White }, { x: 6, y: 14, color: Colour.White },
        { x: 7, y: 3, color: Colour.White }, { x: 7, y: 4, color: Colour.White }, { x: 7, y: 9, color: Colour.White }, { x: 7, y: 11, color: Colour.White }, { x: 7, y: 12, color: Colour.White }, { x: 7, y: 13, color: Colour.White },
        { x: 8, y: 4, color: Colour.White }, { x: 8, y: 11, color: Colour.White },
        { x: 9, y: 1, color: Colour.White }, { x: 9, y: 2, color: Colour.White }, { x: 9, y: 3, color: Colour.White }, { x: 9, y: 4, color: Colour.White }, { x: 9, y: 5, color: Colour.White }, { x: 9, y: 6, color: Colour.White }, { x: 9, y: 7, color: Colour.White }, { x: 9, y: 8, color: Colour.White },
        { x: 9, y: 9, color: Colour.White }, { x: 9, y: 10, color: Colour.White }, { x: 9, y: 11, color: Colour.White }, { x: 9, y: 12, color: Colour.White }, { x: 9, y: 13, color: Colour.White }, { x: 9, y: 14, color: Colour.White }, { x: 9, y: 15, color: Colour.White },
        { x: 10, y: 0, color: Colour.White }, { x: 10, y: 15, color: Colour.White },
        { x: 11, y: 1, color: Colour.White }, { x: 11, y: 2, color: Colour.White }, { x: 11, y: 3, color: Colour.White }, { x: 11, y: 4, color: Colour.White }, { x: 11, y: 5, color: Colour.White }, { x: 11, y: 6, color: Colour.White }, { x: 11, y: 7, color: Colour.White }, { x: 11, y: 8, color: Colour.White },
        { x: 11, y: 9, color: Colour.White }, { x: 11, y: 10, color: Colour.White }, { x: 11, y: 11, color: Colour.White }, { x: 11, y: 12, color: Colour.White }, { x: 11, y: 13, color: Colour.White }, { x: 11, y: 14, color: Colour.White }, { x: 11, y: 15, color: Colour.White },
        { x: 12, y: 3, color: Colour.White }, { x: 12, y: 5, color: Colour.White }, { x: 12, y: 10, color: Colour.White }, { x: 12, y: 12, color: Colour.White },
        { x: 13, y: 3, color: Colour.White }, { x: 13, y: 5, color: Colour.White }, { x: 13, y: 10, color: Colour.White }, { x: 13, y: 12, color: Colour.White },
        { x: 14, y: 3, color: Colour.White }, { x: 14, y: 5, color: Colour.White }, { x: 14, y: 10, color: Colour.White }, { x: 14, y: 12, color: Colour.White },
        { x: 15, y: 4, color: Colour.White }, { x: 15, y: 5, color: Colour.White }, { x: 15, y: 6, color: Colour.White }, { x: 15, y: 7, color: Colour.White }, { x: 15, y: 8, color: Colour.White }, { x: 15, y: 9, color: Colour.White }, { x: 15, y: 10, color: Colour.White }, { x: 15, y: 11, color: Colour.White },
    ];


    for (let frameNumber = 0; frameNumber < Constants.MaxTotalFrames; frameNumber++) {
        const pixels: IPixelState[] = [];

        const show1 = frameNumber % 30 < 10;
        const show2 = frameNumber % 30 >= 10 && frameNumber % 30 < 20;
        const show3 = frameNumber % 30 >= 20;

        if (show1) {
            pixels.push(...firstFrame.map(pixel => ({ ...pixel, x: pixel.x, color: Colour.White })));
        }
        if (show2) {
            pixels.push(...secondFrame.map(pixel => ({ ...pixel, x: pixel.x, color: Colour.White })));
        }
        if (show3) {
            pixels.push(...thirdFrame.map(pixel => ({ ...pixel, x: pixel.x, color: Colour.White })));
        }

        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });
    }

    return frames;
}
