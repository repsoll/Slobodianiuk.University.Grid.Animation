import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import { Colour } from '../../models/colour';
import IFrame from '../../models/frame';
import IPixelState from '../../models/pixel-state';


export class MariiaHusakConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Mariia Husak';
    }

    public getStudentEmail(): string {
        return 'husakmaria74@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Mariia',
            surname: 'Husak',
            email: this.getStudentEmail(),
            projectName: 'Google Calendar',
            personalProjectLink: 'https://marycalendar.azurewebsites.net',
            header: {
                frameNumber: 0,
                pixels: this.generateClockFrame(0),
            }, 
            frames: this.generateClockFrames()
        }
    }

    private generateClockFrames(): IFrame[] {
        const frames: IFrame[] = [];

        for (let frameNumber = 0; frameNumber < 3600; frameNumber++) { 
            const pixels: IPixelState[] = [];

            const hourAngle = 360 - ((frameNumber / 120) % 360); 
            const minuteAngle = 360 - ((frameNumber * 12) % 360); 

            const centerX = 7;
            const centerY = 7;
            const hourHandLength = 3;
            const minuteHandLength = 5;
            const circleRadius = 6; 

            for (let theta = 0; theta < 360; theta++) {
                const radians = theta * (Math.PI / 180);
                const x = Math.round(centerX + circleRadius * Math.cos(radians));
                const y = Math.round(centerY + circleRadius * Math.sin(radians));
                pixels.push({
                    x: x,
                    y: y,
                    color: Colour.White
                });
            }

            const hourHandEndX = Math.round(centerX + hourHandLength * Math.cos(this.degreesToRadians(hourAngle)));
            const hourHandEndY = Math.round(centerY + hourHandLength * Math.sin(this.degreesToRadians(hourAngle)));

            const minuteHandEndX = Math.round(centerX + minuteHandLength * Math.cos(this.degreesToRadians(minuteAngle)));
            const minuteHandEndY = Math.round(centerY + minuteHandLength * Math.sin(this.degreesToRadians(minuteAngle)));

            this.drawLine(centerX, centerY, hourHandEndX, hourHandEndY, pixels, Colour.White);
            this.drawLine(centerX, centerY, minuteHandEndX, minuteHandEndY, pixels, Colour.White);

            frames.push({
                frameNumber: frameNumber,
                pixels: pixels
            });
        }

        return frames;
    }

    private generateClockFrame(frameNumber: number): IPixelState[] {
        const pixels: IPixelState[] = [];

        const hourAngle = 360 - ((frameNumber / 120) % 360); 
        const minuteAngle = 360 - ((frameNumber * 12) % 360); 

        const centerX = 7;
        const centerY = 7;
        const hourHandLength = 3;
        const minuteHandLength = 5;
        const circleRadius = 6; 

        for (let theta = 0; theta < 360; theta++) {
            const radians = theta * (Math.PI / 180);
            const x = Math.round(centerX + circleRadius * Math.cos(radians));
            const y = Math.round(centerY + circleRadius * Math.sin(radians));
            pixels.push({
                x: x,
                y: y,
                color: Colour.White
            });
        }

        const hourHandEndX = Math.round(centerX + hourHandLength * Math.cos(this.degreesToRadians(hourAngle)));
        const hourHandEndY = Math.round(centerY + hourHandLength * Math.sin(this.degreesToRadians(hourAngle)));

        const minuteHandEndX = Math.round(centerX + minuteHandLength * Math.cos(this.degreesToRadians(minuteAngle)));
        const minuteHandEndY = Math.round(centerY + minuteHandLength * Math.sin(this.degreesToRadians(minuteAngle)));

        this.drawLine(centerX, centerY, hourHandEndX, hourHandEndY, pixels, Colour.White);
        this.drawLine(centerX, centerY, minuteHandEndX, minuteHandEndY, pixels, Colour.White);

        return pixels;
    }

    private degreesToRadians(degrees: number): number {
        return degrees * Math.PI / 180;
    }

    private drawLine(x1: number, y1: number, x2: number, y2: number, pixels: IPixelState[], color: Colour) {
        const dx = Math.abs(x2 - x1);
        const dy = Math.abs(y2 - y1);
        const sx = (x1 < x2) ? 1 : -1;
        const sy = (y1 < y2) ? 1 : -1;
        let err = dx - dy;

        while (true) {
            pixels.push({
                x: x1,
                y: y1,
                color: color
            });

            if ((x1 === x2) && (y1 === y2)) break;
            const e2 = 2 * err;
            if (e2 > -dy) { err -= dy; x1 += sx; }
            if (e2 < dx) { err += dx; y1 += sy; }
        }
    }
}
