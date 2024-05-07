import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import { Colour } from '../../models/colour';
import IPixelState from '../../models/pixel-state';
import IFrame from '../../models/frame';

export class KaterynaBaryliukConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Kateryna Baryliuk';
    }

    public getStudentEmail(): string {
        return 'vasyabarilyuk1427@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Kateryna',
            surname: 'Baryliuk',
            email: this.getStudentEmail(),
            projectName: 'Book',
            personalProjectLink: 'https://onlinebookclub.azurewebsites.net',
            header: GetHeader(),
            frames: GenerateFrames(),
        };
    }
}

function GenerateClockFrame(frameNumber: number): IFrame {
    const pixels: IPixelState[] = [];

    for (let y = 1; y < 14; y++) {
        pixels.push({ x: 7, y, color: Colour.White });
    }

    for (let y = 2; y < 13; y++) {
        pixels.push({ x: 6, y, color: Colour.White });
    }

    
    const hours = frameNumber % 6; 
    const minutes = frameNumber % 60;


    const hourAngle = (360 - ((hours * 30) + ( minutes/ 2))) * (Math.PI / 180);
    const hourLength = 6;
    const hourX = Math.round(7 + hourLength * Math.sin(hourAngle));
    const hourY = Math.round(7 - hourLength * Math.cos(hourAngle));
    drawLine(7, 7, hourX, hourY, pixels); 



    const frame: IFrame = {
        frameNumber,
        pixels
    };

    return frame;
}

function drawLine(x1: number, y1: number, x2: number, y2: number, pixels: IPixelState[]): void {
    const dx = Math.abs(x2 - x1);
    const dy = Math.abs(y2 - y1);
    const sx = (x1 < x2) ? 1 : -1;
    const sy = (y1 < y2) ? 1 : -1;
    let err = dx - dy;

    while (true) {
        // Push the current pixel to the array
        pixels.push({ x: x1, y: y1, color: Colour.White });

        // Stop if the line reaches the end point
        if ((x1 === x2) && (y1 === y2)) break;

        // // Stop if the line reaches the outlined positions
        // if ((x1 === 7 && (y1 === 2 || y1 === 13))) break;

        const e2 = 2 * err;
        if (e2 > -dy) { err -= dy; x1 += sx; }
        if (e2 < dx) { err += dx; y1 += sy; }
    }
}


function GenerateFrames(): IFrame[] {
    const frames: IFrame[] = [];

    for (let frameNumber = 0; frameNumber < 30; frameNumber++) { 
        frames.push(GenerateClockFrame(frameNumber));
    }

    return frames;
}

function GetHeader(): IFrame {
    return GenerateClockFrame(0);
}
