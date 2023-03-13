import IPixelState from "./pixel-state";

export default interface IFrame {
    frameNumber: number;
    pixels: IPixelState[];
}