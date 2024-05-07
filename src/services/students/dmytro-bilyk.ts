import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class DmytroBilykConfigLoaderService implements IConfigLoaderService {
    private FRAMES_COUNT: number = 30;
    private MEDITATION_PIXEL_STATES: IPixelState[] = this.GenerateMeditationPixelStates();

    public getStudentName(): string {
        return 'Dmytro Bilyk';
    }

    public getStudentEmail(): string {
        return 'dmbilyk3861@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Dmytro',
            surname: 'Bilyk',
            email: this.getStudentEmail(),
            projectName: 'Meditation',
            personalProjectLink: 'https://calm-connections.azurewebsites.net/',
            header: this.generateHeaderFrame(),
            frames: this.generateFrames(),
        };
    }

    private generateFrames(): IFrame[] {
        return Array.from({length: this.FRAMES_COUNT}, (_, frameNumber) => {
            const angle = (frameNumber / this.FRAMES_COUNT) * 2 * Math.PI;
            const pixels = this.MEDITATION_PIXEL_STATES.map(state => this.rotatePixel(state, angle));
            return { frameNumber, pixels };
        });
    }

    private generateHeaderFrame(): IFrame {
        return { frameNumber: 1, pixels: this.MEDITATION_PIXEL_STATES };
    }

    private rotatePixel(state: IPixelState, angle: number): IPixelState {
        const centerX = 6;
        const centerY = 8;
        let {x, y, color} = state;
        x -= centerX;
        y -= centerY;
        const newX = x * Math.cos(angle) - y * Math.sin(angle);
        const newY = x * Math.sin(angle) + y * Math.cos(angle);
        return { x: Math.round(newX + centerX), y: Math.round(newY + centerY), color };
    }


    private GenerateMeditationPixelStates(): IPixelState[] {
        return [
        {'x': 1, 'y': 6, 'color': Colour.White},
        {'x': 1, 'y': 7, 'color': Colour.White},
        {'x': 1, 'y': 8, 'color': Colour.White},
        {'x': 1, 'y': 9, 'color': Colour.White},
        {'x': 2, 'y': 5, 'color': Colour.White},
        {'x': 3, 'y': 4, 'color': Colour.White},
        {'x': 3, 'y': 7, 'color': Colour.White},
        {'x': 4, 'y': 3, 'color': Colour.White},
        {'x': 4, 'y': 6, 'color': Colour.White},
        {'x': 4, 'y': 7, 'color': Colour.White},
        {'x': 5, 'y': 6, 'color': Colour.White},
        {'x': 5, 'y': 3, 'color': Colour.White},
        {'x': 6, 'y': 3, 'color': Colour.White},
        {'x': 7, 'y': 3, 'color': Colour.White},
        {'x': 8, 'y': 4, 'color': Colour.White},
        {'x': 8, 'y': 5, 'color': Colour.White},
        {'x': 8, 'y': 6, 'color': Colour.White},
        {'x': 8, 'y': 7, 'color': Colour.White},
        {'x': 8, 'y': 8, 'color': Colour.White},
        {'x': 9, 'y': 6, 'color': Colour.White},
        {'x': 9, 'y': 7, 'color': Colour.White},
        {'x': 9, 'y': 8, 'color': Colour.White},
        {'x': 9, 'y': 9, 'color': Colour.White},
        {'x': 9, 'y': 10, 'color': Colour.White},
        {'x': 9, 'y': 11, 'color': Colour.White},
        {'x': 10, 'y': 7, 'color': Colour.White},
        {'x': 10, 'y': 8, 'color': Colour.White},
        {'x': 10, 'y': 9, 'color': Colour.White},
        {'x': 10, 'y': 10, 'color': Colour.White},


        {'x': 8, 'y': 10, 'color': Colour.White},
        {'x': 8, 'y': 11, 'color': Colour.White},
        {'x': 8, 'y': 12, 'color': Colour.White},
        {'x': 7, 'y': 11, 'color': Colour.White},
        {'x': 7, 'y': 12, 'color': Colour.White},
        {'x': 7, 'y': 13, 'color': Colour.White},
        {'x': 7, 'y': 7, 'color': Colour.White},
        {'x': 7, 'y': 8, 'color': Colour.White},
        {'x': 6, 'y': 11, 'color': Colour.White},
        {'x': 6, 'y': 12, 'color': Colour.White},
        {'x': 6, 'y': 13, 'color': Colour.White},
        {'x': 6, 'y': 8, 'color': Colour.White},
        {'x': 6, 'y': 9, 'color': Colour.White},
        {'x': 5, 'y': 9, 'color': Colour.White},
        {'x': 5, 'y': 10, 'color': Colour.White},
        {'x': 5, 'y': 11, 'color': Colour.White},
        {'x': 5, 'y': 12, 'color': Colour.White},
        {'x': 5, 'y': 13, 'color': Colour.White},
        {'x': 4, 'y': 10, 'color': Colour.White},
        {'x': 4, 'y': 11, 'color': Colour.White},
        {'x': 4, 'y': 12, 'color': Colour.White},
        {'x': 4, 'y': 13, 'color': Colour.White},
        {'x': 3, 'y': 11, 'color': Colour.White},
        {'x': 3, 'y': 12, 'color': Colour.White},
        {'x': 2, 'y': 10, 'color': Colour.White},

        ];
    }
}





