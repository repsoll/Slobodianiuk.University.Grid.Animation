import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class ArsenShvediukConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Arsen Shvediuk';
    }

    public getStudentEmail(): string {
        return 'arsen.shvedyuk@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Arsen',
            surname: 'Shvediuk',
            email: this.getStudentEmail(),
            projectName: 'Movies',
            personalProjectLink: 'https://shvediuk.azurewebsites.net/',
            header: Header(0),
            frames: generateMoviesFrames()
        }
    }
}


const Header = (frameNumber: number): IFrame => {
    let result: IFrame = {
        frameNumber: frameNumber,
        pixels: []
    };

    result.pixels.push(
        { x: 10, y: 3, color: Colour.White },{ x: 9, y: 3, color: Colour.White },{ x: 8, y: 3, color: Colour.White },{ x: 7, y: 3, color: Colour.White },{ x: 6, y: 3, color: Colour.White },{ x: 5, y: 3, color: Colour.White },{ x: 5, y: 4, color: Colour.White },
        { x: 5, y: 5, color: Colour.White },{ x: 5, y: 6, color: Colour.White },{ x: 5, y: 7, color: Colour.White },{ x: 5, y: 8, color: Colour.White },{ x: 5, y: 9, color: Colour.White },{ x: 5, y: 10, color: Colour.White },{ x: 5, y: 11, color: Colour.White },
        { x: 5, y: 12, color: Colour.White },{ x: 6, y: 12, color: Colour.White },{ x: 7, y: 12, color: Colour.White },{ x: 8, y: 12, color: Colour.White },{ x: 9, y: 12, color: Colour.White },{ x: 4, y: 8, color: Colour.White },{ x: 3, y: 9, color: Colour.White },
        { x: 2, y: 10, color: Colour.White },{ x: 1, y: 11, color: Colour.White },{ x: 0, y: 12, color: Colour.White },{ x: 3, y: 7, color: Colour.White },{ x: 2, y: 6, color: Colour.White }, { x: 10, y: 4, color: Colour.White },{ x: 10, y: 5, color: Colour.White },
        { x: 10, y: 6, color: Colour.White },{ x: 10, y: 7, color: Colour.White },{ x: 10, y: 8, color: Colour.White },{ x: 10, y: 9, color: Colour.White },{ x: 10, y: 10, color: Colour.White },{ x: 10, y: 11, color: Colour.White },{ x: 10, y: 12, color: Colour.White }, 
        );
        
    return result;
}

function generateMoviesFrames(): IFrame[] {
    const frames: IFrame[] = [];

    const Movies: IPixelState[] = [
        { x: 10, y: 3, color: Colour.White },{ x: 9, y: 3, color: Colour.White },{ x: 8, y: 3, color: Colour.White },{ x: 7, y: 3, color: Colour.White },{ x: 6, y: 3, color: Colour.White },{ x: 5, y: 3, color: Colour.White },{ x: 5, y: 4, color: Colour.White },
        { x: 5, y: 5, color: Colour.White },{ x: 5, y: 6, color: Colour.White },{ x: 5, y: 7, color: Colour.White },{ x: 5, y: 8, color: Colour.White },{ x: 5, y: 9, color: Colour.White },{ x: 5, y: 10, color: Colour.White },{ x: 5, y: 11, color: Colour.White },
        { x: 5, y: 12, color: Colour.White },{ x: 6, y: 12, color: Colour.White },{ x: 7, y: 12, color: Colour.White },{ x: 8, y: 12, color: Colour.White },{ x: 9, y: 12, color: Colour.White },{ x: 4, y: 8, color: Colour.White },{ x: 3, y: 9, color: Colour.White },
        { x: 2, y: 10, color: Colour.White },{ x: 1, y: 11, color: Colour.White },{ x: 0, y: 12, color: Colour.White },{ x: 3, y: 7, color: Colour.White },{ x: 2, y: 6, color: Colour.White }, { x: 10, y: 4, color: Colour.White },{ x: 10, y: 5, color: Colour.White },
        { x: 10, y: 6, color: Colour.White },{ x: 10, y: 7, color: Colour.White },{ x: 10, y: 8, color: Colour.White },{ x: 10, y: 9, color: Colour.White },{ x: 10, y: 10, color: Colour.White },{ x: 10, y: 11, color: Colour.White },{ x: 10, y: 12, color: Colour.White }, 
    ];

    const Moviesstep1: IPixelState[] = [
        { x: 10, y: 1, color: Colour.White },{ x: 9, y: 3, color: Colour.White },{ x: 8, y: 3, color: Colour.White },{ x: 7, y: 3, color: Colour.White },{ x: 6, y: 3, color: Colour.White },{ x: 5, y: 3, color: Colour.White },{ x: 5, y: 4, color: Colour.White },
        { x: 5, y: 5, color: Colour.White },{ x: 5, y: 6, color: Colour.White },{ x: 5, y: 7, color: Colour.White },{ x: 5, y: 8, color: Colour.White },{ x: 5, y: 9, color: Colour.White },{ x: 5, y: 10, color: Colour.White },{ x: 5, y: 11, color: Colour.White },
        { x: 5, y: 12, color: Colour.White },{ x: 6, y: 12, color: Colour.White },{ x: 7, y: 12, color: Colour.White },{ x: 8, y: 12, color: Colour.White },{ x: 9, y: 12, color: Colour.White },{ x: 4, y: 8, color: Colour.White },{ x: 3, y: 9, color: Colour.White },
        { x: 2, y: 10, color: Colour.White },{ x: 1, y: 11, color: Colour.White },{ x: 0, y: 12, color: Colour.White },{ x: 3, y: 7, color: Colour.White },{ x: 2, y: 6, color: Colour.White }, { x: 10, y: 4, color: Colour.White },{ x: 10, y: 5, color: Colour.White },
        { x: 10, y: 6, color: Colour.White },{ x: 10, y: 7, color: Colour.White },{ x: 10, y: 8, color: Colour.White },{ x: 10, y: 9, color: Colour.White },{ x: 10, y: 10, color: Colour.White },{ x: 10, y: 11, color: Colour.White },{ x: 10, y: 12, color: Colour.White }, 
    ];

    for (let frameNumber = 0; frameNumber < 40; frameNumber++) {
        const pixels: IPixelState[] = [];
        const TVshow = frameNumber  +1;
        const TVanimation = frameNumber -15;

        if (TVshow) {
            pixels.push(...Movies.map(pixel => ({ ...pixel, y: pixel.y - TVanimation, color: Colour.White })));
        }

        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });
    }

    return frames;
}
