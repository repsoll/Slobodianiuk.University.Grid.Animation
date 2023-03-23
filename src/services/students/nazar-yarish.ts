import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class NazarYarishConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Nazar Yarish';
    }

    public getStudentEmail(): string {
        return 'Soh1gh3105@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Nazar',
            surname: 'Yarish',
            email: this.getStudentEmail(),
            projectName: 'OK',
            personalProjectLink: 'https://azurewebsites.net (Неробоча, sorry :)',
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
        { x: 3, y: 2, color: Colour.White },  
        { x: 3, y: 3, color: Colour.White },
        { x: 3, y: 4, color: Colour.White },  
        { x: 3, y: 5, color: Colour.White }, 
        { x: 3, y: 6, color: Colour.White },
        { x: 3, y: 7, color: Colour.White },
        { x: 3, y: 8, color: Colour.White },
        { x: 4, y: 8, color: Colour.White },
        { x: 5, y: 8, color: Colour.White },
        { x: 6, y: 8, color: Colour.White },
        { x: 7, y: 8, color: Colour.White },
        { x: 8, y: 8, color: Colour.White },
        { x: 9, y: 8, color: Colour.White },  
        { x: 10, y: 8, color: Colour.White },
        { x: 11, y: 8, color: Colour.White },  
        { x: 12, y: 8, color: Colour.White }, 
        { x: 13, y: 8, color: Colour.White },
        { x: 8, y: 2, color: Colour.White },
        { x: 9, y: 2, color: Colour.White },
        { x: 10, y: 2, color: Colour.White },
        { x: 11, y: 2, color: Colour.White },
        { x: 12, y: 2, color: Colour.White },
        { x: 13, y: 2, color: Colour.White },  
        { x: 8, y: 3, color: Colour.White },
        { x: 8, y: 4, color: Colour.White },  
        { x: 8, y: 5, color: Colour.White }, 
        { x: 8, y: 6, color: Colour.White },
        { x: 8, y: 7, color: Colour.White },
        { x: 8, y: 8, color: Colour.White },
        { x: 8, y: 9, color: Colour.White },
        { x: 8, y: 10, color: Colour.White },
        { x: 8, y: 11, color: Colour.White },
        { x: 8, y: 12, color: Colour.White },
        { x: 8, y: 13, color: Colour.White },
        { x: 3, y: 14, color: Colour.White },
        { x: 4, y: 14, color: Colour.White },
        { x: 5, y: 14, color: Colour.White },
        { x: 6, y: 14, color: Colour.White },
        { x: 7, y: 14, color: Colour.White },
        { x: 8, y: 14, color: Colour.White },
        { x: 13, y: 8, color: Colour.White },
        { x: 13, y: 9, color: Colour.White },
        { x: 13, y: 10, color: Colour.White },
        { x: 13, y: 11, color: Colour.White },
        { x: 13, y: 12, color: Colour.White },
        { x: 13, y: 13, color: Colour.White },
        { x: 13, y: 14, color: Colour.White },);

    return result;
}
function generateFrames(): IFrame[] {
    const frames: IFrame[] = [];

    const Tachka: IPixelState[] = [
        { x: 3, y: 2, color: Colour.White },  
        { x: 3, y: 3, color: Colour.White },
        { x: 3, y: 4, color: Colour.White },  
        { x: 3, y: 5, color: Colour.White }, 
        { x: 3, y: 6, color: Colour.White },
        { x: 3, y: 7, color: Colour.White },
        { x: 3, y: 8, color: Colour.White },
        { x: 4, y: 8, color: Colour.White },
        { x: 5, y: 8, color: Colour.White },
        { x: 6, y: 8, color: Colour.White },
        { x: 7, y: 8, color: Colour.White },
        { x: 8, y: 8, color: Colour.White },
        { x: 9, y: 8, color: Colour.White },  
        { x: 10, y: 8, color: Colour.White },
        { x: 11, y: 8, color:  Colour.White },  
        { x: 12, y: 8, color: Colour.White }, 
        { x: 13, y: 8, color: Colour.White },
        { x: 8, y: 2, color: Colour.White },
        { x: 9, y: 2, color: Colour.White },
        { x: 10, y: 2, color: Colour.White },
        { x: 11, y: 2, color: Colour.White },
        { x: 12, y: 2, color: Colour.White },
        { x: 13, y: 2, color: Colour.White },  
        { x: 8, y: 3, color: Colour.White },
        { x: 8, y: 4, color: Colour.White },  
        { x: 8, y: 5, color: Colour.White }, 
        { x: 8, y: 6, color: Colour.White },
        { x: 8, y: 7, color: Colour.White },
        { x: 8, y: 8, color: Colour.White },
        { x: 8, y: 9, color: Colour.White },
        { x: 8, y: 10, color: Colour.White },
        { x: 8, y: 11, color: Colour.White },
        { x: 8, y: 12, color: Colour.White },
        { x: 8, y: 13, color: Colour.White },
        { x: 3, y: 14, color: Colour.White },
        { x: 4, y: 14, color: Colour.White },
        { x: 5, y: 14, color: Colour.White },
        { x: 6, y: 14, color: Colour.White },
        { x: 7, y: 14, color: Colour.White },
        { x: 8, y: 14, color: Colour.White },
        { x: 13, y: 8, color: Colour.White },
        { x: 13, y: 9, color: Colour.White },
        { x: 13, y: 10, color: Colour.White },
        { x: 13, y: 11, color: Colour.White },
        { x: 13, y: 12, color: Colour.White },
        { x: 13, y: 13, color: Colour.White },
        { x: 13, y: 14, color: Colour.White }, 
    ]


    for (let frameNumber = 0; frameNumber < 40; frameNumber++) {
        const pixels: IPixelState[] = [];

        const showCar = frameNumber  +100;
        const slide = frameNumber -20 ;

        if (showCar) {
            pixels.push(...Tachka.map(pixel => ({ ...pixel, x: pixel.x - slide, color: Colour.White })));
        }
        

        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });

       
    }

    return frames;
}