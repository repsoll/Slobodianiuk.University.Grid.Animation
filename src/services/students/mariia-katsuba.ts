import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class MariiaKatsubaConfigLoaderService implements IConfigLoaderService {
  public getStudentName(): string {
    return "Mariia Katsuba";
  }

  public getStudentEmail(): string {
    return "masha.katsuba@gmail.com";
  }

  public loadConfig(): IAnimationConfig {
    return {
      name: "Mariia",
      surname: "Katsuba",
      email: this.getStudentEmail(),
      projectName: "Heart",
      personalProjectLink: "netflix-katsuba.azurewebsites.net",
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

  const MariiaKatsubaConfigLoaderService: IPixelState[] = [
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
  const splitFrames = 20;
  for (let frameNumber = 0; frameNumber < 40; frameNumber++) {
    const pixels: IPixelState[] = [];

    // Calculate the position for splitting and joining
    const splitPosition = Math.max(0, Math.min(frameNumber - 10, splitFrames));
    const joinPosition = Math.max(0, Math.min(frameNumber - 30, splitFrames));

    // Draw the left part of the heart
    if (splitPosition < splitFrames / 2) {
      for (const pixel of MariiaKatsubaConfigLoaderService) {
        if (pixel.x <= 5 - splitPosition) {
          pixels.push({
            x: pixel.x,
            y: pixel.y,
            color: pixel.color,
          });
        }
      }
    }

    // Draw the right part of the heart
    if (splitPosition >= splitFrames / 2 && joinPosition < splitFrames / 2) {
      for (const pixel of MariiaKatsubaConfigLoaderService) {
        if (pixel.x >= 6 + splitPosition - splitFrames / 2) {
          pixels.push({
            x: pixel.x,
            y: pixel.y,
            color: pixel.color,
          });
        }
      }
    }

    // Combine the heart parts
    if (joinPosition >= splitFrames / 2) {
      for (const pixel of MariiaKatsubaConfigLoaderService) {
        pixels.push({
          x: pixel.x - joinPosition + splitFrames / 2,
          y: pixel.y,
          color: pixel.color,
        });
      }
    }

    frames.push({
      frameNumber: frameNumber,
      pixels: pixels,
    });
  }

  return frames;
}