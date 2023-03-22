import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";
import Constants from "../../constants/constants";

export class MalishVitaliyConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Vitalii Malish';
    }

    public getStudentEmail(): string {
        return 'hokagekillian@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Vitaliy',
            surname: 'Malish',
            email: this.getStudentEmail(),
            projectName: 'Malish project',
            personalProjectLink: 'https://malish-vitaliy-project.azurewebsites.net/',
            header: Header(),
            frames: animGeneration()
        }
    }
}
function Header(): IFrame {
    const pixels: IPixelState[] = [
        { x: 1, y: 2, color: Colour.White },
        { x: 2, y: 3, color: Colour.White },
        { x: 3, y: 4, color: Colour.White },    
        { x: 4, y: 3, color: Colour.White },
        { x: 5, y: 2, color: Colour.White },
        { x: 2, y: 1, color: Colour.White },
        { x: 3, y: 0, color: Colour.White },
        { x: 4, y: 1, color: Colour.White },
        { x: 1, y: 12, color: Colour.White },
        { x: 2, y: 13, color: Colour.White },
        { x: 3, y: 14, color: Colour.White },
        { x: 4, y: 13, color: Colour.White },
        { x: 5, y: 12, color: Colour.White },
        { x: 2, y: 11, color: Colour.White },
        { x: 3, y: 10, color: Colour.White },
        { x: 4, y: 11, color: Colour.White },

    ];
    return {
        frameNumber: 0,
        pixels: pixels,
    };
}
function animGeneration(): IFrame[] {
    const frames: IFrame[] = [];

    const anim: IPixelState[] = [
        { x: 1, y: 2, color: Colour.White },
        { x: 2, y: 3, color: Colour.White },
        { x: 3, y: 4, color: Colour.White },
        { x: 4, y: 3, color: Colour.White },
        { x: 5, y: 2, color: Colour.White },
        { x: 2, y: 1, color: Colour.White },
        { x: 3, y: 0, color: Colour.White },
        { x: 4, y: 1, color: Colour.White },

    ];
    const anim2: IPixelState[] = [
        { x: 1, y: 12, color: Colour.White },
        { x: 2, y: 13, color: Colour.White },
        { x: 3, y: 14, color: Colour.White },
        { x: 4, y: 13, color: Colour.White },
        { x: 5, y: 12, color: Colour.White },
        { x: 2, y: 11, color: Colour.White },
        { x: 3, y: 10, color: Colour.White },
        { x: 4, y: 11, color: Colour.White },
        ]

    for (let frameNumber = 0; frameNumber < Constants.MaxTotalFrames; frameNumber++) {
        const pixels: IPixelState[] = [];

        const showanim = frameNumber % 30 < 10;
        const showanim2 = frameNumber % 30 >= 10 && frameNumber % 30 < 20;
        const slideInOffset = (frameNumber % 10) - 5;

        if (showanim) {
            pixels.push(...anim.map(pixel => ({ ...pixel, x: pixel.x + slideInOffset, color: Colour.White })));
        }
        if (showanim2) {
            pixels.push(...anim2.map(pixel => ({ ...pixel, x: pixel.x + slideInOffset, color: Colour.White })));
        }



        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });
    }

    return frames;
}
    