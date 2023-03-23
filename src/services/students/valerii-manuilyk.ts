import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class  ValeriymanuilykConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Valeriy Manuilyk';
    }

    public getStudentEmail(): string {
        return 'valera2004vich@gmail.com';
    }

   
    public loadConfig(): IAnimationConfig {
        return {
            name: 'Valeriy',
            surname: 'Manuilyk',
            email: this.getStudentEmail(),
            projectName: 'Dollar',
            personalProjectLink: 'https://dollar.azurewebsites.net/',
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
        { x: 1, y: 4, color: Colour.White },
        { x: 1, y: 5, color: Colour.White },  
        { x: 1, y: 6, color: Colour.White },  
        { x: 1, y: 7, color: Colour.White },  
        { x: 1, y: 8, color: Colour.White },  
        { x: 1, y: 9, color: Colour.White },
        { x: 1, y: 10, color: Colour.White },     
        { x: 2, y: 3, color: Colour.White },
        { x: 2, y: 11, color: Colour.White },
        { x: 3, y: 2, color: Colour.White },
        { x: 3, y: 7, color: Colour.White },   
        { x: 3, y: 12, color: Colour.White },
        { x: 4, y: 1, color: Colour.White },
        { x: 4, y: 5, color: Colour.White }, 
        { x: 4, y: 6, color: Colour.White }, 
        { x: 4, y: 7, color: Colour.White }, 
        { x: 4, y: 8, color: Colour.White }, 
        { x: 4, y: 9, color: Colour.White }, 
        { x: 4, y: 13, color: Colour.White },
        { x: 5, y: 1, color: Colour.White },
        { x: 5, y: 4, color: Colour.White }, 
        { x: 5, y: 7, color: Colour.White }, 
        { x: 5, y: 13, color: Colour.White },
        { x: 6, y: 1, color: Colour.White },
        { x: 6, y: 4, color: Colour.White }, 
        { x: 6, y: 7, color: Colour.White }, 
        { x: 6, y: 13, color: Colour.White },
        { x: 7, y: 1, color: Colour.White }, 
        { x: 7, y: 4, color: Colour.White }, 
        { x: 7, y: 7, color: Colour.White }, 
        { x: 7, y: 13, color: Colour.White },
        { x: 8, y: 1, color: Colour.White }, 
        { x: 8, y: 5, color: Colour.White }, 
        { x: 8, y: 6, color: Colour.White }, 
        { x: 8, y: 7, color: Colour.White }, 
        { x: 8, y: 8, color: Colour.White }, 
        { x: 8, y: 9, color: Colour.White }, 
        { x: 8, y: 13, color: Colour.White },
        { x: 9, y: 1, color: Colour.White },
        { x: 9, y: 7, color: Colour.White }, 
        { x: 9, y: 10, color: Colour.White }, 
        { x: 9, y: 13, color: Colour.White },
        { x: 10, y: 1, color: Colour.White }, 
        { x: 10, y: 7, color: Colour.White }, 
        { x: 10, y: 10, color: Colour.White }, 
        { x: 10, y: 13, color: Colour.White }, 
        { x: 11, y: 1, color: Colour.White }, 
        { x: 11, y: 7, color: Colour.White }, 
        { x: 11, y: 10, color: Colour.White }, 
        { x: 11, y: 13, color: Colour.White }, 
        { x: 12, y: 1, color: Colour.White }, 
        { x: 12, y: 5, color: Colour.White }, 
        { x: 12, y: 6, color: Colour.White }, 
        { x: 12, y: 7, color: Colour.White }, 
        { x: 12, y: 8, color: Colour.White }, 
        { x: 12, y: 9, color: Colour.White }, 
        { x: 12, y: 13, color: Colour.White },
        { x: 13, y: 2, color: Colour.White }, 
        { x: 13, y: 7, color: Colour.White }, 
        { x: 13, y: 13, color: Colour.White },  
        { x: 14, y: 3, color: Colour.White }, 
        { x: 14, y: 11, color: Colour.White }, 
        { x: 15, y: 4, color: Colour.White }, 
        { x: 15, y: 5, color: Colour.White }, 
        { x: 15, y: 6, color: Colour.White }, 
        { x: 15, y: 7, color: Colour.White }, 
        { x: 15, y: 8, color: Colour.White }, 
        { x: 15, y: 9, color: Colour.White },                 
        { x: 15, y: 10, color: Colour.White },);

    return result;
}
function generateFrames(): IFrame[] {
    const frames: IFrame[] = [];

    const Dollar: IPixelState[] = [
        { x: 1, y: 4, color: Colour.White }, { x: 1, y: 5, color: Colour.White },{ x: 1, y: 6, color: Colour.White }, { x: 1, y: 7, color: Colour.White },  { x: 1, y: 8, color: Colour.White },  { x: 1, y: 9, color: Colour.White },{ x: 1, y: 10, color: Colour.White },
        { x: 1, y: 10, color: Colour.White },     { x: 2, y: 3, color: Colour.White },{ x: 2, y: 11, color: Colour.White },{ x: 3, y: 2, color: Colour.White },{ x: 3, y: 7, color: Colour.White }, { x: 3, y: 12, color: Colour.White },{ x: 4, y: 1, color: Colour.White },
        { x: 4, y: 5, color: Colour.White }, { x: 4, y: 6, color: Colour.White },  { x: 4, y: 7, color: Colour.White },{ x: 4, y: 8, color: Colour.White }, { x: 4, y: 9, color: Colour.White }, { x: 4, y: 13, color: Colour.White },{ x: 5, y: 1, color: Colour.White },{ x: 5, y: 4, color: Colour.White }, { x: 5, y: 7, color: Colour.White }, { x: 5, y: 13, color: Colour.White },{ x: 6, y: 1, color: Colour.White },{ x: 6, y: 4, color: Colour.White },  { x: 6, y: 7, color: Colour.White }, 
        { x: 6, y: 13, color: Colour.White },{ x: 7, y: 1, color: Colour.White }, { x: 7, y: 4, color: Colour.White },{ x: 7, y: 7, color: Colour.White }, { x: 7, y: 13, color: Colour.White },{ x: 8, y: 1, color: Colour.White }, { x: 8, y: 5, color: Colour.White }, { x: 8, y: 6, color: Colour.White }, { x: 8, y: 7, color: Colour.White }, { x: 8, y: 8, color: Colour.White }, { x: 8, y: 9, color: Colour.White }, { x: 8, y: 13, color: Colour.White },
        { x: 9, y: 1, color: Colour.White },{ x: 9, y: 7, color: Colour.White }, { x: 9, y: 10, color: Colour.White }, { x: 9, y: 13, color: Colour.White },
        { x: 10, y: 1, color: Colour.White }, { x: 10, y: 7, color: Colour.White }, { x: 10, y: 10, color: Colour.White },  { x: 10, y: 13, color: Colour.White }, { x: 11, y: 1, color: Colour.White }, { x: 11, y: 7, color: Colour.White }, { x: 11, y: 10, color: Colour.White },  { x: 11, y: 13, color: Colour.White }, 
        { x: 12, y: 1, color: Colour.White }, { x: 12, y: 5, color: Colour.White }, { x: 12, y: 6, color: Colour.White }, { x: 12, y: 7, color: Colour.White }, { x: 12, y: 8, color: Colour.White }, { x: 12, y: 9, color: Colour.White }, { x: 12, y: 13, color: Colour.White },
        { x: 13, y: 2, color: Colour.White }, { x: 13, y: 7, color: Colour.White }, { x: 13, y: 12, color: Colour.White },   { x: 14, y: 3, color: Colour.White }, { x: 14, y: 11, color: Colour.White }, { x: 15, y: 4, color: Colour.White },  { x: 15, y: 5, color: Colour.White }, { x: 15, y: 6, color: Colour.White }, { x: 15, y: 7, color: Colour.White }, 
        { x: 15, y: 8, color: Colour.White },  { x: 15, y: 9, color: Colour.White },{ x: 15, y: 10, color: Colour.White },
    ];





    for (let frameNumber = 0; frameNumber < 40; frameNumber++) {
        const pixels: IPixelState[] = [];

        const showDollar = frameNumber  +100;
        const slide = frameNumber -20 ;

        if (showDollar) {
            pixels.push(...Dollar.map(pixel => ({ ...pixel, x: pixel.x - slide, color: Colour.White })));
        }
        

        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });

       
    }

    
    

    return frames;
}
