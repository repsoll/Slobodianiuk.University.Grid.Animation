import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class KoarizVolodymyrConfigLoaderService implements IConfigLoaderService {
    public getStudentName(): string {
        return "Volodymyr Kozariz";
    }

    public getStudentEmail(): string {
        return "dovakin746@gmail.com";
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: "Kozariz",
            surname: "Volodymyr",
            email: this.getStudentEmail(),
            projectName: "Edelveis",
            personalProjectLink: "https://edelveis.azurewebsites.net/",
            header: createEdelveisHeader(),
            frames: generateEdelveisFrames(),
        };
    }
}

function createEdelveisHeader(): IFrame {
    const pixels: IPixelState[] = [
        { x: 8, y: 1, color: Colour.White },
        { x: 9, y: 1, color: Colour.White },
        { x: 9, y: 2, color: Colour.White },
        { x: 10, y: 2, color: Colour.White },
        { x: 10, y: 3, color: Colour.White },
        { x: 11, y: 3, color: Colour.White },
        { x: 10, y: 4, color: Colour.White },
        { x: 11, y: 4, color: Colour.White },
        { x: 12, y: 4, color: Colour.White },
        { x: 4, y: 4, color: Colour.White },
        { x: 3, y: 5, color: Colour.White },
        { x: 4, y: 5, color: Colour.White },
        { x: 5, y: 5, color: Colour.White },
        { x: 9, y: 5, color: Colour.White },
        { x: 10, y: 5, color: Colour.White },
        { x: 11, y: 5, color: Colour.White },
        { x: 2, y: 6, color: Colour.White },
        { x: 3, y: 6, color: Colour.White },
        { x: 4, y: 6, color: Colour.White },
        { x: 5, y: 6, color: Colour.White },
        { x: 6, y: 6, color: Colour.White },
        { x: 7, y: 6, color: Colour.White },
        { x: 8, y: 6, color: Colour.White },
        { x: 9, y: 6, color: Colour.White },
        { x: 10, y: 6, color: Colour.White },
        { x: 1, y: 7, color: Colour.White },
        { x: 2, y: 7, color: Colour.White },
        { x: 5, y: 7, color: Colour.White },
        { x: 6, y: 7, color: Colour.White },
        { x: 7, y: 7, color: Colour.White },
        { x: 9, y: 7, color: Colour.White },
        { x: 10, y: 7, color: Colour.White },
        { x: 11, y: 7, color: Colour.White },
        { x: 12, y: 7, color: Colour.White },
        { x: 14, y: 7, color: Colour.White },
        { x: 1, y: 8, color: Colour.White },
        { x: 6, y: 8, color: Colour.White },
        { x: 10, y: 8, color: Colour.White },
        { x: 13, y: 8, color: Colour.White },
        { x: 16, y: 8, color: Colour.White },
        { x: 6, y: 9, color: Colour.White },
        { x: 6, y: 9, color: Colour.White },
        { x: 7, y: 9, color: Colour.White },
        { x: 9, y: 9, color: Colour.White },
        { x: 10, y: 9, color: Colour.White },
        { x: 16, y: 9, color: Colour.White },
        { x: 15, y: 9, color: Colour.White },
        { x: 6, y: 10, color: Colour.White },
        { x: 5, y: 10, color: Colour.White },
        { x: 7, y: 10, color: Colour.White },
        { x: 8, y: 10, color: Colour.White },
        { x: 9, y: 10, color: Colour.White },
        { x: 10, y: 10, color: Colour.White },
        { x: 12, y: 10, color: Colour.White },
        { x: 13, y: 10, color: Colour.White },
        { x: 14, y: 10, color: Colour.White },
        { x: 6, y: 11, color: Colour.White },
        { x: 5, y: 11, color: Colour.White },
        { x: 7, y: 11, color: Colour.White },
        { x: 8, y: 11, color: Colour.White },
        { x: 9, y: 11, color: Colour.White },
        { x: 10, y: 11, color: Colour.White },
        { x: 11, y: 11, color: Colour.White },
        { x: 12, y: 11, color: Colour.White },
        { x: 13, y: 11, color: Colour.White },
        { x: 14, y: 11, color: Colour.White },
        { x: 4, y: 12, color: Colour.White },
        { x: 5, y: 12, color: Colour.White },
        { x: 6, y: 12, color: Colour.White },
        { x: 10, y: 12, color: Colour.White },
        { x: 11, y: 12, color: Colour.White },
        { x: 12, y: 12, color: Colour.White },
        { x: 5, y: 13, color: Colour.White },
        { x: 6, y: 13, color: Colour.White },
        { x: 6, y: 14, color: Colour.White },
        { x: 8, y: 14, color: Colour.White },
        { x: 7, y: 14, color: Colour.White },
        { x: 7, y: 15, color: Colour.White },
        { x: 6, y: 15, color: Colour.White },
        { x: 7, y: 16, color: Colour.White },
        { x: 8, y: 16, color: Colour.White },

    ];

    return {
        frameNumber: 0,
        pixels: pixels,
    };
}

function generateEdelveisFrames(): IFrame[] {
    const frames: IFrame[] = [];

    const originalPixels: IPixelState[] = createEdelveisHeader().pixels;

    const degreesPerFrame = 10;

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
