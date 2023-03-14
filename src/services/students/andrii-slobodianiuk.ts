import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";

export class AndriiSlobodianiukConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Andrii Slobodianiuk';
    }

    public getStudentEmail(): string {
        return 'slobodyanukdev@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Andrii',
            surname: 'Slobodianiuk',
            email: this.getStudentEmail(),
            projectName: 'Demo Project',
            personalProjectLink: 'http://demo-lecture-3.azurewebsites.net',
            header: Constants.DefaultConfig.header,
            frames: Constants.DefaultConfig.frames
        }
    }
}