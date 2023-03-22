import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class BohdanDzirbaConfigLoaderService implements IConfigLoaderService {
  public getStudentName(): string {
    return "Bohdan Dzirba";
  }

  public getStudentEmail(): string {
    return "bogdan.dzirba@gmail.com";
  }

  public loadConfig(): IAnimationConfig {
    return {
      name: "Bohdan",
      surname: "Dzirba",
      email: this.getStudentEmail(),
      projectName: "Frog",
      personalProjectLink: "https://fluentify.azurewebsites.net/",
      header: createFrogRecommenderHeader(),
      frames: generateFrogRecommenderFrames(),
    };
  }
}
function createFrogRecommenderHeader(): IFrame {
  const pixels: IPixelState[] = [
	{ x: 1, y: 2, color: Colour.White },
	{ x: 1, y: 3, color: Colour.White },
	{ x: 1, y: 4, color: Colour.White },
	{ x: 1, y: 5, color: Colour.White },
	{ x: 1, y: 10, color: Colour.White },
	{ x: 1, y: 11, color: Colour.White },
	{ x: 1, y: 12, color: Colour.White },
	{ x: 1, y: 13, color: Colour.White },
	{ x: 2, y: 1, color: Colour.White },
	{ x: 2, y: 6, color: Colour.White },
	{ x: 2, y: 7, color: Colour.White },
	{ x: 2, y: 8, color: Colour.White },
	{ x: 2, y: 9, color: Colour.White },
	{ x: 2, y: 14, color: Colour.White },
	{ x: 3, y: 1, color: Colour.White },
	{ x: 3, y: 3, color: Colour.White },
	{ x: 3, y: 4, color: Colour.White },
	{ x: 3, y: 6, color: Colour.White },
	{ x: 3, y: 9, color: Colour.White },
	{ x: 3, y: 11, color: Colour.White },
	{ x: 3, y: 12, color: Colour.White },
	{ x: 3, y: 14, color: Colour.White },
	{ x: 4, y: 1, color: Colour.White },
	{ x: 4, y: 6, color: Colour.White },
	{ x: 4, y: 9, color: Colour.White },
	{ x: 4, y: 14, color: Colour.White },
	{ x: 5, y: 2, color: Colour.White },
	{ x: 5, y: 3, color: Colour.White },
	{ x: 5, y: 4, color: Colour.White },
	{ x: 5, y: 5, color: Colour.White },
	{ x: 5, y: 10, color: Colour.White },
	{ x: 5, y: 11, color: Colour.White },
	{ x: 5, y: 12, color: Colour.White },
	{ x: 5, y: 13, color: Colour.White },
	{ x: 6, y: 1, color: Colour.White },
	{ x: 6, y: 14, color: Colour.White },
	{ x: 7, y: 1, color: Colour.White },
	{ x: 7, y: 4, color: Colour.White },
	{ x: 7, y: 5, color: Colour.White },
	{ x: 7, y: 6, color: Colour.White },
	{ x: 7, y: 7, color: Colour.White },
	{ x: 7, y: 8, color: Colour.White },
	{ x: 7, y: 9, color: Colour.White },
	{ x: 7, y: 10, color: Colour.White },
	{ x: 7, y: 11, color: Colour.White },
	{ x: 7, y: 14, color: Colour.White },
	{ x: 8, y: 1, color: Colour.White },
	{ x: 8, y: 14, color: Colour.White },
	{ x: 9, y: 2, color: Colour.White },
	{ x: 9, y: 3, color: Colour.White },
	{ x: 9, y: 4, color: Colour.White },
	{ x: 9, y: 5, color: Colour.White },
	{ x: 9, y: 6, color: Colour.White },
	{ x: 9, y: 7, color: Colour.White },
	{ x: 9, y: 8, color: Colour.White },
	{ x: 9, y: 9, color: Colour.White },
	{ x: 9, y: 10, color: Colour.White },
	{ x: 9, y: 11, color: Colour.White },
	{ x: 9, y: 12, color: Colour.White },
	{ x: 9, y: 13, color: Colour.White },
	{ x: 10, y: 2, color: Colour.White },
	{ x: 10, y: 3, color: Colour.White },
	{ x: 10, y: 12, color: Colour.White },
	{ x: 10, y: 13, color: Colour.White },
	{ x: 11, y: 1, color: Colour.White },
	{ x: 11, y: 3, color: Colour.White },
	{ x: 11, y: 12, color: Colour.White },
	{ x: 11, y: 14, color: Colour.White },
	{ x: 12, y: 1, color: Colour.White },
	{ x: 12, y: 4, color: Colour.White },
	{ x: 12, y: 7, color: Colour.White },
	{ x: 12, y: 8, color: Colour.White },
	{ x: 12, y: 11, color: Colour.White },
	{ x: 12, y: 14, color: Colour.White },
	{ x: 13, y: 1, color: Colour.White },
	{ x: 13, y: 4, color: Colour.White },
	{ x: 13, y: 7, color: Colour.White },
	{ x: 13, y: 8, color: Colour.White },
	{ x: 13, y: 11, color: Colour.White },
	{ x: 13, y: 14, color: Colour.White },
	{ x: 14, y: 1, color: Colour.White },
	{ x: 14, y: 2, color: Colour.White },
	{ x: 14, y: 3, color: Colour.White },
	{ x: 14, y: 7, color: Colour.White },
	{ x: 14, y: 8, color: Colour.White },
	{ x: 14, y: 12, color: Colour.White },
	{ x: 14, y: 13, color: Colour.White },
	{ x: 14, y: 14, color: Colour.White },
	{ x: 15, y: 4, color: Colour.White },
	{ x: 15, y: 5, color: Colour.White },
	{ x: 15, y: 6, color: Colour.White },
	{ x: 15, y: 9, color: Colour.White },
	{ x: 15, y: 10, color: Colour.White },
	{ x: 15, y: 11, color: Colour.White },
	

  ];

  return {
    frameNumber: 0,
    pixels: pixels,
  };
}

