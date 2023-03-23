import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class MykhailoHorpyniukConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Mykhailo Horpyniuk';
    }

    public getStudentEmail(): string {
        return 'micka.hrp@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Mykahilo',
            surname: 'Horpyniuk',
            email: this.getStudentEmail(),
            projectName: 'Coin changing',
            personalProjectLink: 'https://.azurewebsites.net',
            header: Avatar(0),
            frames: generateFrames()
        }
    }
}
function generateFrames(): IFrame[] {
    const frames: IFrame[] = [];

    const firstFrame: IPixelState[] = [
		{ x: 5, y: 1, color: Colour.White },
		{ x: 6, y: 1, color: Colour.White },
		{ x: 7, y: 1, color: Colour.White },
		{ x: 8, y: 1, color: Colour.White },
		{ x: 9, y: 1, color: Colour.White },
		{ x: 1, y: 5, color: Colour.White },
		{ x: 1, y: 6, color: Colour.White },
		{ x: 1, y: 7, color: Colour.White },
		{ x: 1, y: 8, color: Colour.White },
		{ x: 1, y: 9, color: Colour.White },
		{ x: 1, y: 10, color: Colour.White },
		{ x: 13, y: 5, color: Colour.White },
		{ x: 13, y: 6, color: Colour.White },
		{ x: 13, y: 7, color: Colour.White },
		{ x: 13, y: 8, color: Colour.White },
		{ x: 13, y: 9, color: Colour.White },
		{ x: 13, y: 10, color: Colour.White },
		{ x: 5, y: 14, color: Colour.White },
		{ x: 6, y: 14, color: Colour.White },
		{ x: 7, y: 14, color: Colour.White },
		{ x: 8, y: 14, color: Colour.White },
		{ x: 9, y: 14, color: Colour.White },
		{ x: 2, y: 5, color: Colour.White },
		{ x: 2, y: 10, color: Colour.White },
		{ x: 12, y: 5, color: Colour.White },
		{ x: 12, y: 10, color: Colour.White },
		{ x: 2, y: 4, color: Colour.White },
		{ x: 3, y: 4, color: Colour.White },
		{ x: 3, y: 3, color: Colour.White },{ x: 4, y: 3, color: Colour.White },{ x: 4, y: 2, color: Colour.White },{ x: 2, y: 11, color: Colour.White },{ x: 3, y: 11, color: Colour.White },
		{ x: 3, y: 12, color: Colour.White },{ x: 4, y: 12, color: Colour.White },{ x: 4, y: 13, color: Colour.White },{ x: 5, y: 13, color: Colour.White },{ x: 10, y: 13, color: Colour.White },
		{ x: 10, y: 12, color: Colour.White },{ x: 11, y: 11, color: Colour.White },{ x: 11, y: 12, color: Colour.White },{ x: 12, y: 11, color: Colour.White },{ x: 12, y: 10, color: Colour.White },
		{ x: 10, y: 2, color: Colour.White },{ x: 10, y: 3, color: Colour.White },{ x: 11, y: 3, color: Colour.White },{ x: 11, y: 4, color: Colour.White },{ x: 12, y: 4, color: Colour.White },{ x: 12, y: 5, color: Colour.White },
		{ x: 9, y: 14, color: Colour.White },{ x: 6, y: 2, color: Colour.White },{ x: 8, y: 2, color: Colour.White },{ x: 5, y: 2, color: Colour.White },{ x: 9, y: 2, color: Colour.White },
		{ x: 5, y: 13, color: Colour.White },{ x: 6, y: 13, color: Colour.White },{ x: 8, y: 13, color: Colour.White },{ x: 9, y: 13, color: Colour.White },{ x: 2, y: 7, color: Colour.White },
		{ x: 3, y: 7, color: Colour.White },{ x: 4, y: 7, color: Colour.White },{ x: 5, y: 7, color: Colour.White },{ x: 6, y: 7, color: Colour.White },{ x: 7, y: 7, color: Colour.White },
		{ x: 8, y: 7, color: Colour.White },{ x: 9, y: 7, color: Colour.White },{ x: 10, y: 7, color: Colour.White },{ x: 11, y: 7, color: Colour.White },{ x: 12, y: 7, color: Colour.White },
		{ x: 3, y: 6, color: Colour.White },{ x: 3, y: 8, color: Colour.White },{ x: 4, y: 9, color: Colour.White },{ x: 5, y: 9, color: Colour.White },{ x: 4, y: 5, color: Colour.White },
		{ x: 5, y: 5, color: Colour.White },{ x: 6, y: 5, color: Colour.White },{ x: 7, y: 5, color: Colour.White },{ x: 7, y: 6, color: Colour.White },{ x: 7, y: 8, color: Colour.White },
		{ x: 7, y: 9, color: Colour.White },{ x: 5, y: 4, color: Colour.White },{ x: 6, y: 4, color: Colour.White },{ x: 8, y: 9, color: Colour.White },{ x: 9, y: 9, color: Colour.White },
		{ x: 10, y: 9, color: Colour.White },{ x: 8, y: 10, color: Colour.White },{ x: 9, y: 10, color: Colour.White },{ x: 11, y: 8, color: Colour.White },{ x: 11, y: 6, color: Colour.White },
		{ x: 10, y: 5, color: Colour.White },{ x: 9, y: 9, color: Colour.White },{ x: 2, y: 6, color: Colour.White },{ x: 2, y: 7, color: Colour.White },{ x: 2, y: 8, color: Colour.White },
		{ x: 2, y: 9, color: Colour.White },{ x: 3, y: 5, color: Colour.White },{ x: 3, y: 9, color: Colour.White },{ x: 3, y: 10, color: Colour.White },{ x: 4, y: 4, color: Colour.White },
		{ x: 4, y: 6, color: Colour.White },{ x: 4, y: 8, color: Colour.White },{ x: 4, y: 10, color: Colour.White },{ x: 4, y: 11, color: Colour.White },{ x: 5, y: 3, color: Colour.White },
		{ x: 5, y: 6, color: Colour.White },{ x: 5, y: 8, color: Colour.White },{ x: 5, y: 10, color: Colour.White },{ x: 5, y: 11, color: Colour.White },{ x: 5, y: 12, color: Colour.White },
		{ x: 6, y: 3, color: Colour.White },{ x: 6, y: 6, color: Colour.White },{ x: 6, y: 8, color: Colour.White },{ x: 6, y: 9, color: Colour.White },{ x: 6, y: 10, color: Colour.White },
		{ x: 6, y: 11, color: Colour.White },{ x: 6, y: 12, color: Colour.White },{ x: 7, y: 2, color: Colour.White },{ x: 7, y: 3, color: Colour.White },{ x: 7, y: 4, color: Colour.White },
		{ x: 7, y: 10, color: Colour.White },{ x: 7, y: 11, color: Colour.White },{ x: 7, y: 12, color: Colour.White },{ x: 7, y: 13, color: Colour.White },{ x: 8, y: 3, color: Colour.White },
		{ x: 8, y: 4, color: Colour.White },{ x: 8, y: 5, color: Colour.White },{ x: 8, y: 6, color: Colour.White },{ x: 8, y: 8, color: Colour.White },{ x: 8, y: 11, color: Colour.White },
		{ x: 8, y: 12, color: Colour.White },{ x: 9, y: 3, color: Colour.White },{ x: 9, y: 4, color: Colour.White },{ x: 9, y: 6, color: Colour.White },{ x: 9, y: 8, color: Colour.White },
		{ x: 9, y: 11, color: Colour.White },{ x: 9, y: 12, color: Colour.White },{ x: 9, y: 5, color: Colour.White },{ x: 10, y: 4, color: Colour.White },{ x: 10, y: 4, color: Colour.White },
		{ x: 10, y: 8, color: Colour.White },{ x: 10, y: 10, color: Colour.White },{ x: 10, y: 11, color: Colour.White },{ x: 10, y: 5, color: Colour.White },{ x: 10, y: 6, color: Colour.White },{ x: 11, y: 5, color: Colour.White },
		{ x: 11, y: 9, color: Colour.White },{ x: 11, y: 10, color: Colour.White },{ x: 12, y: 6, color: Colour.White },{ x: 12, y: 8, color: Colour.White },{ x: 12, y: 9, color: Colour.White },
    ];

    const secondFrame: IPixelState[] = [
		{ x: 5, y: 1, color: Colour.White },{ x: 6, y: 1, color: Colour.White },{ x: 7, y: 1, color: Colour.White },{ x: 8, y: 1, color: Colour.White },{ x: 9, y: 1, color: Colour.White },
		{ x: 1, y: 5, color: Colour.White },{ x: 1, y: 6, color: Colour.White },{ x: 1, y: 7, color: Colour.White },{ x: 1, y: 8, color: Colour.White },{ x: 1, y: 9, color: Colour.White },
		{ x: 1, y: 10, color: Colour.White },{ x: 13, y: 5, color: Colour.White },{ x: 13, y: 6, color: Colour.White },{ x: 13, y: 7, color: Colour.White },{ x: 13, y: 8, color: Colour.White },
		{ x: 13, y: 9, color: Colour.White },{ x: 13, y: 10, color: Colour.White },{ x: 5, y: 14, color: Colour.White },{ x: 6, y: 14, color: Colour.White },{ x: 7, y: 14, color: Colour.White },
		{ x: 8, y: 14, color: Colour.White },{ x: 9, y: 14, color: Colour.White },{ x: 2, y: 5, color: Colour.White },{ x: 2, y: 10, color: Colour.White },{ x: 12, y: 5, color: Colour.White },
		{ x: 12, y: 10, color: Colour.White },{ x: 2, y: 4, color: Colour.White },{ x: 3, y: 4, color: Colour.White },{ x: 3, y: 3, color: Colour.White },{ x: 4, y: 3, color: Colour.White },
		{ x: 4, y: 2, color: Colour.White },{ x: 2, y: 11, color: Colour.White },{ x: 3, y: 11, color: Colour.White },{ x: 3, y: 12, color: Colour.White },{ x: 4, y: 12, color: Colour.White },
		{ x: 4, y: 13, color: Colour.White },{ x: 5, y: 13, color: Colour.White },{ x: 10, y: 13, color: Colour.White },{ x: 10, y: 12, color: Colour.White },{ x: 11, y: 11, color: Colour.White },
		{ x: 11, y: 12, color: Colour.White },{ x: 12, y: 11, color: Colour.White },{ x: 12, y: 10, color: Colour.White },{ x: 10, y: 2, color: Colour.White },{ x: 10, y: 3, color: Colour.White },
		{ x: 11, y: 3, color: Colour.White },{ x: 11, y: 4, color: Colour.White },{ x: 12, y: 4, color: Colour.White },{ x: 12, y: 5, color: Colour.White },{ x: 9, y: 14, color: Colour.White },
		{ x: 6, y: 2, color: Colour.White },{ x: 8, y: 2, color: Colour.White },{ x: 5, y: 2, color: Colour.White },{ x: 9, y: 2, color: Colour.White },{ x: 5, y: 13, color: Colour.White },
		{ x: 6, y: 13, color: Colour.White },{ x: 8, y: 13, color: Colour.White },{ x: 9, y: 13, color: Colour.White },{ x: 2, y: 7, color: Colour.White },{ x: 3, y: 7, color: Colour.White },
		{ x: 4, y: 7, color: Colour.White },{ x: 5, y: 7, color: Colour.White },{ x: 6, y: 7, color: Colour.White },{ x: 7, y: 7, color: Colour.White },{ x: 8, y: 7, color: Colour.White },
		{ x: 9, y: 7, color: Colour.White },{ x: 10, y: 7, color: Colour.White },{ x: 11, y: 7, color: Colour.White },{ x: 12, y: 7, color: Colour.White },{ x: 3, y: 6, color: Colour.White },
		{ x: 3, y: 8, color: Colour.White },{ x: 4, y: 9, color: Colour.White },{ x: 5, y: 9, color: Colour.White },{ x: 4, y: 5, color: Colour.White },{ x: 5, y: 5, color: Colour.White },
		{ x: 6, y: 5, color: Colour.White },{ x: 7, y: 5, color: Colour.White },{ x: 7, y: 6, color: Colour.White },
		{ x: 7, y: 8, color: Colour.White },{ x: 7, y: 9, color: Colour.White },{ x: 5, y: 4, color: Colour.White },
		{ x: 6, y: 4, color: Colour.White },{ x: 8, y: 9, color: Colour.White },{ x: 9, y: 9, color: Colour.White },{ x: 10, y: 9, color: Colour.White },{ x: 8, y: 10, color: Colour.White },
		{ x: 9, y: 10, color: Colour.White },{ x: 11, y: 8, color: Colour.White },{ x: 11, y: 6, color: Colour.White },{ x: 10, y: 5, color: Colour.White },{ x: 9, y: 9, color: Colour.White },
    ];
    const thirdFrame: IPixelState[] = [
		{ x: 5, y: 1, color: Colour.White },{ x: 6, y: 1, color: Colour.White },{ x: 7, y: 1, color: Colour.White },{ x: 8, y: 1, color: Colour.White },{ x: 9, y: 1, color: Colour.White },
		{ x: 1, y: 5, color: Colour.White },{ x: 1, y: 6, color: Colour.White },{ x: 1, y: 7, color: Colour.White },{ x: 1, y: 8, color: Colour.White },{ x: 1, y: 9, color: Colour.White },
		{ x: 1, y: 10, color: Colour.White },{ x: 13, y: 5, color: Colour.White },{ x: 13, y: 6, color: Colour.White },{ x: 13, y: 7, color: Colour.White },{ x: 13, y: 8, color: Colour.White },
		{ x: 13, y: 9, color: Colour.White },{ x: 13, y: 10, color: Colour.White },{ x: 5, y: 14, color: Colour.White },{ x: 6, y: 14, color: Colour.White },{ x: 7, y: 14, color: Colour.White },
		{ x: 8, y: 14, color: Colour.White },{ x: 9, y: 14, color: Colour.White },{ x: 2, y: 5, color: Colour.White },{ x: 2, y: 10, color: Colour.White },{ x: 12, y: 5, color: Colour.White },
		{ x: 12, y: 10, color: Colour.White },{ x: 2, y: 4, color: Colour.White },{ x: 3, y: 4, color: Colour.White },{ x: 3, y: 3, color: Colour.White },{ x: 4, y: 3, color: Colour.White },
		{ x: 4, y: 2, color: Colour.White },{ x: 2, y: 11, color: Colour.White },{ x: 3, y: 11, color: Colour.White },{ x: 3, y: 12, color: Colour.White },{ x: 4, y: 12, color: Colour.White },
		{ x: 4, y: 13, color: Colour.White },{ x: 5, y: 13, color: Colour.White },{ x: 10, y: 13, color: Colour.White },{ x: 10, y: 12, color: Colour.White },{ x: 11, y: 11, color: Colour.White },
		{ x: 11, y: 12, color: Colour.White },{ x: 12, y: 11, color: Colour.White },{ x: 12, y: 10, color: Colour.White },{ x: 10, y: 2, color: Colour.White },{ x: 10, y: 3, color: Colour.White },
		{ x: 11, y: 3, color: Colour.White },{ x: 11, y: 4, color: Colour.White },{ x: 12, y: 4, color: Colour.White },{ x: 12, y: 5, color: Colour.White },{ x: 9, y: 14, color: Colour.White },
		{ x: 6, y: 2, color: Colour.White },{ x: 8, y: 2, color: Colour.White },{ x: 5, y: 2, color: Colour.White },{ x: 9, y: 2, color: Colour.White },{ x: 5, y: 13, color: Colour.White },
		{ x: 6, y: 13, color: Colour.White },{ x: 8, y: 13, color: Colour.White },{ x: 9, y: 13, color: Colour.White },{ x: 2, y: 7, color: Colour.White },{ x: 3, y: 7, color: Colour.White },
		{ x: 4, y: 7, color: Colour.White },{ x: 5, y: 7, color: Colour.White },{ x: 6, y: 7, color: Colour.White },{ x: 7, y: 7, color: Colour.White },{ x: 8, y: 7, color: Colour.White },
		{ x: 9, y: 7, color: Colour.White },{ x: 10, y: 7, color: Colour.White },{ x: 11, y: 7, color: Colour.White },{ x: 12, y: 7, color: Colour.White },{ x: 3, y: 6, color: Colour.White },
		{ x: 3, y: 8, color: Colour.White },{ x: 4, y: 9, color: Colour.White },{ x: 5, y: 9, color: Colour.White },{ x: 4, y: 5, color: Colour.White },{ x: 5, y: 5, color: Colour.White },
		{ x: 6, y: 5, color: Colour.White },{ x: 7, y: 5, color: Colour.White },{ x: 7, y: 6, color: Colour.White },{ x: 7, y: 8, color: Colour.White },{ x: 7, y: 9, color: Colour.White },
		{ x: 5, y: 4, color: Colour.White },{ x: 6, y: 4, color: Colour.White },{ x: 8, y: 9, color: Colour.White },{ x: 9, y: 9, color: Colour.White },{ x: 10, y: 9, color: Colour.White },
		{ x: 8, y: 10, color: Colour.White },{ x: 9, y: 10, color: Colour.White },{ x: 11, y: 8, color: Colour.White },{ x: 11, y: 6, color: Colour.White },{ x: 10, y: 5, color: Colour.White },
		{ x: 9, y: 9, color: Colour.White },{ x: 2, y: 6, color: Colour.White },{ x: 2, y: 7, color: Colour.White },{ x: 2, y: 8, color: Colour.White },{ x: 2, y: 9, color: Colour.White },
		{ x: 3, y: 5, color: Colour.White },{ x: 3, y: 9, color: Colour.White },{ x: 3, y: 10, color: Colour.White },{ x: 4, y: 4, color: Colour.White },{ x: 4, y: 6, color: Colour.White },
		{ x: 4, y: 8, color: Colour.White },{ x: 4, y: 10, color: Colour.White },{ x: 4, y: 11, color: Colour.White },{ x: 5, y: 3, color: Colour.White },{ x: 5, y: 6, color: Colour.White },
		{ x: 5, y: 8, color: Colour.White },{ x: 5, y: 10, color: Colour.White },{ x: 5, y: 11, color: Colour.White },{ x: 5, y: 12, color: Colour.White },{ x: 6, y: 3, color: Colour.White },
		{ x: 6, y: 6, color: Colour.White },{ x: 6, y: 8, color: Colour.White },{ x: 6, y: 9, color: Colour.White },{ x: 6, y: 10, color: Colour.White },{ x: 6, y: 11, color: Colour.White },
		{ x: 6, y: 12, color: Colour.White },{ x: 7, y: 2, color: Colour.White },{ x: 7, y: 3, color: Colour.White },{ x: 7, y: 4, color: Colour.White },{ x: 7, y: 10, color: Colour.White },
		{ x: 7, y: 11, color: Colour.White },{ x: 7, y: 12, color: Colour.White },{ x: 7, y: 13, color: Colour.White },{ x: 8, y: 3, color: Colour.White },{ x: 8, y: 4, color: Colour.White },
		{ x: 8, y: 5, color: Colour.White },{ x: 8, y: 6, color: Colour.White },{ x: 8, y: 8, color: Colour.White },{ x: 8, y: 11, color: Colour.White },{ x: 8, y: 12, color: Colour.White },
		{ x: 9, y: 3, color: Colour.White },{ x: 9, y: 4, color: Colour.White },{ x: 9, y: 6, color: Colour.White },{ x: 9, y: 8, color: Colour.White },{ x: 9, y: 11, color: Colour.White },
		{ x: 9, y: 12, color: Colour.White },{ x: 9, y: 5, color: Colour.White },{ x: 10, y: 4, color: Colour.White },{ x: 10, y: 4, color: Colour.White },{ x: 10, y: 8, color: Colour.White },
		{ x: 10, y: 10, color: Colour.White },{ x: 10, y: 11, color: Colour.White },{ x: 10, y: 5, color: Colour.White },{ x: 10, y: 6, color: Colour.White },{ x: 11, y: 5, color: Colour.White },
		{ x: 11, y: 9, color: Colour.White },{ x: 11, y: 10, color: Colour.White },{ x: 12, y: 6, color: Colour.White },{ x: 12, y: 8, color: Colour.White },{ x: 12, y: 9, color: Colour.White },
    ];

    const fourFrame: IPixelState[] = [
		{ x: 5, y: 1, color: Colour.White },{ x: 6, y: 1, color: Colour.White },
		{ x: 7, y: 1, color: Colour.White },{ x: 8, y: 1, color: Colour.White },{ x: 9, y: 1, color: Colour.White },{ x: 1, y: 5, color: Colour.White },{ x: 1, y: 6, color: Colour.White },
		{ x: 1, y: 7, color: Colour.White },{ x: 1, y: 8, color: Colour.White },{ x: 1, y: 9, color: Colour.White },
		{ x: 1, y: 10, color: Colour.White },{ x: 13, y: 5, color: Colour.White },{ x: 13, y: 6, color: Colour.White },
		{ x: 13, y: 7, color: Colour.White },{ x: 13, y: 8, color: Colour.White },{ x: 13, y: 9, color: Colour.White },{ x: 13, y: 10, color: Colour.White },{ x: 5, y: 14, color: Colour.White },
		{ x: 6, y: 14, color: Colour.White },{ x: 7, y: 14, color: Colour.White },{ x: 8, y: 14, color: Colour.White },{ x: 9, y: 14, color: Colour.White },{ x: 2, y: 5, color: Colour.White },
		{ x: 2, y: 10, color: Colour.White },{ x: 12, y: 5, color: Colour.White },{ x: 12, y: 10, color: Colour.White },{ x: 2, y: 4, color: Colour.White },{ x: 3, y: 4, color: Colour.White },
		{ x: 3, y: 3, color: Colour.White },{ x: 4, y: 3, color: Colour.White },{ x: 4, y: 2, color: Colour.White },{ x: 2, y: 11, color: Colour.White },{ x: 3, y: 11, color: Colour.White },
		{ x: 3, y: 12, color: Colour.White },{ x: 4, y: 12, color: Colour.White },{ x: 4, y: 13, color: Colour.White },{ x: 5, y: 13, color: Colour.White },{ x: 10, y: 13, color: Colour.White },
		{ x: 10, y: 12, color: Colour.White },{ x: 11, y: 11, color: Colour.White },{ x: 11, y: 12, color: Colour.White },{ x: 12, y: 11, color: Colour.White },{ x: 12, y: 10, color: Colour.White },
		{ x: 10, y: 2, color: Colour.White },{ x: 10, y: 3, color: Colour.White },{ x: 11, y: 3, color: Colour.White },{ x: 11, y: 4, color: Colour.White },{ x: 12, y: 4, color: Colour.White },
		{ x: 12, y: 5, color: Colour.White },{ x: 9, y: 14, color: Colour.White },{ x: 6, y: 2, color: Colour.White },{ x: 8, y: 2, color: Colour.White },{ x: 5, y: 2, color: Colour.White },
		{ x: 9, y: 2, color: Colour.White },{ x: 5, y: 13, color: Colour.White },{ x: 6, y: 13, color: Colour.White },{ x: 8, y: 13, color: Colour.White },{ x: 9, y: 13, color: Colour.White },
		{ x: 3, y: 6, color: Colour.White },{ x: 3, y: 7, color: Colour.White },{ x: 3, y: 8, color: Colour.White },{ x: 3, y: 9, color: Colour.White },{ x: 4, y: 5, color: Colour.White },
		{ x: 4, y: 10, color: Colour.White },{ x: 5, y: 4, color: Colour.White },{ x: 6, y: 4, color: Colour.White },{ x: 7, y: 4, color: Colour.White },{ x: 8, y: 4, color: Colour.White },
		{ x: 9, y: 4, color: Colour.White },{ x: 10, y: 5, color: Colour.White },{ x: 10, y: 10, color: Colour.White },{ x: 11, y: 6, color: Colour.White },{ x: 11, y: 7, color: Colour.White },
		{ x: 11, y: 8, color: Colour.White },{ x: 11, y: 9, color: Colour.White },{ x: 10, y: 10, color: Colour.White },{ x: 6, y: 5, color: Colour.White },{ x: 6, y: 6, color: Colour.White },
		{ x: 6, y: 7, color: Colour.White },{ x: 6, y: 8, color: Colour.White },{ x: 6, y: 9, color: Colour.White },{ x: 6, y: 10, color: Colour.White },{ x: 8, y: 5, color: Colour.White },
		{ x: 8, y: 6, color: Colour.White },{ x: 8, y: 7, color: Colour.White },{ x: 8, y: 8, color: Colour.White },{ x: 8, y: 9, color: Colour.White },{ x: 8, y: 10, color: Colour.White },
    ];

    const fiveFrame: IPixelState[] = [
		{ x: 5, y: 1, color: Colour.White }, { x: 6, y: 1, color: Colour.White },
		{ x: 7, y: 1, color: Colour.White },{ x: 8, y: 1, color: Colour.White },{ x: 9, y: 1, color: Colour.White },{ x: 1, y: 5, color: Colour.White },{ x: 1, y: 6, color: Colour.White },
		{ x: 1, y: 7, color: Colour.White },{ x: 1, y: 8, color: Colour.White },{ x: 1, y: 9, color: Colour.White },{ x: 1, y: 10, color: Colour.White },{ x: 13, y: 5, color: Colour.White },
		{ x: 13, y: 6, color: Colour.White },{ x: 13, y: 7, color: Colour.White },{ x: 13, y: 8, color: Colour.White },{ x: 13, y: 9, color: Colour.White },{ x: 13, y: 10, color: Colour.White },
		{ x: 5, y: 14, color: Colour.White },{ x: 6, y: 14, color: Colour.White },{ x: 7, y: 14, color: Colour.White },{ x: 8, y: 14, color: Colour.White },{ x: 9, y: 14, color: Colour.White },
		{ x: 2, y: 5, color: Colour.White },{ x: 2, y: 10, color: Colour.White },{ x: 12, y: 5, color: Colour.White },{ x: 12, y: 10, color: Colour.White },{ x: 2, y: 4, color: Colour.White },{ x: 3, y: 4, color: Colour.White },
		{ x: 3, y: 3, color: Colour.White },{ x: 4, y: 3, color: Colour.White },{ x: 4, y: 2, color: Colour.White },{ x: 2, y: 11, color: Colour.White },{ x: 3, y: 11, color: Colour.White },{ x: 3, y: 12, color: Colour.White },{ x: 4, y: 12, color: Colour.White },{ x: 4, y: 13, color: Colour.White },
		{ x: 5, y: 13, color: Colour.White },{ x: 10, y: 13, color: Colour.White },{ x: 10, y: 12, color: Colour.White },{ x: 11, y: 11, color: Colour.White },{ x: 11, y: 12, color: Colour.White },
		{ x: 12, y: 11, color: Colour.White },{ x: 12, y: 10, color: Colour.White },{ x: 10, y: 2, color: Colour.White },{ x: 10, y: 3, color: Colour.White },{ x: 11, y: 3, color: Colour.White },
		{ x: 11, y: 4, color: Colour.White },{ x: 12, y: 4, color: Colour.White },{ x: 12, y: 5, color: Colour.White },{ x: 9, y: 14, color: Colour.White },{ x: 6, y: 2, color: Colour.White },
		{ x: 8, y: 2, color: Colour.White },{ x: 5, y: 2, color: Colour.White },{ x: 9, y: 2, color: Colour.White },{ x: 5, y: 13, color: Colour.White },{ x: 6, y: 13, color: Colour.White },
		{ x: 8, y: 13, color: Colour.White },{ x: 9, y: 13, color: Colour.White },{ x: 2, y: 7, color: Colour.White },{ x: 3, y: 7, color: Colour.White },{ x: 4, y: 7, color: Colour.White },
		{ x: 5, y: 7, color: Colour.White },{ x: 6, y: 7, color: Colour.White },{ x: 7, y: 7, color: Colour.White },{ x: 8, y: 7, color: Colour.White },{ x: 9, y: 7, color: Colour.White },
		{ x: 10, y: 7, color: Colour.White },{ x: 11, y: 7, color: Colour.White },{ x: 12, y: 7, color: Colour.White },{ x: 3, y: 6, color: Colour.White },{ x: 3, y: 8, color: Colour.White },
		{ x: 4, y: 9, color: Colour.White },{ x: 5, y: 9, color: Colour.White },{ x: 4, y: 5, color: Colour.White },{ x: 5, y: 5, color: Colour.White },{ x: 6, y: 5, color: Colour.White },
		{ x: 7, y: 5, color: Colour.White },{ x: 7, y: 6, color: Colour.White },{ x: 7, y: 8, color: Colour.White },{ x: 7, y: 9, color: Colour.White },{ x: 5, y: 4, color: Colour.White },
		{ x: 6, y: 4, color: Colour.White },{ x: 8, y: 9, color: Colour.White },{ x: 9, y: 9, color: Colour.White },{ x: 10, y: 9, color: Colour.White },{ x: 8, y: 10, color: Colour.White },
		{ x: 9, y: 10, color: Colour.White },{ x: 11, y: 8, color: Colour.White },{ x: 11, y: 6, color: Colour.White },{ x: 10, y: 5, color: Colour.White },{ x: 9, y: 9, color: Colour.White },
    ];


    for (let frameNumber = 0; frameNumber < Constants.MaxTotalFrames; frameNumber++) {
        const pixels: IPixelState[] = [];

        const show1 = frameNumber % 20 < 4;
        const show2 = frameNumber % 20 >= 4 && frameNumber % 20 < 8;
        const show3 = frameNumber % 20 >= 8 && frameNumber % 20 < 12;
        const show4 = frameNumber % 20 >= 12 && frameNumber % 20 < 16;
        const show5 = frameNumber % 20 >= 16;

        if (show1) {
            pixels.push(...firstFrame.map(pixel => ({ ...pixel, x: pixel.x, color: Colour.White })));
        }
        if (show2) {
            pixels.push(...secondFrame.map(pixel => ({ ...pixel, x: pixel.x, color: Colour.White })));
        }
        if (show3) {
            pixels.push(...thirdFrame.map(pixel => ({ ...pixel, x: pixel.x, color: Colour.White })));
        }
        if (show4) {
            pixels.push(...fourFrame.map(pixel => ({ ...pixel, x: pixel.x, color: Colour.White })));
        }
        if (show5) {
            pixels.push(...fiveFrame.map(pixel => ({ ...pixel, x: pixel.x, color: Colour.White })));
        }

        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });
    }

    return frames;
}

