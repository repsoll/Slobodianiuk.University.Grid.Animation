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
  
    const radius = 6;
    const centerX = 7;
    const centerY = 8;
    const numFrames = 50;
  
    const pointsCount = 10; 
    const angleOffset = (2 * Math.PI) / pointsCount; 
    let angle = 0;
  
    for (let frameNumber = 0; frameNumber < numFrames; frameNumber++) {
      const pixels: IPixelState[] = [];
  
      for (let i = 0; i < pointsCount; i++) {
        const x = Math.round(centerX + (radius * Math.cos(angle + i * angleOffset)));
        const y = Math.round(centerY + (radius * Math.sin(angle + i * angleOffset)));
        pixels.push({ x, y, color: Colour.White });
      }
  
      angle += 0.1; 
  
      frames.push({ frameNumber, pixels });
    }
  
    return frames;
  }
  