import IAnimationConfig from '../../models/animation-config';
import { IConfigLoaderService } from '../config-loader-interface';
import Constants from '../../constants/constants';
import { Colour } from '../../models/colour';
import IPixelState from '../../models/pixel-state';
import IFrame from '../../models/frame';

const ROCKET_PIXEL_STATES: IPixelState[] = [
  { x: 2, y: 8, color: Colour.White },
  { x: 2, y: 9, color: Colour.White },

  { x: 3, y: 7, color: Colour.White },
  { x: 3, y: 10, color: Colour.White },

  { x: 4, y: 6, color: Colour.White },
  { x: 4, y: 8, color: Colour.White },
  { x: 4, y: 9, color: Colour.White },
  { x: 4, y: 11, color: Colour.White },

  { x: 5, y: 6, color: Colour.White },
  { x: 5, y: 8, color: Colour.White },
  { x: 5, y: 9, color: Colour.White },
  { x: 5, y: 11, color: Colour.White },

  { x: 6, y: 5, color: Colour.White },
  { x: 6, y: 12, color: Colour.White },

  { x: 7, y: 5, color: Colour.White },
  { x: 7, y: 12, color: Colour.White },
  { x: 7, y: 8, color: Colour.White },
  { x: 7, y: 9, color: Colour.White },

  { x: 8, y: 5, color: Colour.White },
  { x: 8, y: 12, color: Colour.White },
  { x: 8, y: 8, color: Colour.White },
  { x: 8, y: 9, color: Colour.White },

  { x: 9, y: 5, color: Colour.White },
  { x: 9, y: 12, color: Colour.White },

  { x: 10, y: 6, color: Colour.White },
  { x: 10, y: 8, color: Colour.White },
  { x: 10, y: 9, color: Colour.White },
  { x: 10, y: 11, color: Colour.White },

  { x: 11, y: 6, color: Colour.White },
  { x: 11, y: 8, color: Colour.White },
  { x: 11, y: 9, color: Colour.White },
  { x: 11, y: 11, color: Colour.White },

  { x: 12, y: 5, color: Colour.White },
  { x: 12, y: 12, color: Colour.White },
  { x: 12, y: 10, color: Colour.White },
  { x: 12, y: 7, color: Colour.White },

  { x: 13, y: 5, color: Colour.White },
  { x: 13, y: 12, color: Colour.White },
  { x: 13, y: 10, color: Colour.White },
  { x: 13, y: 7, color: Colour.White },

  { x: 14, y: 5, color: Colour.White },
  { x: 14, y: 12, color: Colour.White },
  { x: 14, y: 10, color: Colour.White },
  { x: 14, y: 7, color: Colour.White },
  { x: 14, y: 8, color: Colour.White },
  { x: 14, y: 9, color: Colour.White },

  { x: 15, y: 5, color: Colour.White },
  { x: 15, y: 12, color: Colour.White },
  { x: 15, y: 10, color: Colour.White },
  { x: 15, y: 7, color: Colour.White },

  { x: 16, y: 6, color: Colour.White },
  { x: 16, y: 11, color: Colour.White },
];

export class OstapBlystsivConfigLoaderService implements IConfigLoaderService {
  public getStudentName(): string {
    return 'Ostap Blystsiv';
  }

  public getStudentEmail(): string {
    return 'ostap.blystsiv@gmail.com';
  }

  public loadConfig(): IAnimationConfig {
    return {
      name: 'Ostap',
      surname: 'Blystsiv',
      email: this.getStudentEmail(),
      projectName: 'Rocket',
      personalProjectLink: 'https://google.com',
      header: Constants.DefaultConfig.header,
      frames: generateFrames(),
    };
  }
}

function generateFrames(): IFrame[] {
  const frames: IFrame[] = [];

  for (let frameNumber = 0; frameNumber < 30; frameNumber++) {
    const pixels: IPixelState[] = [];
    const showRocket = frameNumber + 100;

    if (showRocket) {
      pixels.push(
        ...ROCKET_PIXEL_STATES.map((state) => ({
          ...state,
          x: state.x - frameNumber,
        })),
      );
    }

    frames.push({
      frameNumber: frameNumber,
      pixels: pixels,
    });
  }

  return frames;
}
