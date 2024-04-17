import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import { Colour } from '../../models/colour';
import IFrame from '../../models/frame';
import IPixelState from '../../models/pixel-state';

export class VictoriaKondratskaConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Victoria "Vitya" Kondratska';
    }

    public getStudentEmail(): string {
        return 'kondratskayavictoria@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Victoria',
            surname: 'Kondratska',
            email: this.getStudentEmail(),
            projectName: 'Airplane Learning',
            personalProjectLink: 'https://airplanelearning.azurewebsites.net',
            header: {
                frameNumber: 0,
                pixels: this.generateLoadingCircleFrame(0),
            }, 
            frames: this.generateLoadingCircleFrames()
        }
    }

    private generateLoadingCircleFrames(): IFrame[] {
        const frames: IFrame[] = [];

        for (let frameNumber = 0; frameNumber < 120; frameNumber++) {
            const pixels: IPixelState[] = [];

            const angle = (frameNumber * 3) % 360;

            const centerX = 7;
            const centerY = 7;
            const radius = 4;

            for (let theta = 0; theta < 360; theta++) {
                const radians = theta * (Math.PI / 180);
                const x = Math.round(centerX + radius * Math.cos(radians));
                const y = Math.round(centerY + radius * Math.sin(radians));

                pixels.push({
                    x: x,
                    y: y,
                    color: Colour.White
                });
            }

            pixels.forEach(pixel => {
                const rotated = this.rotatePoint(pixel.x - centerX, pixel.y - centerY, 0, 0, angle);
                pixel.x = rotated.x + centerX;
                pixel.y = rotated.y + centerY; 
            });

            frames.push({
                frameNumber: frameNumber,
                pixels: pixels
            });
        }

        return frames;
    }

    private generateLoadingCircleFrame(frameNumber: number): IPixelState[] {
        const pixels: IPixelState[] = [];

        const angle = (frameNumber * 3) % 360; 

        const centerX = 7; 
        const centerY = 7;
        const radius = 4;

        for (let theta = 0; theta < 360; theta++) {
            const radians = theta * (Math.PI / 180);
            const x = Math.round(centerX + radius * Math.cos(radians));
            const y = Math.round(centerY + radius * Math.sin(radians));

            pixels.push({
                x: x,
                y: y,
                color: Colour.White
            });
        }

        pixels.forEach(pixel => {
            const rotated = this.rotatePoint(pixel.x - centerX, pixel.y - centerY, 0, 0, angle);
            pixel.x = rotated.x + centerX; 
            pixel.y = rotated.y + centerY;
        });

        return pixels;
    }

    private rotatePoint(x: number, y: number, centerX: number, centerY: number, angle: number): { x: number, y: number } {
        const radians = angle * (Math.PI / 180);
        const newX = Math.round((x - centerX) * Math.cos(radians) - (y - centerY) * Math.sin(radians) + centerX);
        const newY = Math.round((x - centerX) * Math.sin(radians) + (y - centerY) * Math.cos(radians) + centerY);

        return { x: newX, y: newY };
    }
}
