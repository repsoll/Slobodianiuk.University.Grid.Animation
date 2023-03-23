import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class OlehMuzychukConfigLoaderService implements IConfigLoaderService {

	public getStudentName(): string {
		return 'Oleh Muzcyhuk';
	}

	public getStudentEmail(): string {
		return 'olehmuz87@gmail.com';
	}

	public generateFrames(): IFrame[] {
		const frames: IFrame[] = [];

		const image: IPixelState[] = [
			{ x: 3, y: 2, color: Colour.White },
			{ x: 4, y: 2, color: Colour.White },
			{ x: 5, y: 2, color: Colour.White },
			{ x: 6, y: 2, color: Colour.White },
			{ x: 7, y: 2, color: Colour.White },
			{ x: 8, y: 2, color: Colour.White },
			{ x: 9, y: 2, color: Colour.White },
			{ x: 3, y: 4, color: Colour.White },
			{ x: 3, y: 5, color: Colour.White },
			{ x: 3, y: 6, color: Colour.White },
			{ x: 3, y: 7, color: Colour.White },
			{ x: 3, y: 6, color: Colour.White },
			{ x: 4, y: 6, color: Colour.White },
			{ x: 5, y: 6, color: Colour.White },
			{ x: 6, y: 6, color: Colour.White },
			{ x: 7, y: 6, color: Colour.White },
			{ x: 8, y: 6, color: Colour.White },
			{ x: 9, y: 6, color: Colour.White },
			{ x: 3, y: 7, color: Colour.White },
			{ x: 3, y: 8, color: Colour.White },
			{ x: 3, y: 9, color: Colour.White },
			{ x: 3, y: 10, color: Colour.White },
			{ x: 3, y: 11, color: Colour.White },
			{ x: 3, y: 12, color: Colour.White },
			{ x: 3, y: 9, color: Colour.White },
			{ x: 4, y: 9, color: Colour.White },
			{ x: 5, y: 9, color: Colour.White },
			{ x: 6, y: 9, color: Colour.White },
			{ x: 7, y: 9, color: Colour.White },
			{ x: 8, y: 9, color: Colour.White },
			{ x: 9, y: 9, color: Colour.White },
			{ x: 6, y: 10, color: Colour.White },
			{ x: 6, y: 11, color: Colour.White },
			{ x: 5, y: 13, color: Colour.White },
			{ x: 7, y: 13, color: Colour.White },
			{ x: 8, y: 13, color: Colour.White },
			{ x: 9, y: 13, color: Colour.White },
		];

		for (let frameNumber = 0; frameNumber < 40; frameNumber++) {
			const pixels: IPixelState[] = [];
			const showImage = frameNumber + 100;
			const step = frameNumber - 20;

			if (showImage) {
				pixels.push(...image.map(pixel => ({ ...pixel, y: pixel.y + step, color: Colour.White })));
			}

			frames.push({
				frameNumber: frameNumber,
				pixels: pixels,
			});


		}


		return frames;
	}
	public createHeader(): IFrame {
		const pixels: IPixelState[] = [
			{ x: 3, y: 2, color: Colour.White },
			{ x: 4, y: 2, color: Colour.White },
			{ x: 5, y: 2, color: Colour.White },
			{ x: 6, y: 2, color: Colour.White },
			{ x: 7, y: 2, color: Colour.White },
			{ x: 8, y: 2, color: Colour.White },
			{ x: 9, y: 2, color: Colour.White },
			{ x: 3, y: 4, color: Colour.White },
			{ x: 3, y: 5, color: Colour.White },
			{ x: 3, y: 6, color: Colour.White },
			{ x: 3, y: 7, color: Colour.White },
			{ x: 3, y: 6, color: Colour.White },
			{ x: 4, y: 6, color: Colour.White },
			{ x: 5, y: 6, color: Colour.White },
			{ x: 6, y: 6, color: Colour.White },
			{ x: 7, y: 6, color: Colour.White },
			{ x: 8, y: 6, color: Colour.White },
			{ x: 9, y: 6, color: Colour.White },
			{ x: 3, y: 7, color: Colour.White },
			{ x: 3, y: 8, color: Colour.White },
			{ x: 3, y: 9, color: Colour.White },
			{ x: 3, y: 10, color: Colour.White },
			{ x: 3, y: 11, color: Colour.White },
			{ x: 3, y: 12, color: Colour.White },
			{ x: 3, y: 9, color: Colour.White },
			{ x: 4, y: 9, color: Colour.White },
			{ x: 5, y: 9, color: Colour.White },
			{ x: 6, y: 9, color: Colour.White },
			{ x: 7, y: 9, color: Colour.White },
			{ x: 8, y: 9, color: Colour.White },
			{ x: 9, y: 9, color: Colour.White },
			{ x: 6, y: 10, color: Colour.White },
			{ x: 6, y: 11, color: Colour.White },
			{ x: 5, y: 13, color: Colour.White },
			{ x: 7, y: 13, color: Colour.White },
			{ x: 8, y: 13, color: Colour.White },
			{ x: 9, y: 13, color: Colour.White },
		];
		return {
			frameNumber: 0,
			pixels: pixels,
		};
	}

	public loadConfig(): IAnimationConfig {
		return {
			name: 'Oleh',
			surname: 'Muzychuk',
			email: this.getStudentEmail(),
			projectName: 'ITFIN',
			personalProjectLink: 'http://google.com', // На днях буду хостити, тому поки не маю лінку
			header: this.createHeader(),
			frames: this.generateFrames()
		}
	}
}