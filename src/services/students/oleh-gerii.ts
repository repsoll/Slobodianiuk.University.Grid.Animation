import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class OlehGeriiConfigLoaderService implements IConfigLoaderService {
  public getStudentName(): string {
    return "Oleh Gerii";
  }

  public getStudentEmail(): string {
    return "herijoleh3003@gmail.com";
  }

  public loadConfig(): IAnimationConfig {
    return {
      name: "Oleh",
      surname: "Gerii",
      email: this.getStudentEmail(),
      projectName: "LvivTrans",
      personalProjectLink: "https://myproject.azurewebsites.net",
      header: createBusHeader(),
      frames: generateBusFrames(),
    };
  }
}

function createBusHeader(): IFrame {
  const pixels: IPixelState[] = [
    { x: 1, y: 3, color: Colour.White },
    { x: 1, y: 4, color: Colour.White },
    { x: 1, y: 5, color: Colour.White },
    { x: 1, y: 6, color: Colour.White },
    { x: 1, y: 7, color: Colour.White },
    { x: 1, y: 8, color: Colour.White },
    { x: 1, y: 9, color: Colour.White },
    { x: 1, y: 10, color: Colour.White },
    { x: 1, y: 11, color: Colour.White },
    { x: 1, y: 12, color: Colour.White },
    { x: 2, y: 2, color: Colour.White },
    { x: 2, y: 3, color: Colour.White },
    { x: 2, y: 12, color: Colour.White },
    { x: 2, y: 13, color: Colour.White },
    
    { x: 3, y: 2, color: Colour.White },
    { x: 3, y: 3, color: Colour.White },
    { x: 3, y: 4, color: Colour.White },
    { x: 3, y: 5, color: Colour.White },
    { x: 3, y: 6, color: Colour.White },
    { x: 3, y: 7, color: Colour.White },
    { x: 3, y: 8, color: Colour.White },
    { x: 3, y: 9, color: Colour.White },
    { x: 3, y: 10, color: Colour.White },
    { x: 3, y: 11, color: Colour.White },
    { x: 3, y: 12, color: Colour.White },
    { x: 3, y: 13, color: Colour.White },

    { x: 4, y: 0, color: Colour.White },
    { x: 4, y: 1, color: Colour.White },
    { x: 4, y: 2, color: Colour.White },
    { x: 4, y: 13, color: Colour.White },
    { x: 4, y: 14, color: Colour.White },
    { x: 4, y: 15, color: Colour.White },

    { x: 5, y: 0, color: Colour.White },
    { x: 5, y: 2, color: Colour.White },
    { x: 5, y: 13, color: Colour.White },
    { x: 5, y: 15, color: Colour.White },
    { x: 6, y: 0, color: Colour.White },
    { x: 6, y: 1, color: Colour.White },
    { x: 6, y: 2, color: Colour.White },
    { x: 6, y: 13, color: Colour.White },
    { x: 6, y: 14, color: Colour.White },
    { x: 6, y: 15, color: Colour.White },

    { x: 7, y: 1, color: Colour.White },
    { x: 7, y: 2, color: Colour.White },
    { x: 7, y: 3, color: Colour.White },
    { x: 7, y: 4, color: Colour.White },
    { x: 7, y: 5, color: Colour.White },
    { x: 7, y: 6, color: Colour.White },
    { x: 7, y: 7, color: Colour.White },
    { x: 7, y: 8, color: Colour.White },
    { x: 7, y: 9, color: Colour.White },
    { x: 7, y: 10, color: Colour.White },
    { x: 7, y: 11, color: Colour.White },
    { x: 7, y: 12, color: Colour.White },
    { x: 7, y: 13, color: Colour.White },
    { x: 7, y: 14, color: Colour.White },

    { x: 8, y: 2, color: Colour.White },
    { x: 8, y: 5, color: Colour.White },
    { x: 8, y: 10, color: Colour.White },
    { x: 8, y: 13, color: Colour.White },

    { x: 9, y: 2, color: Colour.White },
    { x: 9, y: 4, color: Colour.White },
    { x: 9, y: 6, color: Colour.White },
    { x: 9, y: 9, color: Colour.White },
    { x: 9, y: 11, color: Colour.White },
    { x: 9, y: 13, color: Colour.White },

    { x: 10, y: 2, color: Colour.White },
    { x: 10, y: 5, color: Colour.White },
    { x: 10, y: 10, color: Colour.White },
    { x: 10, y: 13, color: Colour.White },

    { x: 11, y: 2, color: Colour.White },
    { x: 11, y: 3, color: Colour.White },
    { x: 11, y: 4, color: Colour.White },
    { x: 11, y: 5, color: Colour.White },
    { x: 11, y: 6, color: Colour.White },
    { x: 11, y: 7, color: Colour.White },
    { x: 11, y: 8, color: Colour.White },
    { x: 11, y: 9, color: Colour.White },
    { x: 11, y: 10, color: Colour.White },
    { x: 11, y: 11, color: Colour.White },
    { x: 11, y: 12, color: Colour.White },
    { x: 11, y: 13, color: Colour.White },

    { x: 12, y: 3, color: Colour.White },
    { x: 12, y: 4, color: Colour.White },
    { x: 12, y: 11, color: Colour.White },
    { x: 12, y: 12, color: Colour.White },

    { x: 13, y: 3, color: Colour.White },
    { x: 13, y: 4, color: Colour.White },
    { x: 13, y: 11, color: Colour.White },
    { x: 13, y: 12, color: Colour.White },

  ];

  return {
    frameNumber: 0,
    pixels: pixels,
  };
}

