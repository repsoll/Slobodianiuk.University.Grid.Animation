import IAnimationConfig from "../models/animation-config";
import { getDefaultCrossFrame } from "./default-frame";

export default class Constants {
    static readonly GridColumns = 16;
    static readonly GridRows = 16;

    static readonly HeaderColumns = 16;
    static readonly HeaderRows = 11;

    static readonly PixelHeight = 10;
    static readonly PixelWidth = 10;

    static readonly FrameDelayMillis = 42;
    static readonly MaxTotalFrames = 120;

    static readonly GithibLink = 'https://github.com/aslobodyanuk/Slobodianiuk.University.Grid.Animation';

    static readonly DefaultConfig: IAnimationConfig = {
        name: 'Andrii',
        surname: 'Slobodianiuk',
        email: 'slobodyanukdev@gmail.com',
        projectName: 'Demo Project',
        personalProjectLink: 'http://demo-lecture-3.azurewebsites.net',
        header: getDefaultCrossFrame(0),
        frames: [...Array(32).keys()].map(x => getDefaultCrossFrame(x))
    }
}
