import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class YuriiRobakConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Yurii Robak';
    }

    public getStudentEmail(): string {
        return 'yurarobak7@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Yurii',
            surname: 'Robak',
            email: this.getStudentEmail(),
            projectName: 'LinkedinClone',
            personalProjectLink: 'https://linkedinclone.azurewebsites.net',
            header: CreateFrames(),
            frames: getHeaderFrame()
        }
    }
}

function CreateFrames(): IFrame {
    const pixels: IPixelState[] = [
    { x: 1, y: 3, color: Colour.White },
    { x: 2, y: 3, color: Colour.White },
    { x: 9, y: 3, color: Colour.White },
    { x: 19, y: 3, color: Colour.White },
    { x: 8, y: 3, color: Colour.White },
    { x: 7, y: 3, color: Colour.White },
    { x: 6, y: 3, color: Colour.White },
    { x: 5, y: 3, color: Colour.White },
    { x: 4, y: 3, color: Colour.White },

    
    { x: 9, y: 7, color: Colour.White },
    { x: 8, y: 7, color: Colour.White },
    { x: 7, y: 7, color: Colour.White }, 
    { x: 6, y: 7, color: Colour.White },
    { x: 5, y: 7, color: Colour.White },
    { x: 4, y: 7, color: Colour.White },
    { x: 4, y: 8, color: Colour.White },
    { x: 3, y: 8, color: Colour.White },
    { x: 3, y: 9, color: Colour.White },
    { x: 2, y: 9, color: Colour.White },
    { x: 2, y: 10, color: Colour.White },
    { x: 3, y: 10, color: Colour.White },
    { x: 3, y: 11, color: Colour.White },
    { x: 4, y: 11, color: Colour.White },
    { x: 4, y: 12, color: Colour.White },
    { x: 5, y: 12, color: Colour.White },
    { x: 6, y: 12, color: Colour.White },
    { x: 7, y: 12, color: Colour.White },
    { x: 8, y: 12, color: Colour.White },
    { x: 9, y: 12, color: Colour.White },
  ];

    return {
        frameNumber: 0,
        pixels: pixels,
      };
}

function getHeaderFrame(): IFrame[]{
    const frames: IFrame[] = [];

    const letterI: IPixelState[] = [
        { x: 3, y: 3, color: Colour.White },
        { x: 4, y: 3, color: Colour.White },
        { x: 12, y: 3, color: Colour.White },
        { x: 11, y: 3, color: Colour.White },
        { x: 10, y: 3, color: Colour.White },
        { x: 9, y: 3, color: Colour.White },
        { x: 8, y: 3, color: Colour.White },
        { x: 7, y: 3, color: Colour.White },
        { x: 6, y: 3, color: Colour.White },
    ];
    

    const letterN: IPixelState[] = [
        { x: 13, y: 7, color: Colour.White },
        { x: 12, y: 7, color: Colour.White },
        { x: 11, y: 7, color: Colour.White }, 
        { x: 10, y: 7, color: Colour.White },
        { x: 9, y: 7, color: Colour.White },
        { x: 8, y: 7, color: Colour.White },
        { x: 8, y: 8, color: Colour.White },
        { x: 7, y: 8, color: Colour.White },
        { x: 7, y: 9, color: Colour.White },
        { x: 6, y: 9, color: Colour.White },
        { x: 6, y: 10, color: Colour.White },
        { x: 7, y: 10, color: Colour.White },
        { x: 7, y: 11, color: Colour.White },
        { x: 8, y: 11, color: Colour.White },
        { x: 8, y: 12, color: Colour.White },
        { x: 9, y: 12, color: Colour.White },
        { x: 10, y: 12, color: Colour.White },
        { x: 11, y: 12, color: Colour.White },
        { x: 12, y: 12, color: Colour.White },
        { x: 13, y: 12, color: Colour.White },
    ];

    for (let frameNumber = 0; frameNumber < 40; frameNumber++) {
        const pixels: IPixelState[] = [];
        
        const showI = frameNumber + 100 ;
        const showN = frameNumber - 20 ;
        const slide = frameNumber - 11;


        if (showI) {
            pixels.push(...letterI.map(pixel => ({
                ...pixel,
                x: pixel.x + slide,
                color: Colour.White
            })));
        }
        if (showN) {
            pixels.push(...letterN.map(pixel => ({
                ...pixel,
                x: pixel.x + slide,
                color: Colour.White
            })));
        }
        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });
    }
            
    return frames;
}