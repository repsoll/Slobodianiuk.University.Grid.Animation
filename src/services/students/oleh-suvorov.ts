import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

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
      header: this.customHeader(),
      frames: this.customAnimation(),
    };
  }

  public customHeader(): IFrame {
    let result = [];

    for (let block = 2; block < Constants.HeaderColumns - 2; block++) {
      result.push({
        x: Constants.HeaderColumns / 2,
        y: block++,
        color: Colour.White,
      });
    }

    return {
      frameNumber: 0,
      pixels: result,
    };
  }

  public customAnimation(): IFrame[] {}
}
