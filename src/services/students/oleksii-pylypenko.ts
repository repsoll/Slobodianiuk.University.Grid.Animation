import IAnimationConfig from '../../models/animation-config';
import { IConfigLoaderService } from '../config-loader-interface';
import Constants from '../../constants/constants';
import IFrame from '../../models/frame';
import IPixelState from '../../models/pixel-state';
import { Colour } from '../../models/colour';

export class OleksiiPylypenkoConfigLoaderService implements IConfigLoaderService {
  public getStudentName(): string {
    return 'Oleksii Pylypenko';
  }

  public getStudentEmail(): string {
    return 'morten.hihiji97@gmail.com';
  }

  public loadConfig(): IAnimationConfig {
    return {
      name: 'Oleksii',
      surname: 'Pylypenkno',
      email: this.getStudentEmail(),
      projectName: 'Heart Broken',
      personalProjectLink: 'https://google.com',
      header: generateHeaderFrame(),
      frames: generateHeartArrowFrames(),
    };
  }
}

const heartPixels: IPixelState[] = [
  { x: 6, y: 7, color: Colour.White },
  { x: 5, y: 6, color: Colour.White },
  { x: 4, y: 5, color: Colour.White },
  { x: 4, y: 4, color: Colour.White },
  { x: 5, y: 3, color: Colour.White },
  { x: 6, y: 3, color: Colour.White },
  { x: 7, y: 3, color: Colour.White },
  { x: 8, y: 4, color: Colour.White },
  { x: 9, y: 5, color: Colour.White },
  { x: 10, y: 6, color: Colour.White },
  { x: 11, y: 7, color: Colour.White },
  { x: 10, y: 8, color: Colour.White },
  { x: 9, y: 9, color: Colour.White },
  { x: 8, y: 10, color: Colour.White },
  { x: 7, y: 11, color: Colour.White },
  { x: 6, y: 11, color: Colour.White },
  { x: 5, y: 11, color: Colour.White },
  { x: 4, y: 10, color: Colour.White },
  { x: 4, y: 9, color: Colour.White },
  { x: 5, y: 8, color: Colour.White },
  { x: 6, y: 7, color: Colour.White },
];

const arrowPixels = [
  { x: 5, y: 1, color: Colour.White },
  { x: 4, y: 2, color: Colour.White },
  { x: 3, y: 3, color: Colour.White },
  { x: 6, y: 2, color: Colour.White },
  { x: 6, y: 2, color: Colour.White },
  { x: 7, y: 3, color: Colour.White },
  { x: 7, y: 3, color: Colour.White },
  { x: 5, y: 3, color: Colour.White },
  { x: 5, y: 4, color: Colour.White },
  { x: 5, y: 5, color: Colour.White },
  { x: 5, y: 6, color: Colour.White },
  { x: 5, y: 7, color: Colour.White },
  { x: 4, y: 8, color: Colour.White },
  { x: 3, y: 9, color: Colour.White },
  { x: 6, y: 8, color: Colour.White },
  { x: 7, y: 9, color: Colour.White },
];

function generateHeartArrowFrames(): IFrame[] {
  const frames: IFrame[] = [];

  for (let x = 0; x < 35; x++) {
    const frame: IFrame = {
      frameNumber: x,
      pixels: [
        ...heartPixels.map((p) => p),
        ...arrowPixels
          .map((p) => {
            if (x >= 15) return { ...p, x: p.x + 2, y: p.y + 4 };

            return { ...p, x: p.x + 2, y: p.y - x + 18 };
          })
          .filter((p) => p.y >= 8),
      ],
    };

    frames.push(frame);
  }

  return frames;
}

const generateHeaderFrame = (): IFrame => ({
  frameNumber: 1,
  pixels: heartPixels,
});
