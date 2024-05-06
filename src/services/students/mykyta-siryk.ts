import IAnimationConfig from "../../models/animation-config";
import { Colour } from '../../models/colour';
import IFrame from '../../models/frame';
import IPixelState from '../../models/pixel-state';
import { IConfigLoaderService } from "../config-loader-interface";


export class MykytaSirykConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Mykyta Siryk';
    }

    public getStudentEmail(): string {
        return 'nikitasirik2@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Mykyta',
            surname: 'Siryk',
            email: this.getStudentEmail(),
            projectName: 'Personal Finance Tracker',
            personalProjectLink: 'https://personal-finance-tracker-pft-client.azurewebsites.net/',
            header: {
                frameNumber: 0,
                pixels: this.generateSquareFrame(21).pixels,
            },
            frames: this.generateAnimationFrames()
        }
    }

    private generateLineFrame(frameNumber: number): IFrame {
        const pixels: IPixelState[] = [];
        const startY = 5;
        const startX = 0;
        const endX = frameNumber + 1;

        for (let x = startX; x < endX; x++) {
            pixels.push({ x, y: startY, color: Colour.White });
        }

        return { frameNumber, pixels };
    }

    private generateSquareFrame(frameNumber: number): IFrame {
        const pixels: IPixelState[] = [];
        const startX = 2;
        const startY = 2;
        const endX = (frameNumber + 1) / 2;
        const endY = (frameNumber + 1) / 2;

        for (let x = startX; x < endX; x++) {
            pixels.push({ x, y: startY, color: Colour.White });
            pixels.push({ x, y: endY - 1, color: Colour.White });
        }

        for (let y = startY; y < endY; y++) {
            pixels.push({ x: startX, y, color: Colour.White });
            pixels.push({ x: endX- 1, y, color: Colour.White });
        }

        return { frameNumber: frameNumber, pixels };
    }

    private generateAnimationFrames(): IFrame[] {
        const frames: IFrame[] = [];
        const totalSquareFrames = 10;
        const totalFramesNumber = 31;

        for (let i = 1; i < totalSquareFrames; i++) {
            frames.push(this.generateLineFrame(i));
        }
        for (let i = totalSquareFrames + 1; i < totalFramesNumber; i++) {
            frames.push(this.generateSquareFrame(i));
        }

        return frames;
    }
}
