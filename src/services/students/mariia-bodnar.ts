import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import { Colour } from '../../models/colour';
import IFrame from '../../models/frame';
import IPixelState from '../../models/pixel-state';

export class MariiaBodnarConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Mariia Bodnar';
    }

    public getStudentEmail(): string {
        return 'maria.r.bodnar@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Mariia',
            surname: 'Bodnar',
            email: this.getStudentEmail(),
            projectName: 'Miro Board',
            personalProjectLink: 'miroboard.azurewebsites.net',
            header: {
                frameNumber: 0,
                pixels: this.generateCoinFrame(0),
            },
            frames: this.generateCoinFrames()
        }
    }

    private generateCoinFrames(): IFrame[] {
        const frames: IFrame[] = [];
        const numFrames = 20;

        for (let frameNumber = 0; frameNumber < numFrames; frameNumber++) {
            frames.push({
                frameNumber: frameNumber,
                pixels: this.generateCoinFrame(frameNumber)
            });
        }

        return frames;
    }

    private generateCoinFrame(frameNumber: number): IPixelState[] {
        const pixels: IPixelState[] = [];


        const coinRadius = 8;
        const coinCenterX = Math.round((20 / 20) * frameNumber);
        const coinCenterY = 10;


        for (let y = 0; y <= 20; y++) {
            for (let x = 0; x <= 20; x++) {

                const distanceToCenter = Math.sqrt((x - coinCenterX) ** 2 + (y - coinCenterY) ** 2);


                if (Math.abs(distanceToCenter - coinRadius) <= 0.5) {
                    pixels.push({
                        x: x,
                        y: y,
                        color: Colour.White
                    });
                }
            }
        }

        // Draw the dollar sign in the middle of the coin
        const dollarSignCoordinates: { x: number, y: number }[] = [
            { x: -1, y: -1 }, { x: 0, y: -1 }, { x: 1, y: -1 },
            { x: -1, y: 0 }, { x: 1, y: 0 },
            { x: -1, y: 1 }, { x: 0, y: 1 }, { x: 1, y: 1 },
            { x: 0, y: -2 }, { x: 0, y: 2 }
        ];

        // Draw the dollar sign in white
        dollarSignCoordinates.forEach(coord => {
            pixels.push({
                x: coinCenterX + coord.x,
                y: coinCenterY + coord.y,
                color: Colour.White
            });
        });

        return pixels;
    }
}