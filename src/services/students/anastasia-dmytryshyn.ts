import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import { Colour } from '../../models/colour';
import IFrame from '../../models/frame';
import IPixelState from '../../models/pixel-state';

export class AnastasiaDmytryshynConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Anastasia Dmytryshyn';
    }

    public getStudentEmail(): string {
        return 'nekleeva@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Anastasia',
            surname: 'Dmytryshyn',
            email: this.getStudentEmail(),
            projectName: 'Dendelion in the bloom',
            personalProjectLink: 'https://ebaymyproject.azurewebsites.net',
            header: {
                frameNumber: 0,
                pixels: this.generateBloomingPetal(0),
            }, 
            frames: this.generateBloomingFlowerFrames()
        }
    }

    
    private generateBloomingFlowerFrames(): IFrame[] {
        const frames: IFrame[] = [];
    
        for (let frameNumber = 0; frameNumber < 60; frameNumber++) {
            const petals: IPixelState[] = this.generateBloomingPetal(frameNumber);
            frames.push({
                frameNumber: frameNumber,
                pixels: petals
            });
        }
    
        return frames;
    }
    
    private generateBloomingPetal(angleOffset: number): IPixelState[] {
        const petals: IPixelState[] = [];
    
        const centerX = 7;
        const centerY = 7;
        const radius = 4;
    
        for (let petalNumber = 0; petalNumber < 6; petalNumber++) {
            const petalAngle = (petalNumber * 60 + angleOffset) % 360;
            const petalLength = 5 - Math.abs(angleOffset - 30) / 6; // Varying petal length for blooming effect
    
            for (let theta = 45; theta < 135; theta++) {
                const radians = (petalAngle + theta) * (Math.PI / 180);
                const x = Math.round(centerX + (radius + petalLength * Math.sin(theta * (Math.PI / 180))) * Math.cos(radians));
                const y = Math.round(centerY + (radius + petalLength * Math.sin(theta * (Math.PI / 180))) * Math.sin(radians));
    
                petals.push({
                    x: x,
                    y: y,
                    color: Colour.White 
                });
            }
        }
    
        return petals;
    }
} 