const Avatar = (frameNumber: number): IFrame => {
    let result: IFrame = {
        frameNumber: frameNumber,
        pixels: []
    };

    result.pixels.push(
		{ x: 5, y: 1, color: Colour.White },{ x: 6, y: 1, color: Colour.White },{ x: 7, y: 1, color: Colour.White },{ x: 8, y: 1, color: Colour.White },
		{ x: 9, y: 1, color: Colour.White },{ x: 1, y: 5, color: Colour.White },{ x: 1, y: 6, color: Colour.White },{ x: 1, y: 7, color: Colour.White },{ x: 1, y: 8, color: Colour.White },
		{ x: 1, y: 9, color: Colour.White },{ x: 1, y: 10, color: Colour.White },{ x: 13, y: 5, color: Colour.White },{ x: 13, y: 6, color: Colour.White },{ x: 13, y: 7, color: Colour.White },
		{ x: 13, y: 8, color: Colour.White },{ x: 13, y: 9, color: Colour.White },{ x: 13, y: 10, color: Colour.White },{ x: 5, y: 14, color: Colour.White },{ x: 6, y: 14, color: Colour.White },
		{ x: 7, y: 14, color: Colour.White },{ x: 8, y: 14, color: Colour.White },{ x: 9, y: 14, color: Colour.White },{ x: 2, y: 5, color: Colour.White },{ x: 2, y: 10, color: Colour.White },
		{ x: 12, y: 5, color: Colour.White },{ x: 12, y: 10, color: Colour.White },{ x: 2, y: 4, color: Colour.White },{ x: 3, y: 4, color: Colour.White },{ x: 3, y: 3, color: Colour.White },
		{ x: 4, y: 3, color: Colour.White },{ x: 4, y: 2, color: Colour.White },{ x: 2, y: 11, color: Colour.White },{ x: 3, y: 11, color: Colour.White },{ x: 3, y: 12, color: Colour.White },
		{ x: 4, y: 12, color: Colour.White },{ x: 4, y: 13, color: Colour.White },{ x: 5, y: 13, color: Colour.White },{ x: 10, y: 13, color: Colour.White },{ x: 10, y: 12, color: Colour.White },
		{ x: 11, y: 11, color: Colour.White },{ x: 11, y: 12, color: Colour.White },{ x: 12, y: 11, color: Colour.White },{ x: 12, y: 10, color: Colour.White },{ x: 10, y: 2, color: Colour.White },
		{ x: 10, y: 3, color: Colour.White },{ x: 11, y: 3, color: Colour.White },{ x: 11, y: 4, color: Colour.White },{ x: 12, y: 4, color: Colour.White },{ x: 12, y: 5, color: Colour.White },
		{ x: 9, y: 14, color: Colour.White },{ x: 6, y: 2, color: Colour.White },{ x: 8, y: 2, color: Colour.White },{ x: 5, y: 2, color: Colour.White },{ x: 9, y: 2, color: Colour.White },
		{ x: 5, y: 13, color: Colour.White },{ x: 6, y: 13, color: Colour.White },{ x: 8, y: 13, color: Colour.White },{ x: 9, y: 13, color: Colour.White },{ x: 2, y: 7, color: Colour.White },
		{ x: 3, y: 7, color: Colour.White },{ x: 4, y: 7, color: Colour.White },{ x: 5, y: 7, color: Colour.White },{ x: 6, y: 7, color: Colour.White },{ x: 7, y: 7, color: Colour.White },
		{ x: 8, y: 7, color: Colour.White },{ x: 9, y: 7, color: Colour.White },{ x: 10, y: 7, color: Colour.White },{ x: 11, y: 7, color: Colour.White },{ x: 12, y: 7, color: Colour.White },
		{ x: 3, y: 6, color: Colour.White },{ x: 3, y: 8, color: Colour.White },{ x: 4, y: 9, color: Colour.White },{ x: 5, y: 9, color: Colour.White },{ x: 4, y: 5, color: Colour.White },
		{ x: 5, y: 5, color: Colour.White },{ x: 6, y: 5, color: Colour.White },{ x: 7, y: 5, color: Colour.White },{ x: 7, y: 6, color: Colour.White },{ x: 7, y: 8, color: Colour.White },
		{ x: 7, y: 9, color: Colour.White },{ x: 5, y: 4, color: Colour.White },{ x: 6, y: 4, color: Colour.White },{ x: 8, y: 9, color: Colour.White },{ x: 9, y: 9, color: Colour.White },
		{ x: 10, y: 9, color: Colour.White },{ x: 8, y: 10, color: Colour.White },{ x: 9, y: 10, color: Colour.White },{ x: 11, y: 8, color: Colour.White },{ x: 11, y: 6, color: Colour.White },{ x: 10, y: 5, color: Colour.White }, { x: 9, y: 9, color: Colour.White },
    );
    
    return result;
}
