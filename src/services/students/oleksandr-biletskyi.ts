import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import { Colour } from "../../models/colour";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";

export class OlesandrBiletskyiConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Oleksandr Bieltskyi';
    }

    public getStudentEmail(): string {
        return 'alexbiletskyi17@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Oleksandr',
            surname: 'Biletskyi',
            email: this.getStudentEmail(),
            projectName: 'Half-Line',
            personalProjectLink: 'https://music-app-proj.azurewebsites.net/home',
            header: showHeader(),
            frames: [...generateFlashFrames()]
        }
    }
}

function showHeader(): IFrame {
    const frame: IFrame = {
        frameNumber: 0,
        pixels: []
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

function generateFlashFrames(): IFrame[] {
    const frames: IFrame[] = [];

    // Iterate over each frame
    for (let frameNumber = 0; frameNumber < 32; frameNumber++) {
        const frame: IPixelState[] = [];

        // Iterate over each pixel in the frame
        for (let x = 0; x < 16; x++) {
            for (let y = 0; y < 16; y++) {
                // Calculate the position of the pixel based on the frame number
                const yPos = y - (frameNumber - x);

                // Add a white pixel to the frame if it's within bounds
                if (yPos >= 0 && yPos < 16) {
                    frame.push({ x, y: yPos, color: Colour.White });
                }
            }
        }

        // Add the generated frame to the array
        frames.push({ frameNumber, pixels: frame });
    }

    return frames;
}