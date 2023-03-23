import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class DenysVelychkoConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Denys Velychko';
    }

    public getStudentEmail(): string {
        return 'denusveluchko2017@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Denys',
            surname: 'Velychko',
            email: this.getStudentEmail(),
            projectName: 'Crab project',
            personalProjectLink: 'https://calorie-tracker1.azurewebsites.net',
            header: Header(0),
            frames: CrabFrames()
        }
    }
}
const Header = (frameNumber: number): IFrame => {
    let result: IFrame = {
        frameNumber: frameNumber,
        pixels: []
    };

    result.pixels.push(
        { x: 5, y: 4, color: Colour.White },{ x: 5, y: 5, color: Colour.White },{ x: 6, y: 4, color: Colour.White },{ x: 7, y: 4, color: Colour.White },{ x: 7, y: 5, color: Colour.White },{ x: 8, y: 4, color: Colour.White },{ x: 5, y: 13, color: Colour.White },
        { x: 5, y: 14, color: Colour.White },{ x: 6, y: 14, color: Colour.White },{ x: 7, y: 13, color: Colour.White },{ x: 7, y: 14, color: Colour.White },{ x: 8, y: 14, color: Colour.White },{ x: 8, y: 7, color: Colour.White },{ x: 8, y: 8, color: Colour.White },
        { x: 8, y: 9, color: Colour.White },{ x: 8, y: 10, color: Colour.White },{ x: 8, y: 11, color: Colour.White },{ x: 9, y: 4, color: Colour.White },{ x: 9, y: 5, color: Colour.White },{ x: 9, y: 6, color: Colour.White },{ x: 9, y: 7, color: Colour.White },
        { x: 9, y: 9, color: Colour.White },{ x: 9, y: 11, color: Colour.White },{ x: 9, y: 12, color: Colour.White }, { x: 9, y: 13, color: Colour.White },{ x: 9, y: 14, color: Colour.White },
        { x: 10, y: 5, color: Colour.White },{ x: 10, y: 6, color: Colour.White },{ x: 10, y: 7, color: Colour.White },{ x: 10, y: 8, color: Colour.White },{ x: 10, y: 9, color: Colour.White },{ x: 10, y: 10, color: Colour.White },{ x: 10, y: 11, color: Colour.White },
        { x: 10, y: 12, color: Colour.White },{ x: 10, y: 13, color: Colour.White },{ x: 11, y: 3, color: Colour.White },{ x: 11, y: 4, color: Colour.White },{ x: 11, y: 5, color: Colour.White },{ x: 11, y: 6, color: Colour.White },{ x: 11, y: 7, color: Colour.White },{ x: 11, y: 8, color: Colour.White },{ x: 11, y: 9, color: Colour.White }
        ,{ x: 11, y: 10, color: Colour.White },{ x: 11, y: 11, color: Colour.White },{ x: 11, y: 12, color: Colour.White },{ x: 11, y: 13, color: Colour.White },{ x: 11, y: 14, color: Colour.White },{ x: 11, y: 15, color: Colour.White },{ x: 12, y: 3, color: Colour.White },{ x: 12, y: 5, color: Colour.White }
        ,{ x: 12, y: 6, color: Colour.White },{ x: 12, y: 7, color: Colour.White },{ x: 12, y: 8, color: Colour.White },{ x: 12, y: 9, color: Colour.White },{ x: 12, y: 10, color: Colour.White },{ x: 12, y: 11, color: Colour.White },{ x: 12, y: 12, color: Colour.White },{ x: 12, y: 13, color: Colour.White }
        ,{ x: 12, y: 15, color: Colour.White },{ x: 13, y: 4, color: Colour.White },{ x: 13, y: 5, color: Colour.White },{ x: 13, y: 6, color: Colour.White },{ x: 13, y: 7, color: Colour.White },{ x: 13, y: 8, color: Colour.White },{ x: 13, y: 9, color: Colour.White },{ x: 13, y: 10, color: Colour.White }
        ,{ x: 13, y: 11, color: Colour.White },{ x: 13, y: 12, color: Colour.White },{ x: 13, y: 13, color: Colour.White },{ x: 13, y: 14, color: Colour.White },{ x: 14, y: 4, color: Colour.White },{ x: 14, y: 6, color: Colour.White }
        ,{ x: 14, y: 7, color: Colour.White },{ x: 14, y: 8, color: Colour.White },{ x: 14, y: 9, color: Colour.White },{ x: 14, y: 10, color: Colour.White },{ x: 14, y: 11, color: Colour.White },{ x: 14, y: 12, color: Colour.White },{ x: 14, y: 14, color: Colour.White }
        ,{ x: 15, y: 6, color: Colour.White },{ x: 15, y: 12, color: Colour.White }
        );
        
    return result;
}

