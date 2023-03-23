import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class StepTkachivskyiConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Stepan Tkachivskyi';
    }

    public getStudentEmail(): string {
        return 'stepchik09012004@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Stepan',
            surname: 'Tkachivskyi',
            email: this.getStudentEmail(),
            projectName: 'Tankista',
            personalProjectLink: 'https://youtu.be/3xL4dOxGJXo?t=1865',
            header: {frameNumber:0, pixels: getHeaderFrame()},
            frames: generateUkrainItchFrames()
        }
    }

}

function generateUkrainItchFrames(): IFrame[] {
    const frames: IFrame[] = [];

  
    for (let frameNumber = 0; frameNumber < 19; frameNumber++) {
        const result: IPixelState[] = [];


        for (let y = 2; y < 14; y++) {
            result.push({ x: 10, y: y, color: Colour.White });
            result.push({ x: 11, y: y, color: Colour.White });
        }

        result.push({ x: 11, y: 14, color: Colour.White });
        result.push({ x: 12, y: 2, color: Colour.White });
        result.push({ x: 13, y: 3, color: Colour.White });
        result.push({ x: 12, y: 13, color: Colour.White });
        result.push({ x: 13, y: 13, color: Colour.White });

        for (let y = 4; y < 13; y++) {
            result.push({ x: 14, y: y, color: Colour.White });
            if (y < 10){
                result.push({ x: 7, y: y, color: Colour.White });}
        }

        result.push({ x: 8, y: 4, color: Colour.White });
        result.push({ x: 9, y: 4, color: Colour.White });
        result.push({ x: 8, y: 9, color: Colour.White });
        result.push({ x: 9, y: 9, color: Colour.White });

        result.push({ x: 4, y: 5, color: Colour.White });
        result.push({ x: 5, y: 5, color: Colour.White });
        result.push({ x: 6, y: 5, color: Colour.White });

        result.push({ x: 4, y: 3, color: Colour.White });
        result.push({ x: 4, y: 4, color: Colour.White });
        result.push({ x: 5, y: 3, color: Colour.White });
        result.push({ x: 5, y: 4, color: Colour.White });

        result.push({ x: 8, y: 10, color: Colour.White });
        result.push({ x: 8, y: 11, color: Colour.White });
    
    ///Animation

        
        result.push({ x: 0, y: 16 - frameNumber, color: Colour.White });
        result.push({ x: 0, y: 16 - frameNumber + 1, color: Colour.White });
        result.push({ x: 1, y: 16 - frameNumber + 1, color: Colour.White });
        result.push({ x: 2, y: 16 - frameNumber + 1, color: Colour.White });
        result.push({ x: 2, y: 16 - frameNumber, color: Colour.White });
                
        
        frames.push({
            frameNumber: frameNumber,
            pixels: result,
        });
    }
  
    return frames;
}
  

function getHeaderFrame(): IPixelState[] {
    const result: IPixelState[] = [];
  
    for (let y = 2; y < 14; y++) {
        result.push({ x: 6, y: y, color: Colour.White });
        result.push({ x: 7, y: y, color: Colour.White });
    }

    result.push({ x: 7, y: 14, color: Colour.White });
    result.push({ x: 8, y: 2, color: Colour.White });
    result.push({ x: 9, y: 3, color: Colour.White });
    result.push({ x: 8, y: 13, color: Colour.White });
    result.push({ x: 9, y: 13, color: Colour.White });

    for (let y = 4; y < 13; y++) {
        result.push({ x: 10, y: y, color: Colour.White });
        if (y < 10){
            result.push({ x: 3, y: y, color: Colour.White });}
    }

    result.push({ x: 4, y: 4, color: Colour.White });
    result.push({ x: 5, y: 4, color: Colour.White });
    result.push({ x: 4, y: 9, color: Colour.White });
    result.push({ x: 5, y: 9, color: Colour.White });

    result.push({ x: 0, y: 5, color: Colour.White });
    result.push({ x: 1, y: 5, color: Colour.White });
    result.push({ x: 2, y: 5, color: Colour.White });

    result.push({ x: 0, y: 3, color: Colour.White });
    result.push({ x: 0, y: 4, color: Colour.White });
    result.push({ x: 1, y: 3, color: Colour.White });
    result.push({ x: 1, y: 4, color: Colour.White });

    result.push({ x: 4, y: 10, color: Colour.White });
    result.push({ x: 4, y: 11, color: Colour.White });

    return result;
  }
  

