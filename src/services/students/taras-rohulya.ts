import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class TarasRohulyaConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Taras Rohulya';
    }

    public getStudentEmail(): string {
        return 'relaxsonik@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Taras',
            surname: 'Rohulya',
            email: this.getStudentEmail(),
            projectName: 'Hi',
            personalProjectLink: 'https://taras-rails-app.fly.dev/',
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
        // N

        { x: 1, y: 2, color: Colour.White },
        { x: 2, y: 2, color: Colour.White },
        { x: 3, y: 2, color: Colour.White },
        { x: 4, y: 2, color: Colour.White },
        { x: 5, y: 2, color: Colour.White },
        { x: 6, y: 2, color: Colour.White },
        { x: 7, y: 2, color: Colour.White },
        { x: 8, y: 2, color: Colour.White },
        { x: 9, y: 2, color: Colour.White },
        { x: 10, y: 2, color: Colour.White },


        { x: 5, y: 3, color: Colour.White },
        { x: 5, y: 4, color: Colour.White },
        { x: 5, y: 5, color: Colour.White },

        // { x: 0, y: 6, color: Colour.White },
        { x: 1, y: 6, color: Colour.White },
        { x: 2, y: 6, color: Colour.White },
        { x: 3, y: 6, color: Colour.White },
        { x: 4, y: 6, color: Colour.White },
        { x: 5, y: 6, color: Colour.White },
        { x: 6, y: 6, color: Colour.White },
        { x: 7, y: 6, color: Colour.White },
        { x: 8, y: 6, color: Colour.White },
        { x: 9, y: 6, color: Colour.White },
        { x: 10, y: 6, color: Colour.White },


        // I
        { x: 1, y: 10, color: Colour.White },
        { x: 1, y: 11, color: Colour.White },
        { x: 1, y: 12, color: Colour.White },

        { x: 2, y: 11, color: Colour.White },
        { x: 3, y: 11, color: Colour.White },
        { x: 4, y: 11, color: Colour.White },
        { x: 5, y: 11, color: Colour.White },
        { x: 6, y: 11, color: Colour.White },
        { x: 7, y: 11, color: Colour.White },
        { x: 8, y: 11, color: Colour.White },
        { x: 9, y: 11, color: Colour.White },

        { x: 10, y: 10, color: Colour.White },
        { x: 10, y: 11, color: Colour.White },
        { x: 10, y: 12, color: Colour.White },


    );
    return result;
}
function generateFrames(): IFrame[] {
    const frames: IFrame[] = [];

    const TarasRohulyaConfigLoaderService: IPixelState[] = [
        { x: 1, y: 2, color: Colour.White },
        { x: 2, y: 2, color: Colour.White },
        { x: 3, y: 2, color: Colour.White },
        { x: 4, y: 2, color: Colour.White },
        { x: 5, y: 2, color: Colour.White },
        { x: 6, y: 2, color: Colour.White },
        { x: 7, y: 2, color: Colour.White },
        { x: 8, y: 2, color: Colour.White },
        { x: 9, y: 2, color: Colour.White },
        { x: 10, y: 2, color: Colour.White },


        { x: 5, y: 3, color: Colour.White },
        { x: 5, y: 4, color: Colour.White },
        { x: 5, y: 5, color: Colour.White },

        // { x: 0, y: 6, color: Colour.White },
        { x: 1, y: 6, color: Colour.White },
        { x: 2, y: 6, color: Colour.White },
        { x: 3, y: 6, color: Colour.White },
        { x: 4, y: 6, color: Colour.White },
        { x: 5, y: 6, color: Colour.White },
        { x: 6, y: 6, color: Colour.White },
        { x: 7, y: 6, color: Colour.White },
        { x: 8, y: 6, color: Colour.White },
        { x: 9, y: 6, color: Colour.White },
        { x: 10, y: 6, color: Colour.White },


        // I
        { x: 1, y: 10, color: Colour.White },
        { x: 1, y: 11, color: Colour.White },
        { x: 1, y: 12, color: Colour.White },

        { x: 2, y: 11, color: Colour.White },
        { x: 3, y: 11, color: Colour.White },
        { x: 4, y: 11, color: Colour.White },
        { x: 5, y: 11, color: Colour.White },
        { x: 6, y: 11, color: Colour.White },
        { x: 7, y: 11, color: Colour.White },
        { x: 8, y: 11, color: Colour.White },
        { x: 9, y: 11, color: Colour.White },

        { x: 10, y: 10, color: Colour.White },
        { x: 10, y: 11, color: Colour.White },
        { x: 10, y: 12, color: Colour.White },

    ];





    for (let frameNumber = 0; frameNumber < 40; frameNumber++) {
        const pixels: IPixelState[] = [];

        const showCar = frameNumber + 100;
        const slide = frameNumber - 20;

        if (showCar) {
            pixels.push(...TarasRohulyaConfigLoaderService.map(pixel => ({ ...pixel, x: pixel.x - slide, color: Colour.White })));
        }
        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });
    }
    return frames;
}