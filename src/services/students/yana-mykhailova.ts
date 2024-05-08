import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class YourConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Yana';
    }

    public getStudentEmail(): string {
        return 'yanamyh2005@example.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Yana',
            surname: 'Mykhailova',
            email: this.getStudentEmail(),
            projectName: 'Moving hand Project',
            personalProjectLink: 'https://your-project-link.com',
            header: createHeader(),
            frames: generateFrames()
        }
    }
}

function createHeader(): IFrame {
    const pixels: IPixelState[] = [
        { x: 4, y: 7, color: Colour.White },
        { x: 5, y: 7, color: Colour.White },
        { x: 6, y: 7, color: Colour.White },
        { x: 7, y: 7, color: Colour.White },
        { x: 8, y: 7, color: Colour.White },
        { x: 9, y: 7, color: Colour.White },
        { x: 10, y: 7, color: Colour.White },
        { x: 11, y: 7, color: Colour.White },
        { x: 12, y: 7, color: Colour.White },
        { x: 13, y: 7, color: Colour.White },
        { x: 14, y: 7, color: Colour.White },
        { x: 15, y: 7, color: Colour.White },
        { x: 4, y: 6, color: Colour.White },
        { x: 5, y: 6, color: Colour.White },
        { x: 6, y: 6, color: Colour.White },
        { x: 7, y: 5, color: Colour.White },
        { x: 8, y: 5, color: Colour.White },
        { x: 9, y: 5, color: Colour.White },
        { x: 10, y: 4, color: Colour.White },
        { x: 11, y: 4, color: Colour.White },
        { x: 12, y: 4, color: Colour.White },
        { x: 13, y: 5, color: Colour.White },
        { x: 14, y: 5, color: Colour.White },
        { x: 15, y: 5, color: Colour.White },
        { x: 15, y: 6, color: Colour.White },
        { x: 15, y: 6, color: Colour.White },
        { x: 15, y: 6, color: Colour.White },
        { x: 15, y: 6, color: Colour.White },
    ];

    return {
        frameNumber: 0,
        pixels: pixels,
    };
}

function generateFrames(): IFrame[] {
    const frames: IFrame[] = [];

    const initialHandPixels: IPixelState[] = createHeader().pixels;

    for (let frameNumber = 0; frameNumber < Constants.MaxTotalFrames; frameNumber++) {
        const pixels: IPixelState[] = [...initialHandPixels];

        pixels.forEach(pixel => {
            const rotated = rotatePixel(pixel, frameNumber);
            pixel.x = rotated.x;
            pixel.y = rotated.y;
        });

        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });
    }

    return frames;
}

function rotatePixel(pixel: IPixelState, frameNumber: number): IPixelState {
    const centerX = 12.5;
    const centerY = 7.5;

    const angle = (frameNumber * 2 * Math.PI) / Constants.MaxTotalFrames;

    const newX = Math.cos(angle) * (pixel.x - centerX) - Math.sin(angle) * (pixel.y - centerY) + centerX;
    const newY = Math.sin(angle) * (pixel.x - centerX) + Math.cos(angle) * (pixel.y - centerY) + centerY;

    return { x: Math.round(newX), y: Math.round(newY), color: pixel.color };
}
