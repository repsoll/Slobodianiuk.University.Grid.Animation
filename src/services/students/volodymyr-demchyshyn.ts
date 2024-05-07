import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import { Colour } from '../../models/colour';
import IFrame from '../../models/frame';
import IPixelState from '../../models/pixel-state';
import Constants from "../../constants/constants";

export class VolodymyrDemchyshynConfigLoaderService implements IConfigLoaderService {
    private readonly euroLogoWidth = 10;
    private readonly euroLogoHeight = 10;

    public getStudentName(): string {
        return 'Volodymyr Demchyshyn';
    }

    public getStudentEmail(): string {
        return 'volodymyr.demchyshyn@lnu.edu.ua';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Volodymyr',
            surname: 'Demchyshyn',
            email: this.getStudentEmail(),
            projectName: 'BinanceXchange',
            personalProjectLink: 'https://binancexchange.azurewebsites.net',
            header: DollarHeader(),
            frames: generateDollarFrames(),
        }
    }
}
function DollarHeader(): IFrame {
    const pixels: IPixelState[] = [
        { x: 1, y: 4, color: Colour.White },
        { x: 1, y: 5, color: Colour.White },
        { x: 1, y: 6, color: Colour.White },
        { x: 1, y: 7, color: Colour.White },
        { x: 1, y: 8, color: Colour.White },
        { x: 1, y: 9, color: Colour.White },
        { x: 1, y: 10, color: Colour.White },
        { x: 1, y: 11, color: Colour.White },

        { x: 2, y: 3, color: Colour.White },
        { x: 2, y: 4, color: Colour.White },
        { x: 2, y: 5, color: Colour.White },
        { x: 2, y: 6, color: Colour.White },
        { x: 2, y: 7, color: Colour.White },
        { x: 2, y: 8, color: Colour.White },
        { x: 2, y: 9, color: Colour.White },
        { x: 2, y: 10, color: Colour.White },
        { x: 2, y: 11, color: Colour.White },
        { x: 2, y: 12, color: Colour.White },


        { x: 3, y: 2, color: Colour.White },
        { x: 3, y: 7, color: Colour.White },
        { x: 3, y: 8, color: Colour.White },
        { x: 3, y: 13, color: Colour.White },


        { x: 4, y: 1, color: Colour.White },
        { x: 4, y: 2, color: Colour.White },
        { x: 4, y: 7, color: Colour.White },
        { x: 4, y: 8, color: Colour.White },
        { x: 4, y: 13, color: Colour.White },
        { x: 4, y: 14, color: Colour.White },

        { x: 5, y: 1, color: Colour.White },
        { x: 5, y: 2, color: Colour.White },
        { x: 5, y: 7, color: Colour.White },
        { x: 5, y: 8, color: Colour.White },
        { x: 5, y: 13, color: Colour.White },
        { x: 5, y: 14, color: Colour.White },


        { x: 6, y: 2, color: Colour.White },
        { x: 6, y: 7, color: Colour.White },
        { x: 6, y: 8, color: Colour.White },

        { x: 7, y: 3, color: Colour.White },
        { x: 7, y: 4, color: Colour.White },
        { x: 7, y: 5, color: Colour.White },
        { x: 7, y: 6, color: Colour.White },
        { x: 7, y: 7, color: Colour.White },
        { x: 7, y: 8, color: Colour.White },
        { x: 7, y: 9, color: Colour.White },
        { x: 7, y: 10, color: Colour.White },
        { x: 7, y: 11, color: Colour.White },

        { x: 8, y: 4, color: Colour.White },
        { x: 8, y: 5, color: Colour.White },
        { x: 8, y: 6, color: Colour.White },
        { x: 8, y: 7, color: Colour.White },
        { x: 8, y: 8, color: Colour.White },
        { x: 8, y: 9, color: Colour.White },
        { x: 8, y: 10, color: Colour.White },
        { x: 8, y: 11, color: Colour.White },
        { x: 8, y: 12, color: Colour.White },


        { x: 9, y: 7, color: Colour.White },
        { x: 9, y: 8, color: Colour.White },
        { x: 9, y: 13, color: Colour.White },


        { x: 10, y: 1, color: Colour.White },
        { x: 10, y: 2, color: Colour.White },
        { x: 10, y: 7, color: Colour.White },
        { x: 10, y: 8, color: Colour.White },
        { x: 10, y: 13, color: Colour.White },
        { x: 10, y: 14, color: Colour.White },

        { x: 11, y: 1, color: Colour.White },
        { x: 11, y: 2, color: Colour.White },
        { x: 11, y: 7, color: Colour.White },
        { x: 11, y: 8, color: Colour.White },
        { x: 11, y: 13, color: Colour.White },
        { x: 11, y: 14, color: Colour.White },


        { x: 12, y: 2, color: Colour.White },
        { x: 12, y: 7, color: Colour.White },
        { x: 12, y: 8, color: Colour.White },
        { x: 12, y: 13, color: Colour.White },


        { x: 13, y: 3, color: Colour.White },
        { x: 13, y: 4, color: Colour.White },
        { x: 13, y: 5, color: Colour.White },
        { x: 13, y: 6, color: Colour.White },
        { x: 13, y: 7, color: Colour.White },
        { x: 13, y: 8, color: Colour.White },
        { x: 13, y: 9, color: Colour.White },
        { x: 13, y: 10, color: Colour.White },
        { x: 13, y: 11, color: Colour.White },
        { x: 13, y: 12, color: Colour.White },

        { x: 14, y: 4, color: Colour.White },
        { x: 14, y: 5, color: Colour.White },
        { x: 14, y: 6, color: Colour.White },
        { x: 14, y: 7, color: Colour.White },
        { x: 14, y: 8, color: Colour.White },
        { x: 14, y: 9, color: Colour.White },
        { x: 14, y: 10, color: Colour.White },
        { x: 14, y: 11, color: Colour.White },


    ];

    return {
        frameNumber: 0,
        pixels: pixels,
    };
}

function generateDollarFrames(): IFrame[] {
    const frames: IFrame[] = [];

    const originalPixels: IPixelState[] = DollarHeader().pixels;

    const degreesPerFrame = -2;

    for (let frameNumber = 0; frameNumber < Constants.MaxTotalFrames; frameNumber++) {
        const pixels: IPixelState[] = [];
        const showFlower = frameNumber % 30 < 30;


        for (const pixel of originalPixels) {
            const rotatedPixel = rotatePixel(pixel, degreesPerFrame * frameNumber);
            pixels.push(rotatedPixel);
        }

        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });
    }

    return frames;
}

function rotatePixel(pixel: IPixelState, degrees: number): IPixelState {
    const centerX = 8;
    const centerY = 8;

    const radians = degrees * (Math.PI / 180);

    const newX =
        centerX +
        (pixel.x - centerX) * Math.cos(radians) -
        (pixel.y - centerY) * Math.sin(radians);
    const newY =
        centerY +
        (pixel.x - centerX) * Math.sin(radians) +
        (pixel.y - centerY) * Math.cos(radians);

    const roundedX = Math.round(newX);
    const roundedY = Math.round(newY);

    return { ...pixel, x: roundedX, y: roundedY };
}
