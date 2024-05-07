import IAnimationConfig from '../../models/animation-config';
import { IConfigLoaderService } from '../config-loader-interface';
import { Colour } from '../../models/colour';
import IPixelState from '../../models/pixel-state';
import IFrame from '../../models/frame';

const DEATH_PIXEL_STATES: { [key: string]: IPixelState[] } = {
  'D': [{ x: 2, y: 3, color: Colour.White },{ x: 2, y: 4, color: Colour.White },{ x: 2, y: 5, color: Colour.White },{ x: 2, y: 6, color: Colour.White },{ x: 2, y: 7, color: Colour.White },{ x: 2, y: 8, color: Colour.White },{ x: 2, y: 9, color: Colour.White },{ x: 2, y: 10, color: Colour.White },{ x: 3, y: 2, color: Colour.White },{ x: 3, y: 11, color: Colour.White },{ x: 4, y: 2, color: Colour.White },{ x: 4, y: 11, color: Colour.White },{ x: 5, y: 2, color: Colour.White },{ x: 5, y: 11, color: Colour.White },{ x: 6, y: 2, color: Colour.White },{ x: 6, y: 11, color: Colour.White },{ x: 7, y: 3, color: Colour.White },{ x: 7, y: 4, color: Colour.White },{ x: 7, y: 5, color: Colour.White },{ x: 7, y: 6, color: Colour.White },{ x: 7, y: 7, color: Colour.White },{ x: 7, y: 8, color: Colour.White },{ x: 7, y: 9, color: Colour.White },{ x: 7, y: 10, color: Colour.White },],
  'E': [{ x: 2, y: 3, color: Colour.White },{ x: 2, y: 4, color: Colour.White },{ x: 2, y: 5, color: Colour.White },{ x: 2, y: 6, color: Colour.White },{ x: 2, y: 7, color: Colour.White },{ x: 2, y: 8, color: Colour.White },{ x: 2, y: 9, color: Colour.White },{ x: 2, y: 10, color: Colour.White },{ x: 3, y: 2, color: Colour.White },{ x: 3, y: 11, color: Colour.White },{ x: 4, y: 2, color: Colour.White },{ x: 4, y: 11, color: Colour.White },{ x: 5, y: 2, color: Colour.White },{ x: 5, y: 11, color: Colour.White },{ x: 6, y: 2, color: Colour.White },{ x: 6, y: 11, color: Colour.White },{ x: 7, y: 3, color: Colour.White },{ x: 7, y: 4, color: Colour.White },{ x: 7, y: 5, color: Colour.White },{ x: 7, y: 6, color: Colour.White },{ x: 7, y: 7, color: Colour.White },{ x: 7, y: 8, color: Colour.White },{ x: 7, y: 9, color: Colour.White },{ x: 7, y: 10, color: Colour.White },],
  'A': [{ x: 2, y: 3, color: Colour.White },{ x: 2, y: 4, color: Colour.White },{ x: 2, y: 5, color: Colour.White },{ x: 2, y: 6, color: Colour.White },{ x: 2, y: 7, color: Colour.White },{ x: 2, y: 8, color: Colour.White },{ x: 2, y: 9, color: Colour.White },{ x: 2, y: 10, color: Colour.White },{ x: 3, y: 2, color: Colour.White },{ x: 3, y: 11, color: Colour.White },{ x: 4, y: 2, color: Colour.White },{ x: 4, y: 11, color: Colour.White },{ x: 5, y: 2, color: Colour.White },{ x: 5, y: 11, color: Colour.White },{ x: 6, y: 2, color: Colour.White },{ x: 6, y: 11, color: Colour.White },{ x: 7, y: 3, color: Colour.White },{ x: 7, y: 4, color: Colour.White },{ x: 7, y: 5, color: Colour.White },{ x: 7, y: 6, color: Colour.White },{ x: 7, y: 7, color: Colour.White },{ x: 7, y: 8, color: Colour.White },{ x: 7, y: 9, color: Colour.White },{ x: 7, y: 10, color: Colour.White },],
  'T': [{ x: 2, y: 3, color: Colour.White },{ x: 2, y: 4, color: Colour.White },{ x: 2, y: 5, color: Colour.White },{ x: 2, y: 6, color: Colour.White },{ x: 2, y: 7, color: Colour.White },{ x: 2, y: 8, color: Colour.White },{ x: 2, y: 9, color: Colour.White },{ x: 2, y: 10, color: Colour.White },{ x: 3, y: 2, color: Colour.White },{ x: 3, y: 11, color: Colour.White },{ x: 4, y: 2, color: Colour.White },{ x: 4, y: 11, color: Colour.White },{ x: 5, y: 2, color: Colour.White },{ x: 5, y: 11, color: Colour.White },{ x: 6, y: 2, color: Colour.White },{ x: 6, y: 11, color: Colour.White },{ x: 7, y: 3, color: Colour.White },{ x: 7, y: 4, color: Colour.White },{ x: 7, y: 5, color: Colour.White },{ x: 7, y: 6, color: Colour.White },{ x: 7, y: 7, color: Colour.White },{ x: 7, y: 8, color: Colour.White },{ x: 7, y: 9, color: Colour.White },{ x: 7, y: 10, color: Colour.White },],
  'H': [{ x: 2, y: 3, color: Colour.White },{ x: 2, y: 4, color: Colour.White },{ x: 2, y: 5, color: Colour.White },{ x: 2, y: 6, color: Colour.White },{ x: 2, y: 7, color: Colour.White },{ x: 2, y: 8, color: Colour.White },{ x: 2, y: 9, color: Colour.White },{ x: 2, y: 10, color: Colour.White },{ x: 3, y: 2, color: Colour.White },{ x: 3, y: 11, color: Colour.White },{ x: 4, y: 2, color: Colour.White },{ x: 4, y: 11, color: Colour.White },{ x: 5, y: 2, color: Colour.White },{ x: 5, y: 11, color: Colour.White },{ x: 6, y: 2, color: Colour.White },{ x: 6, y: 11, color: Colour.White },{ x: 7, y: 3, color: Colour.White },{ x: 7, y: 4, color: Colour.White },{ x: 7, y: 5, color: Colour.White },{ x: 7, y: 6, color: Colour.White },{ x: 7, y: 7, color: Colour.White },{ x: 7, y: 8, color: Colour.White },{ x: 7, y: 9, color: Colour.White },{ x: 7, y: 10, color: Colour.White },],
};
const DEATH_HEADER_PIXEL_STATES: { [key: string]: IPixelState[] } = {
  'D': [{ x: 0, y: 0, color: Colour.White  },{ x: 0, y: 1, color: Colour.White  },{ x: 0, y: 2, color: Colour.White  },{ x: 0, y: 3, color: Colour.White  },{ x: 0, y: 4, color: Colour.White  },{ x: 0, y: 5, color: Colour.White  },{ x: 0, y: 6, color: Colour.White  },{ x: 0, y: 7, color: Colour.White  },{ x: 1, y: 8, color: Colour.White  },{ x: 1, y: 15, color: Colour.White },{ x: 2, y: 8, color: Colour.White },{ x: 2, y: 15, color: Colour.White },{ x: 3, y: 8, color: Colour.White },{ x: 3, y: 15, color: Colour.White },{ x: 4, y: 8, color: Colour.White },{ x: 4, y: 15, color: Colour.White },{ x: 5, y: 9, color: Colour.White },{ x: 5, y: 10, color: Colour.White },{ x: 5, y: 11, color: Colour.White },{ x: 5, y: 12, color: Colour.White },{ x: 5, y: 13, color: Colour.White },{ x: 5, y: 14, color: Colour.White },],
  'E': [{ x: 10, y: 0, color: Colour.White },{ x: 10, y: 1, color: Colour.White },{ x: 10, y: 2, color: Colour.White },{ x: 10, y: 3, color: Colour.White },{ x: 10, y: 4, color: Colour.White },{ x: 10, y: 5, color: Colour.White },{ x: 10, y: 6, color: Colour.White },{ x: 10, y: 7, color: Colour.White },{ x: 11, y: 8, color: Colour.White },{ x: 11, y: 15, color: Colour.White },{ x: 12, y: 8, color: Colour.White },{ x: 12, y: 15, color: Colour.White },{ x: 13, y: 8, color: Colour.White },{ x: 13, y: 15, color: Colour.White },{ x: 14, y: 8, color: Colour.White },{ x: 14, y: 15, color: Colour.White },{ x: 15, y: 8, color: Colour.White },{ x: 15, y: 9, color: Colour.White },{ x: 15, y: 10, color: Colour.White },{ x: 15, y: 11, color: Colour.White },{ x: 15, y: 12, color: Colour.White },{ x: 15, y: 13, color: Colour.White },{ x: 15, y: 14, color: Colour.White },],
  'A': [{ x: 20, y: 0, color: Colour.White },{ x: 19, y: 1, color: Colour.White },{ x: 21, y: 1, color: Colour.White },{ x: 19, y: 2, color: Colour.White },{ x: 21, y: 2, color: Colour.White },{ x: 19, y: 3, color: Colour.White },{ x: 21, y: 3, color: Colour.White },{ x: 19, y: 4, color: Colour.White },{ x: 21, y: 4, color: Colour.White },{ x: 19, y: 5, color: Colour.White },{ x: 21, y: 5, color: Colour.White },{ x: 19, y: 6, color: Colour.White },{ x: 21, y: 6, color: Colour.White },{ x: 19, y: 7, color: Colour.White },{ x: 21, y: 7, color: Colour.White },{ x: 20, y: 8, color: Colour.White },{ x: 19, y: 9, color: Colour.White },{ x: 21, y: 9, color: Colour.White },{ x: 19, y: 10, color: Colour.White },{ x: 21, y: 10, color: Colour.White },{ x: 19, y: 11, color: Colour.White },{ x: 21, y: 11, color: Colour.White },{ x: 19, y: 12, color: Colour.White },{ x: 21, y: 12, color: Colour.White },{ x: 19, y: 13, color: Colour.White },{ x: 21, y: 13, color: Colour.White },{ x: 19, y: 14, color: Colour.White },{ x: 21, y: 14, color: Colour.White },],
  'T': [{ x: 30, y: 0, color: Colour.White },{ x: 30, y: 1, color: Colour.White },{ x: 30, y: 2, color: Colour.White },{ x: 30, y: 3, color: Colour.White },{ x: 30, y: 4, color: Colour.White },{ x: 30, y: 5, color: Colour.White },{ x: 30, y: 6, color: Colour.White },{ x: 30, y: 7, color: Colour.White },{ x: 29, y: 8, color: Colour.White },{ x: 30, y: 9, color: Colour.White },{ x: 31, y: 8, color: Colour.White },{ x: 30, y: 15, color: Colour.White },],
  'H': [{ x: 40, y: 0, color: Colour.White },{ x: 40, y: 1, color: Colour.White },{ x: 40, y: 2, color: Colour.White },{ x: 40, y: 3, color: Colour.White },{ x: 40, y: 4, color: Colour.White },{ x: 40, y: 5, color: Colour.White },{ x: 40, y: 6, color: Colour.White },{ x: 40, y: 7, color: Colour.White },{ x: 41, y: 8, color: Colour.White },{ x: 41, y: 9, color: Colour.White },{ x: 41, y: 10, color: Colour.White },{ x: 41, y: 11, color: Colour.White },{ x: 41, y: 12, color: Colour.White },{ x: 41, y: 13, color: Colour.White },{ x: 41, y: 14, color: Colour.White },{ x: 42, y: 0, color: Colour.White },{ x: 42, y: 1, color: Colour.White },{ x: 42, y: 2, color: Colour.White },{ x: 42, y: 3, color: Colour.White },{ x: 42, y: 4, color: Colour.White },{ x: 42, y: 5, color: Colour.White },{ x: 42, y: 6, color: Colour.White },{ x: 42, y: 7, color: Colour.White },],
};

