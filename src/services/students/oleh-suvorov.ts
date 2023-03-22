import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import { Colour } from "../../models/colour";
import IPixelState from "../../models/pixel-state";
import { color } from "@mui/system";

export class OlehSuvorovConfigLoaderService implements IConfigLoaderService {
  public getStudentName(): string {
    return "Oleh Suvorov";
  }

  public getStudentEmail(): string {
    return "olegsuv.ukr@gmail.com";
  }

  public loadConfig(): IAnimationConfig {
    return {
      name: "Oleh",
      surname: "Suvorov",
      email: this.getStudentEmail(),
      projectName: "Twitter Clone",
      personalProjectLink: "https://twitter-clone-lnu.azurewebsites.net/",
      header: { frameNumber: 0, pixels: this.customHeader() },
      frames: this.customAnimation(),
    };
  }

  public customHeader(): IPixelState[] {
    let result = [];

    for (let block = 2; block < Constants.HeaderColumns - 2; block++) {
      result.push({
        x: Constants.HeaderColumns / 2,
        y: block++,
        color: Colour.White,
      });
    }

    return result;
  }

  public customAnimation(): IFrame[] {
    const frames: IFrame[] = [];

    let blocks: IPixelState[] = [
      { x: Constants.HeaderColumns / 2, y: 2, color: Colour.White },
      { x: Constants.HeaderColumns / 2, y: 4, color: Colour.White },
      { x: Constants.HeaderColumns / 2, y: 6, color: Colour.White },
      { x: Constants.HeaderColumns / 2, y: 8, color: Colour.White },
      { x: Constants.HeaderColumns / 2, y: 10, color: Colour.White },
      { x: Constants.HeaderColumns / 2, y: 12, color: Colour.White },
    ];

    for (let frameNumber = 0; frameNumber < 5; frameNumber++) {
      let pixels: IPixelState[] = blocks.map((block, index) => ({
        ...block,
        x: index === 0 ? block.x - frameNumber : block.x,
      }));

      frames.push({
        frameNumber: frameNumber,
        pixels: pixels,
      });
    }

    for (let frameNumber = 5; frameNumber < 11; frameNumber++) {
      let n = frameNumber - 5;

      let pixels: IPixelState[] = blocks.map((block, index) => ({
        ...block,
        x: index === 1 ? block.x - n : block.x,
      }));

      frames.push({
        frameNumber: frameNumber,
        pixels: pixels,
      });
    }

    for (let frameNumber = 11; frameNumber < 18; frameNumber++) {
      let n = frameNumber - 11;

      let pixels: IPixelState[] = blocks.map((block, index) => ({
        ...block,
        x: index === 2 ? block.x - n : block.x,
      }));

      frames.push({
        frameNumber: frameNumber,
        pixels: pixels,
      });
    }

    for (let frameNumber = 18; frameNumber < 26; frameNumber++) {
      let n = frameNumber - 18;

      let pixels: IPixelState[] = blocks.map((block, index) => ({
        ...block,
        x: index === 3 ? block.x - n : block.x,
      }));

      frames.push({
        frameNumber: frameNumber,
        pixels: pixels,
      });
    }

    for (let frameNumber = 26; frameNumber < 35; frameNumber++) {
      let n = frameNumber - 26;

      let pixels: IPixelState[] = blocks.map((block, index) => ({
        ...block,
        x: index === 4 ? block.x - n : block.x,
      }));

      frames.push({
        frameNumber: frameNumber,
        pixels: pixels,
      });
    }

    for (let frameNumber = 35; frameNumber < 45; frameNumber++) {
      let n = frameNumber - 35;

      let pixels: IPixelState[] = blocks.map((block, index) => ({
        ...block,
        x: index === 5 ? block.x - n : block.x,
      }));

      frames.push({
        frameNumber: frameNumber,
        pixels: pixels,
      });
    }

    return frames;
  }
}