function CrabFrames(): IFrame[] {
    const frames: IFrame[] = [];

    const Step: IPixelState[] = [
        { x: 5, y: 4, color: Colour.White },{ x: 5, y: 5, color: Colour.White },{ x: 6, y: 4, color: Colour.White },{ x: 7, y: 4, color: Colour.White },{ x: 7, y: 5, color: Colour.White },{ x: 8, y: 4, color: Colour.White },{ x: 5, y: 13, color: Colour.White },
        { x: 5, y: 14, color: Colour.White },{ x: 6, y: 14, color: Colour.White },{ x: 7, y: 13, color: Colour.White },{ x: 7, y: 14, color: Colour.White },{ x: 8, y: 14, color: Colour.White },{ x: 8, y: 7, color: Colour.White },{ x: 8, y: 8, color: Colour.White },
        { x: 8, y: 9, color: Colour.White },{ x: 8, y: 10, color: Colour.White },{ x: 8, y: 11, color: Colour.White },{ x: 9, y: 4, color: Colour.White },{ x: 9, y: 5, color: Colour.White },{ x: 9, y: 6, color: Colour.White },{ x: 9, y: 7, color: Colour.White },
        { x: 9, y: 9, color: Colour.White },{ x: 9, y: 11, color: Colour.White },{ x: 9, y: 12, color: Colour.White }, { x: 9, y: 13, color: Colour.White },{ x: 9, y: 14, color: Colour.White },
        { x: 10, y: 5, color: Colour.White },{ x: 10, y: 6, color: Colour.White },{ x: 10, y: 7, color: Colour.White },{ x: 10, y: 8, color: Colour.White },{ x: 10, y: 9, color: Colour.White },{ x: 10, y: 10, color: Colour.White },{ x: 10, y: 11, color: Colour.White },
        { x: 10, y: 12, color: Colour.White },{ x: 10, y: 13, color: Colour.White },{ x: 11, y: 3, color: Colour.White },{ x: 11, y: 4, color: Colour.White },{ x: 11, y: 5, color: Colour.White },{ x: 11, y: 6, color: Colour.White },{ x: 11, y: 7, color: Colour.White },{ x: 11, y: 8, color: Colour.White },{ x: 11, y: 9, color: Colour.White }
        ,{ x: 11, y: 10, color: Colour.White },{ x: 11, y: 11, color: Colour.White },{ x: 11, y: 12, color: Colour.White },{ x: 11, y: 13, color: Colour.White },{ x: 11, y: 14, color: Colour.White },{ x: 11, y: 15, color: Colour.White },{ x: 12, y: 3, color: Colour.White },{ x: 12, y: 5, color: Colour.White }
        ,{ x: 12, y: 6, color: Colour.White },{ x: 12, y: 7, color: Colour.White },{ x: 12, y: 8, color: Colour.White },{ x: 12, y: 9, color: Colour.White },{ x: 12, y: 10, color: Colour.White },{ x: 12, y: 11, color: Colour.White },{ x: 12, y: 12, color: Colour.White },{ x: 12, y: 13, color: Colour.White }
        ,{ x: 12, y: 15, color: Colour.White },{ x: 13, y: 4, color: Colour.White },{ x: 13, y: 5, color: Colour.White },{ x: 13, y: 6, color: Colour.White },{ x: 13, y: 7, color: Colour.White },{ x: 13, y: 8, color: Colour.White },{ x: 13, y: 9, color: Colour.White },{ x: 13, y: 10, color: Colour.White }
        ,{ x: 13, y: 11, color: Colour.White },{ x: 13, y: 12, color: Colour.White },{ x: 13, y: 13, color: Colour.White },{ x: 13, y: 14, color: Colour.White },{ x: 14, y: 4, color: Colour.White },{ x: 14, y: 6, color: Colour.White }
        ,{ x: 14, y: 7, color: Colour.White },{ x: 14, y: 8, color: Colour.White },{ x: 14, y: 9, color: Colour.White },{ x: 14, y: 10, color: Colour.White },{ x: 14, y: 11, color: Colour.White },{ x: 14, y: 12, color: Colour.White },{ x: 14, y: 14, color: Colour.White }
        ,{ x: 15, y: 6, color: Colour.White },{ x: 15, y: 12, color: Colour.White }];

    for (let frameNumber = 0; frameNumber < 35; frameNumber++) {
        const pixels: IPixelState[] = [];
        const ProjectAnim = frameNumber  +1;
        const CrabStep = frameNumber -15;
        
        if (ProjectAnim) {
            pixels.push(...Step.map(pixel => ({ ...pixel, y: pixel.y - CrabStep, color: Colour.White })));
        }

        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });
    }

    return frames;
    
}