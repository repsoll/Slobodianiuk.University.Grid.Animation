import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class  OleksandrZhukConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Zhuk Oleksandr';
    }

    public getStudentEmail(): string {
        return 'zuks01123@gmail.com';
    }

   
    public loadConfig(): IAnimationConfig {
        return {
            name: 'Oleksandr',
            surname: 'Zhuk',
            email: this.getStudentEmail(),
            projectName: 'Tachka',
            personalProjectLink: 'https://tachka.azurewebsites.net/',
            header: Constants.DefaultConfig.header,
            frames: generateFrames()
        }
    }

}


function generateFrames(): IFrame[] {
    const frames: IFrame[] = [];

    const Tachka: IPixelState[] = [
        { x: 3, y: 5, color: Colour.White },  { x: 3, y: 10, color: Colour.White }, { x: 6, y: 3, color: Colour.White },{ x: 7, y: 5, color: Colour.White },{ x: 7, y: 10, color: Colour.White },{ x: 6, y:0, color: Colour.White },{ x: 10, y: 1, color: Colour.White },{ x: 13, y: 3, color: Colour.White },{ x: 11, y: 7, color: Colour.White },{ x: 12, y: 12, color: Colour.White },{ x: 11, y: 14, color: Colour.White },
        { x: 7, y: 14, color: Colour.White },
        { x: 3, y: 6, color: Colour.White },  { x: 4, y: 4, color: Colour.White },  { x: 7, y: 3, color: Colour.White },{ x: 7, y: 6, color: Colour.White },{ x: 7, y: 11, color: Colour.White },{ x: 7, y: 1, color: Colour.White },{ x: 11, y: 1, color: Colour.White },{ x: 12, y: 3, color: Colour.White },{ x: 11, y: 8, color: Colour.White },{ x: 13, y: 12, color: Colour.White },{ x: 10, y: 14, color: Colour.White },
        { x: 6, y: 15, color: Colour.White },
        { x: 3, y: 7, color: Colour.White },  { x: 5, y: 4, color: Colour.White },  { x: 6, y: 12, color: Colour.White },{ x: 7, y: 7, color: Colour.White },{ x: 7, y: 12, color: Colour.White },{ x: 8, y: 2, color: Colour.White },{ x: 12, y: 1, color: Colour.White },{ x: 11, y: 4, color: Colour.White },{ x: 11, y: 9, color: Colour.White },{ x: 13, y: 13, color: Colour.White },{ x: 9, y: 14, color: Colour.White },
        { x: 5, y: 14, color: Colour.White },
        { x: 3, y: 8, color: Colour.White },  { x: 4, y: 11, color: Colour.White }, { x: 7, y: 12, color: Colour.White },{ x: 7, y: 8, color: Colour.White },{ x: 5, y: 1, color: Colour.White },{ x: 9, y: 2, color: Colour.White },{ x: 13, y: 1, color: Colour.White },{ x: 11, y: 5, color: Colour.White },{ x: 11, y: 10, color: Colour.White },{ x: 13, y: 14, color: Colour.White },{ x: 9, y: 13, color: Colour.White },
        { x: 5, y: 13, color: Colour.White },
        { x: 3, y: 9, color: Colour.White },  { x: 5, y: 11, color: Colour.White }, { x: 7, y: 4, color: Colour.White },{ x: 7, y: 9, color: Colour.White },{ x: 5, y: 2, color: Colour.White },{ x: 9, y: 1, color: Colour.White },{ x: 13, y: 2, color: Colour.White },{ x: 11, y: 6, color: Colour.White },{ x: 11, y: 11, color: Colour.White },{ x: 12, y: 14, color: Colour.White },{ x: 8, y: 13, color: Colour.White },
    ];




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