function generateBusFrames(): IFrame[] {
  const frames: IFrame[] = [];

  const bus: IPixelState[] = [
    { x: 1, y: 3, color: Colour.White },
    { x: 1, y: 4, color: Colour.White },
    { x: 1, y: 5, color: Colour.White },
    { x: 1, y: 6, color: Colour.White },
    { x: 1, y: 7, color: Colour.White },
    { x: 1, y: 8, color: Colour.White },
    { x: 1, y: 9, color: Colour.White },
    { x: 1, y: 10, color: Colour.White },
    { x: 1, y: 11, color: Colour.White },
    { x: 1, y: 12, color: Colour.White },
    { x: 2, y: 2, color: Colour.White },
    { x: 2, y: 3, color: Colour.White },
    { x: 2, y: 12, color: Colour.White },
    { x: 2, y: 13, color: Colour.White },
    
    { x: 3, y: 2, color: Colour.White },
    { x: 3, y: 3, color: Colour.White },
    { x: 3, y: 4, color: Colour.White },
    { x: 3, y: 5, color: Colour.White },
    { x: 3, y: 6, color: Colour.White },
    { x: 3, y: 7, color: Colour.White },
    { x: 3, y: 8, color: Colour.White },
    { x: 3, y: 9, color: Colour.White },
    { x: 3, y: 10, color: Colour.White },
    { x: 3, y: 11, color: Colour.White },
    { x: 3, y: 12, color: Colour.White },
    { x: 3, y: 13, color: Colour.White },

    { x: 4, y: 0, color: Colour.White },
    { x: 4, y: 1, color: Colour.White },
    { x: 4, y: 2, color: Colour.White },
    { x: 4, y: 13, color: Colour.White },
    { x: 4, y: 14, color: Colour.White },
    { x: 4, y: 15, color: Colour.White },

    { x: 5, y: 0, color: Colour.White },
    { x: 5, y: 2, color: Colour.White },
    { x: 5, y: 13, color: Colour.White },
    { x: 5, y: 15, color: Colour.White },
    { x: 6, y: 0, color: Colour.White },
    { x: 6, y: 1, color: Colour.White },
    { x: 6, y: 2, color: Colour.White },
    { x: 6, y: 13, color: Colour.White },
    { x: 6, y: 14, color: Colour.White },
    { x: 6, y: 15, color: Colour.White },

    { x: 7, y: 1, color: Colour.White },
    { x: 7, y: 2, color: Colour.White },
    { x: 7, y: 3, color: Colour.White },
    { x: 7, y: 4, color: Colour.White },
    { x: 7, y: 5, color: Colour.White },
    { x: 7, y: 6, color: Colour.White },
    { x: 7, y: 7, color: Colour.White },
    { x: 7, y: 8, color: Colour.White },
    { x: 7, y: 9, color: Colour.White },
    { x: 7, y: 10, color: Colour.White },
    { x: 7, y: 11, color: Colour.White },
    { x: 7, y: 12, color: Colour.White },
    { x: 7, y: 13, color: Colour.White },
    { x: 7, y: 14, color: Colour.White },

    { x: 8, y: 2, color: Colour.White },
    { x: 8, y: 5, color: Colour.White },
    { x: 8, y: 10, color: Colour.White },
    { x: 8, y: 13, color: Colour.White },

    { x: 9, y: 2, color: Colour.White },
    { x: 9, y: 4, color: Colour.White },
    { x: 9, y: 6, color: Colour.White },
    { x: 9, y: 9, color: Colour.White },
    { x: 9, y: 11, color: Colour.White },
    { x: 9, y: 13, color: Colour.White },

    { x: 10, y: 2, color: Colour.White },
    { x: 10, y: 5, color: Colour.White },
    { x: 10, y: 10, color: Colour.White },
    { x: 10, y: 13, color: Colour.White },

    { x: 11, y: 2, color: Colour.White },
    { x: 11, y: 3, color: Colour.White },
    { x: 11, y: 4, color: Colour.White },
    { x: 11, y: 5, color: Colour.White },
    { x: 11, y: 6, color: Colour.White },
    { x: 11, y: 7, color: Colour.White },
    { x: 11, y: 8, color: Colour.White },
    { x: 11, y: 9, color: Colour.White },
    { x: 11, y: 10, color: Colour.White },
    { x: 11, y: 11, color: Colour.White },
    { x: 11, y: 12, color: Colour.White },
    { x: 11, y: 13, color: Colour.White },

    { x: 12, y: 3, color: Colour.White },
    { x: 12, y: 4, color: Colour.White },
    { x: 12, y: 11, color: Colour.White },
    { x: 12, y: 12, color: Colour.White },

    { x: 13, y: 3, color: Colour.White },
    { x: 13, y: 4, color: Colour.White },
    { x: 13, y: 11, color: Colour.White },
    { x: 13, y: 12, color: Colour.White },

  ];

  const busLength = bus.reduce((prev, current) => {
    return Math.max(prev, current.y);
  }, 0);

  for (let i = 0; i < Constants.MaxTotalFrames; i++) {
    const currentFrame: IPixelState[] = [];

    for (let j = 0; j < bus.length; j++) {
      currentFrame[j] = { 
        x: (bus[j].x + i) % (2 * busLength),
        y: bus[j].y,  
        color: Colour.White 
      };
    }

    frames.push({
      frameNumber: i,
      pixels: currentFrame
    });
  }

  return frames;
}

