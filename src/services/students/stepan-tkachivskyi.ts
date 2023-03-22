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
            projectName: 'UkrainItch.io',
            personalProjectLink: 'https://youtu.be/3xL4dOxGJXo?t=1865',
            header: {frameNumber:0, pixels: getHeaderFrame()},
            frames: generateUkrainItchFrames()
        }
    }

}

function generateUkrainItchFrames(): IFrame[] {
    const frames: IFrame[] = [];
    const squareSize = 6;
  
    for (let frameNumber = 0; frameNumber < 60; frameNumber++) {
      const pixels: IPixelState[] = [];
  
      for (let i = 0; i < squareSize; i++) {
        pixels.push({ x: i, y: frameNumber, color: Colour.White });
        pixels.push({ x: i, y: 59 - frameNumber, color: Colour.White });
        pixels.push({ x: 59 - i, y: frameNumber, color: Colour.White });
        pixels.push({ x: 59 - i, y: 59 - frameNumber, color: Colour.White });
      }
  
      frames.push({
        frameNumber: frameNumber,
        pixels: pixels,
      });
    }
  
    return frames;
}
  

function getHeaderFrame(): IPixelState[] {
    const result: IPixelState[] = [];
  
    // Draw body
    for (let x = 3; x < 13; x++) {
      for (let y = 5; y < 11; y++) {
        result.push({ x: x, y: y, color: Colour.White });
      }
    }
  
    // Draw eyes
    result.push({ x: 4, y: 6, color: Colour.White });
    result.push({ x: 4, y: 6, color: Colour.Black });
    result.push({ x: 10, y: 6, color: Colour.White });
    result.push({ x: 10, y: 6, color: Colour.Black });
  
    // Draw mouth
    result.push({ x: 6, y: 9, color: Colour.Black });
    result.push({ x: 7, y: 10, color: Colour.Black });
    result.push({ x: 8, y: 10, color: Colour.Black });
    result.push({ x: 9, y: 9, color: Colour.Black });
  
    // Draw legs
    for (let x = 4; x < 7; x++) {
      result.push({ x: x, y: 11, color: Colour.White });
      result.push({ x: x, y: 12, color: Colour.White });
    }
    for (let x = 9; x < 12; x++) {
      result.push({ x: x, y: 11, color: Colour.White });
      result.push({ x: x, y: 12, color: Colour.White });
    }
  
    return result;
  }
  

