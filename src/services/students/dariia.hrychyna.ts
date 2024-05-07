import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import { Colour } from '../../models/colour';
import IFrame from '../../models/frame';
import IPixelState from '../../models/pixel-state';


export class DariiaHrychynaConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Dariia Hrychyna';
    }

    public getStudentEmail(): string {
        return 'dariahrychyna@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Dariia',
            surname: 'Hrychyna',
            email: this.getStudentEmail(),
            projectName: 'Interactive Plant Care Assistant',
            personalProjectLink: 'https://interactiveplantcareassistant.azurewebsites.net/',
            header: {
                frameNumber: 0,
                pixels: [],
            }, 
            frames: this.generateFlowerFrames()
        }
    }

    private generateFlowerFrames(): IFrame[] {
        const frames: IFrame[] = [];

        for (let frameNumber = 0; frameNumber < 120; frameNumber++) { 
            const pixels: IPixelState[] = [];
            const centerX = 7;
            const centerY = 7;
            const petalRadius = 5;
            const circleRadius = 2; 
            const numPetals = 8;
            const angleIncrement = (2 * Math.PI) / numPetals;
            const appearingPercentage = frameNumber / 120;

            for (let theta = 0; theta < 2 * Math.PI; theta += 0.01) {
                let radius = petalRadius * appearingPercentage; 
                if ((theta % (2 * angleIncrement)) > angleIncrement) {
                    radius = circleRadius * appearingPercentage; 
                }
                const x = Math.round(centerX + radius * Math.cos(theta));
                const y = Math.round(centerY + radius * Math.sin(theta));
                pixels.push({
                    x: x,
                    y: y,
                    color: Colour.White
                });
            }

            frames.push({
                frameNumber: frameNumber,
                pixels: pixels
            });
        }

        return frames;
    }
}