function generateFrogRecommenderFrames(): IFrame[] {
  const frames: IFrame[] = [];


  const Frog: IPixelState[] = [
	{ x: 1, y: 2, color: Colour.White },
	{ x: 1, y: 3, color: Colour.White },
	{ x: 1, y: 4, color: Colour.White },
	{ x: 1, y: 5, color: Colour.White },
	{ x: 1, y: 10, color: Colour.White },
	{ x: 1, y: 11, color: Colour.White },
	{ x: 1, y: 12, color: Colour.White },
	{ x: 1, y: 13, color: Colour.White },
	{ x: 2, y: 1, color: Colour.White },
	{ x: 2, y: 6, color: Colour.White },
	{ x: 2, y: 7, color: Colour.White },
	{ x: 2, y: 8, color: Colour.White },
	{ x: 2, y: 9, color: Colour.White },
	{ x: 2, y: 14, color: Colour.White },
	{ x: 3, y: 1, color: Colour.White },
	{ x: 3, y: 3, color: Colour.White },
	{ x: 3, y: 4, color: Colour.White },
	{ x: 3, y: 6, color: Colour.White },
	{ x: 3, y: 9, color: Colour.White },
	{ x: 3, y: 11, color: Colour.White },
	{ x: 3, y: 12, color: Colour.White },
	{ x: 3, y: 14, color: Colour.White },
	{ x: 4, y: 1, color: Colour.White },
	{ x: 4, y: 6, color: Colour.White },
	{ x: 4, y: 9, color: Colour.White },
	{ x: 4, y: 14, color: Colour.White },
	{ x: 5, y: 2, color: Colour.White },
	{ x: 5, y: 3, color: Colour.White },
	{ x: 5, y: 4, color: Colour.White },
	{ x: 5, y: 5, color: Colour.White },
	{ x: 5, y: 10, color: Colour.White },
	{ x: 5, y: 11, color: Colour.White },
	{ x: 5, y: 12, color: Colour.White },
	{ x: 5, y: 13, color: Colour.White },
	{ x: 6, y: 1, color: Colour.White },
	{ x: 6, y: 14, color: Colour.White },
	{ x: 7, y: 1, color: Colour.White },
	{ x: 7, y: 4, color: Colour.White },
	{ x: 7, y: 5, color: Colour.White },
	{ x: 7, y: 6, color: Colour.White },
	{ x: 7, y: 7, color: Colour.White },
	{ x: 7, y: 8, color: Colour.White },
	{ x: 7, y: 9, color: Colour.White },
	{ x: 7, y: 10, color: Colour.White },
	{ x: 7, y: 11, color: Colour.White },
	{ x: 7, y: 14, color: Colour.White },
	{ x: 8, y: 1, color: Colour.White },
	{ x: 8, y: 14, color: Colour.White },
	{ x: 9, y: 2, color: Colour.White },
	{ x: 9, y: 3, color: Colour.White },
	{ x: 9, y: 4, color: Colour.White },
	{ x: 9, y: 5, color: Colour.White },
	{ x: 9, y: 6, color: Colour.White },
	{ x: 9, y: 7, color: Colour.White },
	{ x: 9, y: 8, color: Colour.White },
	{ x: 9, y: 9, color: Colour.White },
	{ x: 9, y: 10, color: Colour.White },
	{ x: 9, y: 11, color: Colour.White },
	{ x: 9, y: 12, color: Colour.White },
	{ x: 9, y: 13, color: Colour.White },
	{ x: 10, y: 2, color: Colour.White },
	{ x: 10, y: 3, color: Colour.White },
	{ x: 10, y: 12, color: Colour.White },
	{ x: 10, y: 13, color: Colour.White },
	{ x: 11, y: 1, color: Colour.White },
	{ x: 11, y: 3, color: Colour.White },
	{ x: 11, y: 12, color: Colour.White },
	{ x: 11, y: 14, color: Colour.White },
	{ x: 12, y: 1, color: Colour.White },
	{ x: 12, y: 4, color: Colour.White },
	{ x: 12, y: 7, color: Colour.White },
	{ x: 12, y: 8, color: Colour.White },
	{ x: 12, y: 11, color: Colour.White },
	{ x: 12, y: 14, color: Colour.White },
	{ x: 13, y: 1, color: Colour.White },
	{ x: 13, y: 4, color: Colour.White },
	{ x: 13, y: 7, color: Colour.White },
	{ x: 13, y: 8, color: Colour.White },
	{ x: 13, y: 11, color: Colour.White },
	{ x: 13, y: 14, color: Colour.White },
	{ x: 14, y: 1, color: Colour.White },
	{ x: 14, y: 2, color: Colour.White },
	{ x: 14, y: 3, color: Colour.White },
	{ x: 14, y: 7, color: Colour.White },
	{ x: 14, y: 8, color: Colour.White },
	{ x: 14, y: 12, color: Colour.White },
	{ x: 14, y: 13, color: Colour.White },
	{ x: 14, y: 14, color: Colour.White },
	{ x: 15, y: 4, color: Colour.White },
	{ x: 15, y: 5, color: Colour.White },
	{ x: 15, y: 6, color: Colour.White },
	{ x: 15, y: 9, color: Colour.White },
	{ x: 15, y: 10, color: Colour.White },
	{ x: 15, y: 11, color: Colour.White },
  ];

  for (let frameNumber = 0; frameNumber < Constants.MaxTotalFrames; frameNumber++) {
    const pixels: IPixelState[] = [];

    const showFrog = frameNumber % 30 < 30;

    const bounceOffset = Math.abs((frameNumber % 15) - 7);

    if (showFrog) {
      pixels.push(...Frog.map((pixel) => ({ ...pixel, x: pixel.x - bounceOffset, color: Colour.White })));
    }

    frames.push({
      frameNumber: frameNumber,
      pixels: pixels,
    });
  }

  return frames;
}
