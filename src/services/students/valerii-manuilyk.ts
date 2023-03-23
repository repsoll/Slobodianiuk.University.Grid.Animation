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
            personalProjectLink: 'https://tachka.azurewebsites.net/',
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
        { x: 2, y: 6, color: Colour.White },  
        
        { x: 5, y: 13, color: Colour.White },);

    return result;
}
function generateFrames(): IFrame[] {
    const frames: IFrame[] = [];

    const Dollar: IPixelState[] = [
        
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
