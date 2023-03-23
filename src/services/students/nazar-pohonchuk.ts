import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class  NazarPohonchukConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Nazar Pohonchuk';
    }

    public getStudentEmail(): string {
        return 'npogoncuk@gmail.com';
    }

   
    public loadConfig(): IAnimationConfig {
        return {
            name: 'Nazar',
            surname: 'Pohonchuk',
            email: this.getStudentEmail(),
            projectName: 'Glog',
            personalProjectLink: 'https://google.com',
            header: Avatar(0),
            frames: generateFrames()
        }
    }

}

let plates = [
    [{ x: 4, y: 1, color: Colour.White }, { x: 5, y: 1, color: Colour.White }],
    [{ x: 4, y: 2, color: Colour.White }, { x: 5, y: 2, color: Colour.White }, { x: 3, y: 2, color: Colour.White }, { x: 6, y: 2, color: Colour.White }],
    [{ x: 4, y: 3, color: Colour.White }, { x: 5, y: 3, color: Colour.White }, { x: 3, y: 3, color: Colour.White }, { x: 6, y: 3, color: Colour.White }, { x: 2, y: 3, color: Colour.White }, { x: 7, y: 3, color: Colour.White }],
    [{ x: 4, y: 14, color: Colour.White }, { x: 5, y: 14, color: Colour.White }],
    [{ x: 4, y: 13, color: Colour.White }, { x: 5, y: 13, color: Colour.White }, { x: 3, y: 13, color: Colour.White }, { x: 6, y: 13, color: Colour.White }],
    [{ x: 4, y: 12, color: Colour.White }, { x: 5, y: 12, color: Colour.White }, { x: 3, y: 12, color: Colour.White }, { x: 6, y: 12, color: Colour.White }, { x: 2, y: 12, color: Colour.White }, { x: 7, y: 12, color: Colour.White }]

]
let dumbbell: IPixelState[] = []

const Avatar = (frameNumber: number): IFrame => {
    let result: IFrame = {
        frameNumber: frameNumber,
        pixels: []
    };
    for (let i = 0; i < 6; i++) {
        plates[i].forEach(function (value) {
            result.pixels.push(value);
            dumbbell.push(value);
          });
    }
    for (let j = 4; j <= 11; j++) {
        result.pixels.push({ x: 4, y: j, color: Colour.White });
        dumbbell.push({ x: 4, y: j, color: Colour.White });
        result.pixels.push({ x: 5, y: j, color: Colour.White });
        dumbbell.push({ x: 5, y: j, color: Colour.White });
    }
    return result;
}
function generateFrames(): IFrame[] {
    const frames: IFrame[] = [];

    for (let frameNumber = 0; frameNumber < Constants.MaxTotalFrames; frameNumber++) {
        const pixels: IPixelState[] = [];

        const show = frameNumber % 60 < 30;
    
        let slide = (frameNumber % 30) - 10;
        
        if(show) pixels.push(...dumbbell.map(pixel => ({ ...pixel, x: pixel.x + slide, color: Colour.White })));
        else pixels.push(...dumbbell.map(pixel => ({ ...pixel, x: pixel.x - slide, color: Colour.White })));
        
        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });

       
    }

    return frames;
}