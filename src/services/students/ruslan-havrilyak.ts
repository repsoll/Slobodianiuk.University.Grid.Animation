import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class RuslanHavrilyakConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Ruslan Havrilyak';
    }

    public getStudentEmail(): string {
        return 'game.master.kvx@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Ruslan',
            surname: 'Havrilyak',
            email: this.getStudentEmail(),
            projectName: 'WorkWise',
            personalProjectLink: 'https://work-wise.azurewebsites.net/',
            header: {frameNumber:0, pixels: getHeaderFrame()},
            frames: generateWorkWiseFrames()
        }
    }

}

function generateWorkWiseFrames(): IFrame[] {
    const frames: IFrame[] = [];
    const radius = 10;
    const centerX = 15;
    const centerY = 15;
    const angleDelta = Math.PI / 15;
    for (let i = 0; i < 30; i++) {
        const pixels: IPixelState[] = [];
        const angle = i * angleDelta;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
    
        for (let pixelX = 0; pixelX < 30; pixelX++) {
            for (let pixelY = 0; pixelY < 30; pixelY++) {
                const distance = Math.sqrt((pixelX - x) ** 2 + (pixelY - y) ** 2);
    
                if (distance <= radius) {
                    pixels.push({ x: pixelX, y: pixelY, color: Colour.White });
    
                    // додали перевірку, чи піксель знаходиться в середині монети
                    if (distance <= 2) { 
                        pixels[pixels.length - 1].color = Colour.Black; // встановлюємо колір пікселя на чорний, щоб намалювати одиничку
                    }
                }
            }
        }
    
        frames.push({
            frameNumber: i,
            pixels: pixels,
        });
    }
    
    return frames;
}    

function getHeaderFrame(): IPixelState[] {
    const result: IPixelState[] = [];
  
    for (let x = 2; x < 14; x += 2) {
      result.push({ x: x, y: 3, color: Colour.White });
    }
  
    for (let y = 4; y < 11; y++) {
      result.push({ x: 13, y: y, color: Colour.White });
    }

    for (let x = 4; x < 14; x += 2) {
      result.push({ x: x, y: 11, color: Colour.White });
    }
    for (let x = 8; x < 16; x += 2) {
        result.push({ x: x, y: 5, color: Colour.White });
    }
    for (let x = 12; x < 20; x += 2) {
        result.push({ x: x, y: 14, color: Colour.White });
    }
  
    return result;
  }

