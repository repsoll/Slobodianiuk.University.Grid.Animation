import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class YaroslavHolovkoConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Yaroslav Holovko';
    }

    public getStudentEmail(): string {
        return 'holovckouaroslav@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Yaroslav',
            surname: 'Holovko',
            email: this.getStudentEmail(),
            projectName: 'Good-Ride',
            personalProjectLink: 'https://cs-s-searchengine.azurewebsites.net', ///not valid yet, trying CI/CD
            header: createLogo(0),
            frames: createRoad()
        }
    }
}
function createRoad(): IFrame[] {
    const frames: IFrame[] = [];

    const firstFrame: IPixelState[] = [
        { x: 11, y: 0, color: Colour.White }, { x: 11, y: 1, color: Colour.White }, { x: 11, y: 2, color: Colour.White }, { x: 11, y: 3, color: Colour.White }, { x: 11, y: 4, color: Colour.White }, { x: 11, y: 5, color: Colour.White }, { x: 11, y: 6, color: Colour.White }, { x: 11, y: 7, color: Colour.White },
        { x: 11, y: 8, color: Colour.White }, { x: 11, y: 9, color: Colour.White }, { x: 11, y: 10, color: Colour.White }, { x: 11, y: 11, color: Colour.White }, { x: 11, y: 12, color: Colour.White }, { x: 11, y: 13, color: Colour.White }, 
        { x: 11, y: 14, color: Colour.White }, { x: 11, y: 15, color: Colour.White }, { x: 11, y: 16, color: Colour.White },
        { x: 9, y: 1, color: Colour.White }, { x: 9, y: 2, color: Colour.White }, { x: 9, y: 3, color: Colour.White }, { x: 9, y: 4, color: Colour.White }, { x: 9, y: 5, color: Colour.White }, { x: 9, y: 6, color: Colour.White },
        { x: 10, y: 5, color: Colour.White }, { x: 10, y: 2, color: Colour.White },
        { x: 4, y: 4, color: Colour.White }, { x: 4, y: 5, color: Colour.White }, { x: 4, y: 6, color: Colour.White }, { x: 4, y: 7, color: Colour.White }, { x: 4, y: 8, color: Colour.White },
        { x: 8, y: 2, color: Colour.White }, { x: 8, y: 5, color: Colour.White },
        { x: 7, y: 2, color: Colour.White }, { x: 7, y: 3, color: Colour.White }, { x: 7, y: 4, color: Colour.White }, { x: 7, y: 5, color: Colour.White },
        { x: 3, y: 5, color: Colour.White }, { x: 3, y: 6, color: Colour.White }, { x: 3, y: 12, color: Colour.White }, { x: 3, y: 13, color: Colour.White },
        { x: 4, y: 11, color: Colour.White }, { x: 4, y: 12, color: Colour.White }, { x: 4, y: 13, color: Colour.White }, { x: 4, y: 14, color: Colour.White },
    ];

    const secondFrame: IPixelState[] = [
        { x: 11, y: 0, color: Colour.White }, { x: 11, y: 1, color: Colour.White }, { x: 11, y: 2, color: Colour.White }, { x: 11, y: 3, color: Colour.White }, { x: 11, y: 4, color: Colour.White }, { x: 11, y: 5, color: Colour.White }, { x: 11, y: 6, color: Colour.White }, { x: 11, y: 7, color: Colour.White },
        { x: 11, y: 8, color: Colour.White }, { x: 11, y: 9, color: Colour.White }, { x: 11, y: 10, color: Colour.White }, { x: 11, y: 11, color: Colour.White }, { x: 11, y: 12, color: Colour.White }, { x: 11, y: 13, color: Colour.White },
        { x: 11, y: 14, color: Colour.White }, { x: 11, y: 15, color: Colour.White }, { x: 11, y: 16, color: Colour.White }, ///road(don`t change)

        { x: 9, y: 3, color: Colour.White }, { x: 9, y: 4, color: Colour.White }, { x: 9, y: 5, color: Colour.White }, { x: 9, y: 6, color: Colour.White }, { x: 9, y: 7, color: Colour.White }, { x: 9, y: 8, color: Colour.White }, ///car base

        { x: 10, y: 7, color: Colour.White }, { x: 10, y: 4, color: Colour.White },/// wheels

        { x: 8, y: 4, color: Colour.White }, { x: 8, y: 7, color: Colour.White }, ///roof base

        { x: 7, y: 4, color: Colour.White }, { x: 7, y: 5, color: Colour.White }, { x: 7, y: 6, color: Colour.White }, { x: 7, y: 7, color: Colour.White }, ///roof

        { x: 3, y: 4, color: Colour.White }, { x: 3, y: 5, color: Colour.White }, ///cloud top 1

        { x: 3, y: 11, color: Colour.White }, { x: 3, y: 12, color: Colour.White }, /// cloud top 2

        { x: 4, y: 10, color: Colour.White }, { x: 4, y: 11, color: Colour.White }, { x: 4, y: 12, color: Colour.White }, { x: 4, y: 13, color: Colour.White },  ///cloud base 2

        { x: 4, y: 3, color: Colour.White }, { x: 4, y: 4, color: Colour.White }, { x: 4, y: 5, color: Colour.White }, { x: 4, y: 6, color: Colour.White }, { x: 4, y: 7, color: Colour.White }, ///cloud top 1
    ];

    const thirdFrame: IPixelState[] = [
        { x: 11, y: 0, color: Colour.White }, { x: 11, y: 1, color: Colour.White }, { x: 11, y: 2, color: Colour.White }, { x: 11, y: 3, color: Colour.White }, { x: 11, y: 4, color: Colour.White }, { x: 11, y: 5, color: Colour.White }, { x: 11, y: 6, color: Colour.White }, { x: 11, y: 7, color: Colour.White },
        { x: 11, y: 8, color: Colour.White }, { x: 11, y: 9, color: Colour.White }, { x: 11, y: 10, color: Colour.White }, { x: 11, y: 11, color: Colour.White }, { x: 11, y: 12, color: Colour.White }, { x: 11, y: 13, color: Colour.White },
        { x: 11, y: 14, color: Colour.White }, { x: 11, y: 15, color: Colour.White }, { x: 11, y: 16, color: Colour.White }, ///road(don`t change)

        { x: 9, y: 5, color: Colour.White }, { x: 9, y: 6, color: Colour.White }, { x: 9, y: 7, color: Colour.White }, { x: 9, y: 8, color: Colour.White }, { x: 9, y: 9, color: Colour.White }, { x: 9, y:10, color: Colour.White }, ///car base

        { x: 10, y: 9, color: Colour.White }, { x: 10, y: 6, color: Colour.White },/// wheels

        { x: 8, y: 6, color: Colour.White }, { x: 8, y: 9, color: Colour.White }, ///roof base

        { x: 7, y: 6, color: Colour.White }, { x: 7, y: 7, color: Colour.White }, { x: 7, y: 8, color: Colour.White }, { x: 7, y: 9, color: Colour.White }, ///roof

        { x: 3, y: 3, color: Colour.White }, { x: 3, y: 4, color: Colour.White }, ///cloud top 1

        { x: 3, y: 10, color: Colour.White }, { x: 3, y: 11, color: Colour.White }, /// cloud top 2

        { x: 4, y: 9, color: Colour.White }, { x: 4, y: 10, color: Colour.White }, { x: 4, y: 11, color: Colour.White }, { x: 4, y: 12, color: Colour.White },  ///cloud base 2

        { x: 4, y: 2, color: Colour.White }, { x: 4, y: 3, color: Colour.White }, { x: 4, y: 4, color: Colour.White }, { x: 4, y: 5, color: Colour.White }, { x: 4, y: 6, color: Colour.White }, ///cloud top 1
    ];

    const fourFrame: IPixelState[] = [
        { x: 11, y: 0, color: Colour.White }, { x: 11, y: 1, color: Colour.White }, { x: 11, y: 2, color: Colour.White }, { x: 11, y: 3, color: Colour.White }, { x: 11, y: 4, color: Colour.White }, { x: 11, y: 5, color: Colour.White }, { x: 11, y: 6, color: Colour.White }, { x: 11, y: 7, color: Colour.White },
        { x: 11, y: 8, color: Colour.White }, { x: 11, y: 9, color: Colour.White }, { x: 11, y: 10, color: Colour.White }, { x: 11, y: 11, color: Colour.White }, { x: 11, y: 12, color: Colour.White }, { x: 11, y: 13, color: Colour.White },
        { x: 11, y: 14, color: Colour.White }, { x: 11, y: 15, color: Colour.White }, { x: 11, y: 16, color: Colour.White }, ///road(don`t change)

        { x: 9, y: 7, color: Colour.White }, { x: 9, y: 8, color: Colour.White }, { x: 9, y: 9, color: Colour.White }, { x: 9, y: 10, color: Colour.White }, { x: 9, y: 11, color: Colour.White }, { x: 9, y: 12, color: Colour.White }, ///car base

        { x: 10, y: 11, color: Colour.White }, { x: 10, y: 8, color: Colour.White },/// wheels

        { x: 8, y: 8, color: Colour.White }, { x: 8, y: 11, color: Colour.White }, ///roof base

        { x: 7, y: 8, color: Colour.White }, { x: 7, y: 9, color: Colour.White }, { x: 7, y: 10, color: Colour.White }, { x: 7, y: 11, color: Colour.White }, ///roof

        { x: 3, y: 2, color: Colour.White }, { x: 3, y: 3, color: Colour.White }, ///cloud top 1

        { x: 3, y: 9, color: Colour.White }, { x: 3, y: 10, color: Colour.White }, /// cloud top 2

        { x: 4, y: 8, color: Colour.White }, { x: 4, y: 9, color: Colour.White }, { x: 4, y: 10, color: Colour.White }, { x: 4, y: 11, color: Colour.White },  ///cloud base 2

        { x: 4, y: 1, color: Colour.White }, { x: 4, y: 2, color: Colour.White }, { x: 4, y: 3, color: Colour.White }, { x: 4, y: 4, color: Colour.White }, { x: 4, y: 5, color: Colour.White }, ///cloud top 1
    ];

    const fiveFrame: IPixelState[] = [
        { x: 11, y: 0, color: Colour.White }, { x: 11, y: 1, color: Colour.White }, { x: 11, y: 2, color: Colour.White }, { x: 11, y: 3, color: Colour.White }, { x: 11, y: 4, color: Colour.White }, { x: 11, y: 5, color: Colour.White }, { x: 11, y: 6, color: Colour.White }, { x: 11, y: 7, color: Colour.White },
        { x: 11, y: 8, color: Colour.White }, { x: 11, y: 9, color: Colour.White }, { x: 11, y: 10, color: Colour.White }, { x: 11, y: 11, color: Colour.White }, { x: 11, y: 12, color: Colour.White }, { x: 11, y: 13, color: Colour.White },
        { x: 11, y: 14, color: Colour.White }, { x: 11, y: 15, color: Colour.White }, { x: 11, y: 16, color: Colour.White }, ///road(don`t change)

        { x: 9, y: 9, color: Colour.White }, { x: 9, y: 10, color: Colour.White }, { x: 9, y: 11, color: Colour.White }, { x: 9, y: 12, color: Colour.White }, { x: 9, y: 13, color: Colour.White }, { x: 9, y: 14, color: Colour.White }, ///car base

        { x: 10, y: 13, color: Colour.White }, { x: 10, y: 10, color: Colour.White },/// wheels

        { x: 8, y: 10, color: Colour.White }, { x: 8, y: 13, color: Colour.White }, ///roof base

        { x: 7, y: 10, color: Colour.White }, { x: 7, y: 11, color: Colour.White }, { x: 7, y: 12, color: Colour.White }, { x: 7, y: 13, color: Colour.White }, ///roof

        { x: 3, y: 1, color: Colour.White }, { x: 3, y: 2, color: Colour.White }, ///cloud top 1

        { x: 3, y: 8, color: Colour.White }, { x: 3, y: 9, color: Colour.White }, /// cloud top 2

        { x: 4, y: 7, color: Colour.White }, { x: 4, y: 8, color: Colour.White }, { x: 4, y: 9, color: Colour.White }, { x: 4, y: 10, color: Colour.White },  ///cloud base 2

        { x: 4, y: 0, color: Colour.White }, { x: 4, y: 1, color: Colour.White }, { x: 4, y: 2, color: Colour.White }, { x: 4, y: 3, color: Colour.White }, { x: 4, y: 4, color: Colour.White }, ///cloud top 1
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

const createLogo = (frameNumber: number): IFrame => {
    let result: IFrame = {
        frameNumber: frameNumber,
        pixels: []
    };

    result.pixels.push(
        { x: 11, y: 0, color: Colour.White }, { x: 11, y: 1, color: Colour.White }, { x: 11, y: 2, color: Colour.White }, { x: 11, y: 3, color: Colour.White }, { x: 11, y: 4, color: Colour.White }, { x: 11, y: 5, color: Colour.White }, { x: 11, y: 6, color: Colour.White }, { x: 11, y: 7, color: Colour.White },
        { x: 11, y: 8, color: Colour.White }, { x: 11, y: 9, color: Colour.White }, { x: 11, y: 10, color: Colour.White }, { x: 11, y: 11, color: Colour.White }, { x: 11, y: 12, color: Colour.White }, { x: 11, y: 13, color: Colour.White },
        { x: 11, y: 14, color: Colour.White }, { x: 11, y: 15, color: Colour.White }, { x: 11, y: 16, color: Colour.White },
        { x: 9, y: 1, color: Colour.White }, { x: 9, y: 2, color: Colour.White }, { x: 9, y: 3, color: Colour.White }, { x: 9, y: 4, color: Colour.White }, { x: 9, y: 5, color: Colour.White }, { x: 9, y: 6, color: Colour.White },
        { x: 10, y: 5, color: Colour.White }, { x: 10, y: 2, color: Colour.White },
        { x: 4, y: 4, color: Colour.White }, { x: 4, y: 5, color: Colour.White }, { x: 4, y: 6, color: Colour.White }, { x: 4, y: 7, color: Colour.White }, { x: 4, y: 8, color: Colour.White },
        { x: 8, y: 2, color: Colour.White }, { x: 8, y: 5, color: Colour.White },
        { x: 7, y: 2, color: Colour.White }, { x: 7, y: 3, color: Colour.White }, { x: 7, y: 4, color: Colour.White }, { x: 7, y: 5, color: Colour.White },
        { x: 3, y: 5, color: Colour.White }, { x: 3, y: 6, color: Colour.White }, { x: 3, y: 12, color: Colour.White }, { x: 3, y: 13, color: Colour.White },
        { x: 4, y: 11, color: Colour.White }, { x: 4, y: 12, color: Colour.White }, { x: 4, y: 13, color: Colour.White }, { x: 4, y: 14, color: Colour.White },
    );

    return result;
}
