import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class VitaliyHavronaConfigLoaderService implements IConfigLoaderService {
  public getStudentName(): string {
    return "Vitaliy Havrona";
  }

  public getStudentEmail(): string {
    return "vitaliyhavrona@gmail.com";
  }

  public loadConfig(): IAnimationConfig {
    return {
      name: "Vitaliy",
      surname: "Havrona",
      email: this.getStudentEmail(),
      projectName: "Heart",
      personalProjectLink: "https://happy-cliff-060c82f03.2.azurestaticapps.net/",
      header: Avatar(0),
      frames: generateFrames(),
    };
  }
}
const Avatar = (frameNumber: number): IFrame => {
  let result: IFrame = {
    frameNumber: frameNumber,
    pixels: [],
  };

  result.pixels.push(
    // N

    // left side of the heart
    { x: 2, y: 5, color: Colour.White },
    { x: 2, y: 6, color: Colour.White },
    { x: 3, y: 7, color: Colour.White },
    { x: 2, y: 8, color: Colour.White },
    { x: 2, y: 9, color: Colour.White },
    { x: 3, y: 10, color: Colour.White },
    { x: 4, y: 10, color: Colour.White },
    { x: 5, y: 10, color: Colour.White },
    { x: 6, y: 9, color: Colour.White },
    { x: 7, y: 8, color: Colour.White },
    { x: 8, y: 7, color: Colour.White },
    { x: 3, y: 4, color: Colour.White },
    { x: 4, y: 4, color: Colour.White },
    { x: 5, y: 4, color: Colour.White },
    { x: 6, y: 5, color: Colour.White },
    { x: 7, y: 6, color: Colour.White },
  );

  return result;
};
function generateFrames(): IFrame[] {
  const frames: IFrame[] = [];

  const VitaliyHavronaConfigLoaderService: IPixelState[] = [
    // left side of the heart
    { x: 2, y: 5, color: Colour.White },
    { x: 2, y: 6, color: Colour.White },
    { x: 3, y: 7, color: Colour.White },
    { x: 2, y: 8, color: Colour.White },
    { x: 2, y: 9, color: Colour.White },
    { x: 3, y: 10, color: Colour.White },
    { x: 4, y: 10, color: Colour.White },
    { x: 5, y: 10, color: Colour.White },
    { x: 6, y: 9, color: Colour.White },
    { x: 7, y: 8, color: Colour.White },
    { x: 8, y: 7, color: Colour.White },
    { x: 3, y: 4, color: Colour.White },
    { x: 4, y: 4, color: Colour.White },
    { x: 5, y: 4, color: Colour.White },
    { x: 6, y: 5, color: Colour.White },
    { x: 7, y: 6, color: Colour.White },
  ];

  for (let frameNumber = 0; frameNumber < 40; frameNumber++) {
    const pixels: IPixelState[] = [];

    const showCar = frameNumber + 100;
    const slide = frameNumber - 20;

    if (showCar) {
      pixels.push(
        ...VitaliyHavronaConfigLoaderService.map((pixel) => ({
          ...pixel,
          x: pixel.x - slide,
          color: Colour.White,
        })),
      );
    }
    frames.push({
      frameNumber: frameNumber,
      pixels: pixels,
    });
  }
  return frames;
}
