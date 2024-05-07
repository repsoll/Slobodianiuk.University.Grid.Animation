import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import { Colour } from '../../models/colour';
import IFrame from '../../models/frame';
import IPixelState from '../../models/pixel-state';

export class NikitaPashchukConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Nikita Pashchuk';
    }

    public getStudentEmail(): string {
        return 'pashchuknik@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Nikita',
            surname: 'Pashchuk',
            email: this.getStudentEmail(),
            projectName: 'City Voting Platform',
            personalProjectLink: 'https://cityvoting.azurewebsites.net',
            header: {
                frameNumber: 0,
                pixels: this.generateCityFrame(0),
            }, 
            frames: this.generateCityFrames()
        }
    }

    private generateCityFrames(): IFrame[] {
        const frames: IFrame[] = [];
        const totalFrames = 120;

        for (let frameNumber = 0; frameNumber < totalFrames; frameNumber++) {
            frames.push({
                frameNumber: frameNumber,
                pixels: this.generateCityFrame(frameNumber)
            });
        }

        return frames;
    }

    private generateCityFrame(frameNumber: number): IPixelState[] {
        const pixels: IPixelState[] = [];
        const buildingWidth = 3;
        const buildingHeights = [7, 9, 8, 10, 6, 8];
        const buildingCount = buildingHeights.length;
        const cycleLength = buildingCount * (buildingWidth + 1);

        const xOffset = frameNumber % cycleLength;

        for (let i = 0; i < buildingHeights.length; i++) {
            const buildingHeight = buildingHeights[i];

            for (let h = 0; h < buildingHeight; h++) {
                for (let w = 0; w < buildingWidth; w++) {
                        pixels.push({
                            x: 15 - h,
                            y: (i * (buildingWidth + 1) + w + xOffset) % 16,
                            color: Colour.White
                        });
                    }
                }
            }
            return pixels;
        }
    }
