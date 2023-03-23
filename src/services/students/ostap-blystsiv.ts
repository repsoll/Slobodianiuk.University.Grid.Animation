import IAnimationConfig from '../../models/animation-config';
import { IConfigLoaderService } from '../config-loader-interface';
import { Colour } from '../../models/colour';
import IPixelState from '../../models/pixel-state';
import IFrame from '../../models/frame';

const ROCKET_PIXEL_STATES: IPixelState[] = [
  { x: 2, y: 7, color: Colour.White },
  { x: 2, y: 8, color: Colour.White },

  { x: 3, y: 6, color: Colour.White },
  { x: 3, y: 9, color: Colour.White },

  { x: 4, y: 5, color: Colour.White },
  { x: 4, y: 7, color: Colour.White },
  { x: 4, y: 8, color: Colour.White },
  { x: 4, y: 10, color: Colour.White },

  { x: 5, y: 5, color: Colour.White },
  { x: 5, y: 7, color: Colour.White },
  { x: 5, y: 8, color: Colour.White },
  { x: 5, y: 10, color: Colour.White },

  { x: 6, y: 4, color: Colour.White },
  { x: 6, y: 11, color: Colour.White },

  { x: 7, y: 4, color: Colour.White },
  { x: 7, y: 11, color: Colour.White },
  { x: 7, y: 7, color: Colour.White },
  { x: 7, y: 8, color: Colour.White },

  { x: 8, y: 4, color: Colour.White },
  { x: 8, y: 11, color: Colour.White },
  { x: 8, y: 7, color: Colour.White },
  { x: 8, y: 8, color: Colour.White },

  { x: 9, y: 4, color: Colour.White },
  { x: 9, y: 11, color: Colour.White },

  { x: 10, y: 5, color: Colour.White },
  { x: 10, y: 7, color: Colour.White },
  { x: 10, y: 8, color: Colour.White },
  { x: 10, y: 10, color: Colour.White },

  { x: 11, y: 5, color: Colour.White },
  { x: 11, y: 7, color: Colour.White },
  { x: 11, y: 8, color: Colour.White },
  { x: 11, y: 10, color: Colour.White },

  { x: 12, y: 4, color: Colour.White },
  { x: 12, y: 11, color: Colour.White },
  { x: 12, y: 9, color: Colour.White },
  { x: 12, y: 6, color: Colour.White },

  { x: 13, y: 4, color: Colour.White },
  { x: 13, y: 11, color: Colour.White },
  { x: 13, y: 9, color: Colour.White },
  { x: 13, y: 6, color: Colour.White },

  { x: 14, y: 4, color: Colour.White },
  { x: 14, y: 11, color: Colour.White },
  { x: 14, y: 9, color: Colour.White },
  { x: 14, y: 6, color: Colour.White },
  { x: 14, y: 7, color: Colour.White },
  { x: 14, y: 8, color: Colour.White },

  { x: 15, y: 4, color: Colour.White },
  { x: 15, y: 11, color: Colour.White },
  { x: 15, y: 9, color: Colour.White },
  { x: 15, y: 6, color: Colour.White },

  { x: 16, y: 5, color: Colour.White },
  { x: 16, y: 10, color: Colour.White },
];

const ROCKET_HEADER_PIXEL_STATES: IPixelState[] = [
  { x: 3, y: 2, color: Colour.White },
  { x: 3, y: 3, color: Colour.White },
  { x: 3, y: 4, color: Colour.White },
  { x: 3, y: 5, color: Colour.White },
  { x: 3, y: 9, color: Colour.White },
  { x: 3, y: 10, color: Colour.White },
  { x: 3, y: 13, color: Colour.White },

  { x: 4, y: 2, color: Colour.White },
  { x: 4, y: 8, color: Colour.White },
  { x: 4, y: 11, color: Colour.White },
  { x: 4, y: 13, color: Colour.White },

  { x: 5, y: 2, color: Colour.White },
  { x: 5, y: 4, color: Colour.White },
  { x: 5, y: 5, color: Colour.White },
  { x: 5, y: 8, color: Colour.White },
  { x: 5, y: 11, color: Colour.White },
  { x: 5, y: 13, color: Colour.White },

  { x: 6, y: 2, color: Colour.White },
  { x: 6, y: 5, color: Colour.White },
  { x: 6, y: 8, color: Colour.White },
  { x: 6, y: 11, color: Colour.White },

  { x: 7, y: 2, color: Colour.White },
  { x: 7, y: 3, color: Colour.White },
  { x: 7, y: 4, color: Colour.White },
  { x: 7, y: 5, color: Colour.White },
  { x: 7, y: 9, color: Colour.White },
  { x: 7, y: 10, color: Colour.White },
  { x: 7, y: 13, color: Colour.White },
];

const FRAMES_COUNT: number = 30;

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
      header: generateHeaderFrame(),
      frames: generateFrames(),
    };
  }
}

const generateFrames = (): IFrame[] => {
  const frames: IFrame[] = [];

  for (let frameNumber = 0; frameNumber < FRAMES_COUNT; frameNumber++) {
    const pixels: IPixelState[] = [];

    pixels.push(
      ...ROCKET_PIXEL_STATES.map((state) => ({
        ...state,
        x: state.x - frameNumber,
      })),
    );

    frames.push({
      frameNumber,
      pixels,
    });
  }

  return frames;
};

const generateHeaderFrame = (): IFrame => ({
  frameNumber: 1,
  pixels: ROCKET_HEADER_PIXEL_STATES,
});
