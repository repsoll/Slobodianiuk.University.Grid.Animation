import IAnimationConfig from '../../models/animation-config';
import { IConfigLoaderService } from '../config-loader-interface';
import Constants from '../../constants/constants';
import { Colour } from '../../models/colour';
import IPixelState from '../../models/pixel-state';
import IFrame from '../../models/frame';

export class MyronVikaConfigLoaderService implements IConfigLoaderService {
  
    public getStudentName(): string {
    return "Myron Vika";
  }

  public getStudentEmail(): string {
    return "myronvika@gmail.com";
  }

  public loadConfig(): IAnimationConfig {
    return {
      name: "Victoria",
      surname: "Myron",
      email: this.getStudentEmail(),
      projectName: "Mob",
      personalProjectLink: "https://web-project-1.azurewebsites.net/",
      header: createPodRecommderHeader(),
            frames: generateMFrames()
    };
  }
}

function createPodRecommderHeader(): IFrame {
    const pixels: IPixelState[] = [
        { x: 2, y: 7, color: Colour.White },
        { x: 3, y: 7, color: Colour.White },
        { x: 4, y: 7, color: Colour.White },
        { x: 5, y: 7, color: Colour.White },
        { x: 6, y: 7, color: Colour.White },
        { x: 7, y: 7, color: Colour.White },
        { x: 10, y: 7, color: Colour.White },
    ];

    return {
        frameNumber: 0,
        pixels: pixels,
    };
}
function generateMFrames(): IFrame[] {
  const frames: IFrame[] = [];

  // Iterate over each frame
  for (let frameNumber = 0; frameNumber < 32; frameNumber++) {
    const frame: IPixelState[] = [];

    // Iterate over each pixel in the frame
    for (let x = 0; x < 16; x++) {
      for (let y = 0; y < 16; y++) {
        // Calculate the position of the pixel based on the frame number
        const xPos = x + frameNumber;

        // Add a white pixel to the frame if it's within bounds
        if ((xPos >= 2 && xPos <= 4 && y >= 2 && y <= 14) ||  
            (xPos >= 5 && xPos <= 7 && y >= 2 && y <= 5) ||
            (xPos >= 5 && xPos <= 7 && y >= 11 && y <= 14) ||
            (xPos >= 8 && xPos <= 10 && y >= 2 && y <= 8) ||
            (xPos >= 8 && xPos <= 10 && y >= 8 && y <= 14) ||
            (xPos >= 11 && xPos <= 13 && y >= 2 && y <= 11) ||
            (xPos >= 11 && xPos <= 13 && y >= 11 && y <= 14) ||
            (xPos >= 14 && xPos <= 16 && y >= 2 && y <= 14)) {
          frame.push({ x, y, color: Colour.White });
        } else {
          frame.push({ x, y, color: Colour.Black });
        }
      }
    }

    // Add the generated frame to the array
    frames.push({ frameNumber, pixels: frame });
  }

  return frames;
}