const FRAMES_COUNT: number = 30;
const WORD = "DEATH";

export class YelyzavetaChervynskaConfigLoaderService implements IConfigLoaderService {
  public loadConfig(): IAnimationConfig {
    return {
      name: 'Yelyzaveta',
      surname: 'Chervynska',
      email: 'cherliza05@gmail.com',
      projectName: 'Death Animation',
      personalProjectLink: 'https://google.com',// :(
      header: generateHeaderFrame(),
      frames: generateFrames(),
    };
  }

  public getStudentName(): string {
    return 'Yelyzaveta Chervynska';
  }

  public getStudentEmail(): string {
    return 'cherliza05@gmail.com';
  }
}

const generateFrames = (): IFrame[] => {
  const frames: IFrame[] = [];

  for (let frameNumber = 0; frameNumber < FRAMES_COUNT; frameNumber++) {
    const pixels: IPixelState[] = [];

    for (let i = 0; i < WORD.length; i++) {
      const letter = WORD[i];
      const letterPixels = DEATH_PIXEL_STATES[letter];

      if (letterPixels) {
        pixels.push(
          ...letterPixels.map((state) => ({
            ...state,
            x: state.x + (i * 4) - frameNumber,
          })),
        );
      }
    }

    frames.push({
      frameNumber,
      pixels,
    });
  }

  return frames;
};

const generateHeaderFrame = (): IFrame => ({
  frameNumber: 1,
  pixels: [], 
});
