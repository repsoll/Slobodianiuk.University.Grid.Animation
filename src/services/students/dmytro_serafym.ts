import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class  DmytroSerafymConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Dmytro Serafym';
    }

    public getStudentEmail(): string {
        return 'dimaserafym03@gmail.com';
    }

   
    public loadConfig(): IAnimationConfig {
        return {
            name: 'Dmytro',
            surname: 'Serafym',
            email: this.getStudentEmail(),
            projectName: 'Noise',
            personalProjectLink: 'https://loans-proj.azurewebsites.net/',
            header: {
                frameNumber: 0, pixels: [
                    { x: 1, y: 3, color: Colour.White },{ x: 1, y: 4, color: Colour.White },{ x: 1, y: 5, color: Colour.White },
                    { x: 1, y: 7, color: Colour.White },{ x: 1, y: 8, color: Colour.White },{ x: 1, y: 9, color: Colour.White },
                    { x: 1, y: 12, color: Colour.White },{ x: 2, y: 3, color: Colour.White },{ x: 2, y: 5, color: Colour.White },
                    { x: 3, y: 3, color: Colour.White },{ x: 3, y: 5, color: Colour.White },{ x: 2, y: 7, color: Colour.White },
                    { x: 2, y: 9, color: Colour.White },{ x: 2, y: 12, color: Colour.White },{ x: 3, y: 12, color: Colour.White },
                    { x: 3, y: 7, color: Colour.White },{ x: 3, y: 8, color: Colour.White },{ x: 3, y: 9, color: Colour.White },
                    { x: 5, y: 4, color: Colour.White },{ x: 5, y: 5, color: Colour.White },{ x: 5, y: 6, color: Colour.White },
                    { x: 6, y: 3, color: Colour.White },{ x: 7, y: 4, color: Colour.White },{ x: 7, y: 5, color: Colour.White },
                    { x: 8, y: 6, color: Colour.White },{ x: 9, y: 5, color: Colour.White },{ x: 9, y: 4, color: Colour.White },
                    { x: 9, y: 3, color: Colour.White },{ x: 5, y: 9, color: Colour.White },{ x: 5, y: 10, color: Colour.White },
                    { x: 5, y: 11, color: Colour.White },{ x: 5, y: 12, color: Colour.White },{ x: 6, y: 9, color: Colour.White },
                    { x: 7, y: 9, color: Colour.White },{ x: 7, y: 10, color: Colour.White },{ x: 7, y: 11, color: Colour.White },
                    { x: 7, y: 12, color: Colour.White },{ x: 8, y: 9, color: Colour.White },{ x: 9, y: 9, color: Colour.White },
                    { x: 9, y: 10, color: Colour.White },{ x: 9, y: 11, color: Colour.White },{ x: 9, y: 12, color: Colour.White },
                ]   
            },
            frames: [...generateFlashFrames()]
        }
    }

}

function generateFlashFrames(): IFrame[] {
    const frames: IFrame[] = [];
  
    // Each frame
    for (let frameNumber = 0; frameNumber < 35; frameNumber++) {
      const frame: IPixelState[] = [];
  
      // Iterate  each pixel in the frame
      for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
          // Calculate the center 
          const centerX = 7.5 - (frameNumber / 16) * 7.5;
          const centerY = 7.5 - (frameNumber / 16) * 7.5;
          const yPos = y - x ;
  
          // Determine if the current pixel is inside the square
          const isInSquare =
            x >= centerX - 8 &&
            x <= centerX + 8 &&
            y >= centerY - 8 &&
            y <= centerY + 8;
  
          // Add a pixel to the frame with a color if it's inside the square
          if (isInSquare) {
            if (true) {
                const color = getRandomColor();
                
      
                frame.push({ x, y, color });
              }
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
  
  
  function getRandomColor(): Colour {
    const colors = [Colour.White, Colour.Black];
    const randomIndex = Math.floor(Math.random() * colors.length);
  
    return colors[randomIndex];
  }
  

  
