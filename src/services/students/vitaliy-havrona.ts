import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import { Colour } from "../../models/colour";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";

export class VitaliyHavronaConfigLoaderService
  implements IConfigLoaderService
{
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
      projectName: "Sharp",
      personalProjectLink: "https://monolite.azurewebsites.net",
      header: showHeader() ,
      frames: [...Array(32).keys()].map((x) => getSharpOnFrame(x)),
    };
  }
}

function showHeader(): IFrame {
  const frame: IFrame = {
    frameNumber: 0,
    pixels: [],
  };

  for (let x = 0; x < 32; x++) {
    for (let y = 0; y < 16; y++) {
      // Calculate the position of the pixel based on the frame number
      const yPos = y - (0 - x);

      // Add a white pixel to the frame if it's within bounds
      if (yPos >= 0 && yPos < 16) {
        frame.pixels.push({ x, y: yPos, color: Colour.White });
      }
    }
  }
  return frame;
}

 const getSharpOnFrame = (frameNumber: number): IFrame => {
  let result: IFrame = {
    frameNumber: frameNumber,
    pixels: [],
  };

  const midX = Math.floor(Constants.GridColumns / 2);
  const midY = Math.floor(Constants.GridRows / 2);

  for (let x = midX - 4; x <= midX + 3; x++) {
    for (let y = midY - 4; y <= midY + 3; y++) {
      const isVerticalLine = x === midX - 2 || x === midX + 1;
      const isHorizontalLine = y === midY - 2 || y === midY + 1;

      if (isVerticalLine || isHorizontalLine) {
        result.pixels.push({
          color: Colour.White,
          x: x,
          y: y,
        });
      } else {
        result.pixels.push({
          color: Colour.Black,
          x: x,
          y: y,
        });
      }
    }
  }

  return result;
};
