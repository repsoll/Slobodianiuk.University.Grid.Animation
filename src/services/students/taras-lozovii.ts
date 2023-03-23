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
            projectName: 'Sniper Vision',
            personalProjectLink: '',
            header: Avatar(0),
            frames: generateFrames() 
        }
    }

}
const Avatar = (frameNumber: number): IFrame => {
    let result: IFrame = {
        frameNumber: frameNumber, 
        pixels: []
    };

    result.pixels.push(
        { x: 8, y: 5, color: Colour.White },
        { x: 8, y: 6, color: Colour.White },
        { x: 8, y: 7, color: Colour.White },
        { x: 8, y: 8, color: Colour.White },
        { x: 8, y: 9, color: Colour.White },
        { x: 8, y: 10, color: Colour.White },
        { x: 8, y: 11, color: Colour.White },
        { x: 8, y: 12, color: Colour.White },
        { x: 8, y: 13, color: Colour.White },
        { x: 4, y: 9, color: Colour.White },
        { x: 5, y: 9, color: Colour.White },
        { x: 6, y: 9, color: Colour.White },
        { x: 7, y: 9, color: Colour.White },
        { x: 8, y: 9, color: Colour.White },
        { x: 9, y: 9, color: Colour.White },
        { x: 10, y: 9, color: Colour.White },
        { x: 11, y: 9, color: Colour.White },
        { x: 12, y: 9, color: Colour.White },
        { x: 6, y: 8, color: Colour.White },
        { x: 6, y: 7, color: Colour.White },
        { x: 7, y: 7, color: Colour.White },
        { x: 9, y: 7, color: Colour.White },
        { x: 10, y: 7, color: Colour.White },
        { x: 10, y: 8, color: Colour.White },
        { x: 10, y: 10, color: Colour.White },
        { x: 10, y: 11, color: Colour.White },
        { x: 9, y: 11, color: Colour.White },
        { x: 7, y: 11, color: Colour.White },
        { x: 6, y: 11, color: Colour.White },
        { x: 6, y: 10, color: Colour.White },

        );
        

    return result;
}
function generateFrames(): IFrame[] {
    const frames: IFrame[] = [];

    const gg: IPixelState[] = [
        { x: 8, y: 5, color: Colour.White },
        { x: 8, y: 6, color: Colour.White },
        { x: 8, y: 7, color: Colour.White },
        { x: 8, y: 8, color: Colour.White },
        { x: 8, y: 9, color: Colour.White },
        { x: 8, y: 10, color: Colour.White },
        { x: 8, y: 11, color: Colour.White },
        { x: 8, y: 12, color: Colour.White },
        { x: 8, y: 13, color: Colour.White },
        { x: 4, y: 9, color: Colour.White },
        { x: 5, y: 9, color: Colour.White },
        { x: 6, y: 9, color: Colour.White },
        { x: 7, y: 9, color: Colour.White },
        { x: 8, y: 9, color: Colour.White },
        { x: 9, y: 9, color: Colour.White },
        { x: 10, y: 9, color: Colour.White },
        { x: 11, y: 9, color: Colour.White },
        { x: 12, y: 9, color: Colour.White },
        { x: 6, y: 8, color: Colour.White },
        { x: 6, y: 7, color: Colour.White },
        { x: 7, y: 7, color: Colour.White },
        { x: 9, y: 7, color: Colour.White },
        { x: 10, y: 7, color: Colour.White },
        { x: 10, y: 8, color: Colour.White },
        { x: 10, y: 10, color: Colour.White },
        { x: 10, y: 11, color: Colour.White },
        { x: 9, y: 11, color: Colour.White },
        { x: 7, y: 11, color: Colour.White },
        { x: 6, y: 11, color: Colour.White },
        { x: 6, y: 10, color: Colour.White },

    ]


    for (let frameNumber = 0; frameNumber < 40; frameNumber++) {
        const pixels: IPixelState[] = [];

        const wp = frameNumber  +100;
        const slide = frameNumber -20 ;

        if (wp) {
            pixels.push(...gg.map(pixel => ({ ...pixel, x: pixel.x - slide, color: Colour.White })));
        }
        

        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });

       
    }

    return frames;
}