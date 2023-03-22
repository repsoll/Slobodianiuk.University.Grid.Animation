import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class IlliaChumakConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Illia Chumak';
    }

    public getStudentEmail(): string {
        return 'illia.chumak.2017@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Illia',
            surname: 'Chumak',
            email: this.getStudentEmail(),
            projectName: 'Circle',
            personalProjectLink: 'google.com', //ще не зробив, планую до наступного прокатичного пов'язаного з перс проектом задеплоїти бо проблеми з ажуром і підключенням цим всім
            header: createNewCircleHeader(),
            frames: generateNewCircleFrames()
        }
    }

}

function createNewCircleHeader(): IFrame {
    const pixels: IPixelState[] = [
        { x: 1, y: 1, color: Colour.White },
        { x: 15, y: 1, color: Colour.White },
    ];

    return {
        frameNumber: 0,
        pixels: pixels,
    };
}

function generateNewCircleFrames(): IFrame[] {
  
        const frames: IFrame[] = [];
      
        const radius = 20; 
        const centerX = 50; 
        const centerY = 50;
        const numFrames = 50;
      
        for (let frameNumber = 0; frameNumber < numFrames; frameNumber++) {
          const pixels: IPixelState[] = [];
      
        
          const angle = (frameNumber / numFrames) * 2 * Math.PI;
      
          
          for (let i = 0; i < 100; i++) {
            const x = Math.round(centerX + (radius * Math.cos(angle + (i / 100) * 2 * Math.PI)));
            const y = Math.round(centerY + (radius * Math.sin(angle + (i / 100) * 2 * Math.PI)));
            pixels.push({ x, y, color: Colour.White });
          }
      
          frames.push({ frameNumber, pixels });
        }
      
        return frames;
      }