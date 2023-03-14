import { Colour } from "../models/colour";
import IAnimationConfig from "../models/animation-config";
import IFrame from "../models/frame";

const getCrossFrame = (frameNumber: number): IFrame => {
    let result: IFrame = {
        frameNumber: frameNumber,
        pixels: []
    };

    for (let x = 0; x < Constants.GridRows; x++) {
        for (let y = 0; y < Constants.GridColumns; y++) {

            if (Constants.GridColumns - x > frameNumber) {
                if (x === y || x + y === Constants.GridColumns - 1) {
                    result.pixels.push({
                        color: Colour.White,
                        x: x,
                        y: y
                    });
                }
            }

            if (frameNumber > Constants.GridColumns && Constants.GridColumns - x < frameNumber - Constants.GridColumns) {
                if (x === y || x + y === Constants.GridColumns - 1) {
                    result.pixels.push({
                        color: Colour.White,
                        x: x,
                        y: y
                    });
                }
            }
        }
    }

    return result;
}

export default class Constants {
    static readonly GridColumns = 16;
    static readonly GridRows = 16;

    static readonly HeaderColumns = 16;
    static readonly HeaderRows = 11;

    static readonly PixelHeight = 10;
    static readonly PixelWidth = 10;

    static readonly FrameDelayMillis = 42;
    static readonly MaxTotalFrames = 120;

    static readonly DefaultConfig: IAnimationConfig = {
        name: 'Andrii',
        surname: 'Slobodianiuk',
        email: 'slobodyanukdev@gmail.com',
        projectName: 'Demo Project',
        personalProjectLink: 'http://demo-lecture-3.azurewebsites.net',
        header: getCrossFrame(0),
        frames: [...Array(32).keys()].map(x => getCrossFrame(x))
    }
}
