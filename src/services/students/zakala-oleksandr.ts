import IAnimationConfig from '../../models/animation-config';
import { IConfigLoaderService } from '../config-loader-interface';
import Constants from '../../constants/constants';
import { Colour } from '../../models/colour';
import IPixelState from '../../models/pixel-state';
import IFrame from '../../models/frame';

const shield_data: IPixelState[] = [
  { y: 1,  x:-1+ 3, color: Colour.White },
  { y: 1,  x:-1+ 4, color: Colour.White },
  { y: 1,  x:-1+ 5, color: Colour.White },
  { y: 1,  x:-1+ 6, color: Colour.White },
  { y: 2,  x:-1+ 3, color: Colour.White },
  { y: 2,  x:-1+ 7, color: Colour.White },
  { y: 2,  x:-1+ 8, color: Colour.White },
  { y: 2,  x:-1+ 9, color: Colour.White },
  { y: 3,  x:-1+ 3, color: Colour.White },
  { y: 3,  x:-1+ 10, color: Colour.White },
  { y: 3,  x:-1+ 11, color: Colour.White },
  { y: 4,  x:-1+ 4, color: Colour.White },
  { y: 4,  x:-1+ 12, color: Colour.White },
  { y: 4,  x:-1+ 13, color: Colour.White },
  { y: 5,  x:-1+ 4, color: Colour.White },
  { y: 5,  x:-1+ 14, color: Colour.White },
  { y: 6,  x:-1+ 3, color: Colour.White },
  { y: 6,  x:-1+ 15, color: Colour.White },
  { y: 7,  x:-1+ 2, color: Colour.White },
  { y: 7,  x:-1+ 15, color: Colour.White },
  { y: 8,  x:-1+ 2, color: Colour.White },
  { y: 8,  x:-1+ 15, color: Colour.White },
  { y: 9,  x:-1+ 3, color: Colour.White },
  { y: 9,  x:-1+ 15, color: Colour.White },
  { y: 10, x:-1+ 4, color: Colour.White },
  { y: 10, x:-1+ 14, color: Colour.White },
  { y: 11, x:-1+ 4, color: Colour.White },
  { y: 11, x:-1+ 12, color: Colour.White },
  { y: 11, x:-1+ 13, color: Colour.White },
  { y: 12, x:-1+ 3, color: Colour.White },
  { y: 12, x:-1+ 10, color: Colour.White },
  { y: 12, x:-1+ 11, color: Colour.White },
  { y: 13, x:-1+ 3, color: Colour.White },
  { y: 13, x:-1+ 7, color: Colour.White },
  { y: 13, x:-1+ 8, color: Colour.White },
  { y: 13, x:-1+ 9, color: Colour.White },
  { y: 14, x:-1+ 3, color: Colour.White },
  { y: 14, x:-1+ 4, color: Colour.White },
  { y: 14, x:-1+ 5, color: Colour.White },
  { y: 14, x:-1+ 6, color: Colour.White },
  { y: 14, x:-1+ 6, color: Colour.Black },
];

export class ZakalaOleksandrConfigLoaderService implements IConfigLoaderService {
  public getStudentName(): string {
    return 'Zakala Oleksandr';
  }

  public getStudentEmail(): string {
    return 'oleksandr.zakala@gmail.com';
  }

  public loadConfig(): IAnimationConfig {
    return {
      name: 'Zakala',
      surname: 'Oleksandr',
      email: this.getStudentEmail(),
      projectName: 'Shield',
      personalProjectLink: 'https://google.com',
      header: createHeartRecommenderHeader(),
      frames: generateFrames(),
    };
  }
}

function generate_circle(xc: number, yc: number, r: number, color: Colour): IPixelState[] {
  var pixels: IPixelState[] = [];


  for (let x = xc - r; x <= xc + r; x++) {
    for (let y = yc - r; y <= yc + r; y++) {
      const dx = x - xc;
      const dy = y - yc;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist <= r) {
        pixels.push({ x: Math.round(x), y: Math.round(y), color: color });
      }
    }
  }
  
  return pixels;
}

function update_pixels(pixels1: IPixelState[], pixels2: IPixelState[], new_color: Colour): IPixelState[] {
  const updated_pixels: IPixelState[] = [];

  for (const pixel1 of pixels1) {
    for (const pixel2 of pixels2) {
      if (pixel1.x === pixel2.x && pixel1.y === pixel2.y) {
        updated_pixels.push({ x: pixel1.x, y: pixel1.y, color: new_color });
        break; 
      }
    }
    if (updated_pixels.length < pixels1.length) {
      pixel1.x;
      updated_pixels.push(pixel1);
    }
  }

  return updated_pixels;
}


function generateFrames(): IFrame[] {
  const frames: IFrame[] = [];
  let fc = 0
  for (let frameNumber = 0; frameNumber < 11; frameNumber++, fc++) {
    const pixels: IPixelState[] = [];

    var new_pixels = [...generate_circle(8, 8, Math.round(frameNumber*1.1), Colour.White),
     ...generate_circle(7, 7, Math.round(frameNumber*1.1), Colour.White),
     ...generate_circle(7, 8, Math.round(frameNumber*1.1), Colour.White),
     ...generate_circle(8, 7, Math.round(frameNumber*1.1), Colour.White)];
    new_pixels = update_pixels(new_pixels, shield_data, Colour.Black);
    frames.push({
      frameNumber: fc,
      pixels: new_pixels,
    });
  }
  for (let frameNumber = 11; frameNumber > 0; frameNumber--, fc++) {
    const pixels: IPixelState[] = [];

    var new_pixels = [...generate_circle(9, 8, Math.round(frameNumber*1.1), Colour.White),
     ...generate_circle(8, 7, Math.round(frameNumber*1.1), Colour.White),
     ...generate_circle(8, 8, Math.round(frameNumber*1.1), Colour.White),
     ...generate_circle(9, 7, Math.round(frameNumber*1.1), Colour.White)];
    new_pixels = update_pixels(new_pixels, shield_data, Colour.Black);
    new_pixels = [...new_pixels, ...shield_data];
    frames.push({
      frameNumber: fc,
      pixels: new_pixels,
    });
  }

  for (let frameNumber = 0; frameNumber < 10; frameNumber++, fc++) {
    frames.push({
      frameNumber: fc,
      pixels: shield_data,
    });
  }

  return frames;
}


function createHeartRecommenderHeader(): IFrame {
  return {
    frameNumber: 0,
    pixels: shield_data,
  };
}
