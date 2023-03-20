import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class  YaroslavTsvykConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Yaroslav Tsvyk';
    }

    public getStudentEmail(): string {
        return 'mygoodcovers@gmail.com';
    }

   
    public loadConfig(): IAnimationConfig {
        return {
            name: 'Yaroslav',
            surname: 'Tsvyk',
            email: this.getStudentEmail(),
            projectName: 'A Face',
            personalProjectLink: 'https://typingspeedtestwebsite.azurewebsites.net/',
            header: {frameNumber:0, pixels: getHeaderFrame()},
            frames: getFrames()
        }
    }

}


function getFrames(): IFrame[] {
    const frames: IFrame[] = [];

    const Animation: IPixelState[] = [];

    for (let frameNumber = 0; frameNumber < 33; frameNumber++) {
        Animation.push({x : frameNumber, y: frameNumber, color: Colour.White})
    }


    for (let frameNumber = 0; frameNumber < 33; frameNumber++) {
        const pixels: IPixelState[] = [];

        const pos = frameNumber-17;

        
        pixels.push(...Animation.map(pixel => ({ ...pixel, y: pixel.y + pos, color: Colour.White })));
        
        

        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });

       
    }

    for (let frameNumber = 33; frameNumber < 50; frameNumber++) {
        frames.push({frameNumber: frameNumber, pixels:getHeaderFrame()});
    }

    for (let frameNumber = 50; frameNumber < 83; frameNumber++) {
        const pixels: IPixelState[] = [];

        const pos = frameNumber - 67;

        
        pixels.push(...Animation.map(pixel => ({ ...pixel, x: pixel.x + pos, color: Colour.White })));
        
        

        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });
        
    }

    for (let frameNumber = 83; frameNumber < 100; frameNumber++) {
        frames.push({frameNumber: frameNumber, pixels:getHeaderFrame()});
    }

    return frames;
}

function getHeaderFrame() : IPixelState[] {
    let result = [];

    for (let frameNumber = 2; frameNumber < 7; frameNumber++) {
        result.push({x: frameNumber, y: 3, color: Colour.White})
    }
    for (let frameNumber = 6; frameNumber > 0; frameNumber--) {
        result.push({x: 9, y: frameNumber+4, color: Colour.White}) 
    }
    for (let frameNumber = 2; frameNumber < 7; frameNumber++) {
        result.push({x: frameNumber, y: 12, color: Colour.White})
    }

    return result;
}