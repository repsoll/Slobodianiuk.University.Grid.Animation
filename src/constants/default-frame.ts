import { Colour } from "../models/colour";
import IFrame from "../models/frame";
import Constants from "./constants";

export const getDefaultCrossFrame = (frameNumber: number): IFrame => {
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