import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class DenysZarubaConfigLoaderService implements IConfigLoaderService {
  public getStudentName(): string {
    return "Denys Zaruba";
  }

  public getStudentEmail(): string {
    return "deniszaruba03@gmail.com";
  }

  public loadConfig(): IAnimationConfig {
    return {
      name: "Denys",
      surname: "Zaruba",
      email: this.getStudentEmail(),
      projectName: "Heart",
      personalProjectLink: "https://calendar-biigban.vercel.app/",
      header: createHeartRecommenderHeader(),
      frames: generateHeartRecommenderFrames(),
    };
  }
}
function createHeartRecommenderHeader(): IFrame {
  const pixels: IPixelState[] = [
    { x: 6, y: 4, color: Colour.White },
    { x: 5, y: 3, color: Colour.White },
    { x: 4, y: 2, color: Colour.White },
    { x: 3, y: 2, color: Colour.White },
    { x: 2, y: 3, color: Colour.White },
    { x: 2, y: 4, color: Colour.White },
    { x: 2, y: 5, color: Colour.White },
    { x: 3, y: 6, color: Colour.White },
    { x: 4, y: 7, color: Colour.White },
    { x: 5, y: 8, color: Colour.White },
    { x: 6, y: 9, color: Colour.White },
    { x: 7, y: 8, color: Colour.White },
    { x: 8, y: 7, color: Colour.White },
    { x: 9, y: 6, color: Colour.White },
    { x: 10, y: 5, color: Colour.White },
    { x: 10, y: 4, color: Colour.White },
    { x: 10, y: 3, color: Colour.White },
    { x: 9, y: 2, color: Colour.White },
    { x: 8, y: 2, color: Colour.White },
    { x: 7, y: 3, color: Colour.White },
  ];

  return {
    frameNumber: 0,
    pixels: pixels,
  };
}

function generateHeartRecommenderFrames(): IFrame[] {
  const frames: IFrame[] = [];

  const heart: IPixelState[] = [
    { x: 6, y: 4, color: Colour.White },
    { x: 5, y: 3, color: Colour.White },
    { x: 4, y: 2, color: Colour.White },
    { x: 3, y: 2, color: Colour.White },
    { x: 2, y: 3, color: Colour.White },
    { x: 2, y: 4, color: Colour.White },
    { x: 2, y: 5, color: Colour.White },
    { x: 3, y: 6, color: Colour.White },
    { x: 4, y: 7, color: Colour.White },
    { x: 5, y: 8, color: Colour.White },
    { x: 6, y: 9, color: Colour.White },
    { x: 7, y: 8, color: Colour.White },
    { x: 8, y: 7, color: Colour.White },
    { x: 9, y: 6, color: Colour.White },
    { x: 10, y: 5, color: Colour.White },
    { x: 10, y: 4, color: Colour.White },
    { x: 10, y: 3, color: Colour.White },
    { x: 9, y: 2, color: Colour.White },
    { x: 8, y: 2, color: Colour.White },
    { x: 7, y: 3, color: Colour.White },
  ];

  for (let frameNumber = 0; frameNumber < Constants.MaxTotalFrames; frameNumber++) {
    const pixels: IPixelState[] = [];

    const showHeart = frameNumber % 30 < 15;

    const bounceOffset = Math.abs((frameNumber % 15) - 7);

    if (showHeart) {
      pixels.push(...heart.map((pixel) => ({ ...pixel, y: pixel.y + bounceOffset, color: Colour.White })));
    }

    frames.push({
      frameNumber: frameNumber,
      pixels: pixels,
    });
  }

  return frames;
}
