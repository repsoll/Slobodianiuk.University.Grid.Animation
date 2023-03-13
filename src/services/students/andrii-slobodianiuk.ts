import { Colour } from "../../models/colour";
import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";

export class AndriiSlobodianiukConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Andrii Slobodianiuk';
    }

    public getStudentEmail(): string {
        return 'slobodyanukdev@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Andrii',
            surname: 'Slobodianiuk',
            email: 'slobodyanukdev@gmail.com',
            projectName: 'Demo Project',
            personalProjectLink: 'http://demo-lecture-3.azurewebsites.net',
            header: {
                frameNumber: 0,
                pixels: [
                    {
                        x: 0,
                        y: 0,
                        color: Colour.White
                    },
                    {
                        x: 1,
                        y: 1,
                        color: Colour.White
                    },
                    {
                        x: 2,
                        y: 2,
                        color: Colour.White
                    },
                    {
                        x: 3,
                        y: 3,
                        color: Colour.White
                    },
                    {
                        x: 4,
                        y: 4,
                        color: Colour.White
                    },
                    {
                        x: 0,
                        y: 1,
                        color: Colour.White
                    },
                    {
                        x: 2,
                        y: 1,
                        color: Colour.White
                    }
                ]
            },
            frames: [
                {
                    frameNumber: 0,
                    pixels: [
                        {
                            x: 0,
                            y: 0,
                            color: Colour.White
                        }
                    ]
                },
                {
                    frameNumber: 1,
                    pixels: [
                        {
                            x: 1,
                            y: 1,
                            color: Colour.White
                        }
                    ]
                },
                {
                    frameNumber: 2,
                    pixels: [
                        {
                            x: 2,
                            y: 2,
                            color: Colour.White
                        }
                    ]
                }
            ]
        }
    }
}