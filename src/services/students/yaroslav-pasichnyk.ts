import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class YaroslavPasichnykConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Yaroslav Pasichnyk';
    }

    public getStudentEmail(): string {
        return 'qobgry@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Yaroslav',
            surname: 'Pasichnyk',
            email: this.getStudentEmail(),
            projectName: 'PodRecommender',
            personalProjectLink: 'https://pasichnyk-university-podrecommender.azurewebsites.net',
            header: createPodRecommderHeader(),
            frames: generatePodrecommenderFrames()
        }
    }

}

function createPodRecommderHeader(): IFrame {
    const pixels: IPixelState[] = [
        { x: 1, y: 1, color: Colour.White },
        { x: 15, y: 1, color: Colour.White },
    ];

    return {
        frameNumber: 0,
        pixels: pixels,
    };
}

function generatePodrecommenderFrames(): IFrame[] {
    const frames: IFrame[] = [];

    const letterP: IPixelState[] = [
        { x: 2, y: 2, color: Colour.White }, { x: 2, y: 3, color: Colour.White }, { x: 2, y: 4, color: Colour.White },
        { x: 3, y: 2, color: Colour.White }, { x: 3, y: 4, color: Colour.White },
        { x: 4, y: 2, color: Colour.White }, { x: 4, y: 3, color: Colour.White },
        { x: 5, y: 2, color: Colour.White },
        { x: 6, y: 2, color: Colour.White },
    ];

    const letterR: IPixelState[] = [
        { x: 2, y: 9, color: Colour.White }, { x: 2, y: 10, color: Colour.White }, { x: 2, y: 11, color: Colour.White },
        { x: 3, y: 9, color: Colour.White }, { x: 3, y: 11, color: Colour.White },
        { x: 4, y: 9, color: Colour.White }, { x: 4, y: 10, color: Colour.White },
        { x: 5, y: 9, color: Colour.White },
        { x: 6, y: 9, color: Colour.White }, { x: 6, y: 11, color: Colour.White },
    ];

    const headphones: IPixelState[] = [
        { x: 9, y: 7, color: Colour.White }, { x: 9, y: 8, color: Colour.White }, { x: 9, y: 9, color: Colour.White },
        { x: 10, y: 6, color: Colour.White }, { x: 10, y: 10, color: Colour.White },
        { x: 11, y: 5, color: Colour.White }, { x: 11, y: 11, color: Colour.White },
        { x: 12, y: 5, color: Colour.White }, { x: 12, y: 11, color: Colour.White },
        { x: 13, y: 5, color: Colour.White }, { x: 13, y: 11, color: Colour.White },
    ];

    for (let frameNumber = 0; frameNumber < Constants.MaxTotalFrames; frameNumber++) {
        const pixels: IPixelState[] = [];

        const showP = frameNumber % 30 < 10;
        const showR = frameNumber % 30 >= 10 && frameNumber % 30 < 20;
        const showHeadphones = frameNumber % 30 >= 20;

        const slideInOffset = (frameNumber % 10) - 5;

        if (showP) {
            pixels.push(...letterP.map(pixel => ({ ...pixel, x: pixel.x + slideInOffset, color: Colour.White })));
        }
        if (showR) {
            pixels.push(...letterR.map(pixel => ({ ...pixel, x: pixel.x + slideInOffset, color: Colour.White })));
        }
        if (showHeadphones) {
            pixels.push(...headphones.map(pixel => ({ ...pixel, x: pixel.x - slideInOffset, color: Colour.White })));
        }

        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });
    }

    return frames;
}