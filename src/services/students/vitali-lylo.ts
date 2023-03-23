import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class VitaliLyloConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Vitali Lylo';
    }

    public getStudentEmail(): string {
        return 'vitalii.lylo@lnu.edu.ua';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Vitali',
            surname: 'Lylo',
            email: this.getStudentEmail(),
            projectName: 'Project Logo',
            personalProjectLink: 'https://immigration-assistance-application.azurewebsites.net/',
            header: Avatar(0),
            frames: generateFrames()
        }
    }
}

const Avatar = (frameNumber: number): IFrame => {
    let result: IFrame = {
        frameNumber: frameNumber,
        pixels: []
    };

    result.pixels.push(

        { x: 0, y: 8, color: Colour.White  },
        { x: 1, y: 8, color: Colour.White  },
        { x: 2, y: 8, color: Colour.White  },
        { x: 3, y: 8, color: Colour.White  },
        { x: 4, y: 8, color: Colour.White  },
        { x: 5, y: 8, color: Colour.White  },
        { x: 6, y: 8, color: Colour.White  },
        { x: 7, y: 8, color: Colour.White  },
        { x: 8, y: 8, color: Colour.White  },
        { x: 9, y: 8, color: Colour.White  },
        { x: 10, y: 8, color: Colour.White },
        { x: 11, y: 8, color: Colour.White },
        { x: 12, y: 8, color: Colour.White },
        { x: 13, y: 8, color: Colour.White },
        { x: 14, y: 8, color: Colour.White },
        { x: 15, y: 8, color: Colour.White },
        { x: 0, y: 7, color: Colour.White  },
        { x: 1, y: 7, color: Colour.White  },
        { x: 2, y: 7, color: Colour.White  },
        { x: 3, y: 7, color: Colour.White  },
        { x: 4, y: 7, color: Colour.White  },
        { x: 5, y: 7, color: Colour.White  },
        { x: 6, y: 7, color: Colour.White  },
        { x: 7, y: 7, color: Colour.White  },
        { x: 8, y: 7, color: Colour.White  },
        { x: 9, y: 7, color: Colour.White  },
        { x: 10, y: 7, color: Colour.White },
        { x: 11, y: 7, color: Colour.White },
        { x: 12, y: 7, color: Colour.White },
        { x: 13, y: 7, color: Colour.White },
        { x: 14, y: 7, color: Colour.White },
        { x: 15, y: 7, color: Colour.White },
        { x: 7, y: 0, color: Colour.White  },
        { x: 7, y: 1, color: Colour.White  },
        { x: 7, y: 2, color: Colour.White  },
        { x: 7, y: 3, color: Colour.White  },
        { x: 7, y: 4, color: Colour.White  },
        { x: 7, y: 5, color: Colour.White  },
        { x: 7, y: 6, color: Colour.White  },
        { x: 7, y: 7, color: Colour.White  },
        { x: 7, y: 8, color: Colour.White  },
        { x: 7, y: 9, color: Colour.White  },
        { x: 7, y: 10, color: Colour.White },
        { x: 7, y: 11, color: Colour.White },
        { x: 7, y: 12, color: Colour.White },
        { x: 7, y: 13, color: Colour.White },
        { x: 7, y: 14, color: Colour.White },
        { x: 7, y: 15, color: Colour.White },
        { x: 8, y: 0, color: Colour.White  },
        { x: 8, y: 1, color: Colour.White  },
        { x: 8, y: 2, color: Colour.White  },
        { x: 8, y: 3, color: Colour.White  },
        { x: 8, y: 4, color: Colour.White  },
        { x: 8, y: 5, color: Colour.White  },
        { x: 8, y: 6, color: Colour.White  },
        { x: 8, y: 7, color: Colour.White  },
        { x: 8, y: 8, color: Colour.White  },
        { x: 8, y: 9, color: Colour.White  },
        { x: 8, y: 10, color: Colour.White },
        { x: 8, y: 11, color: Colour.White },
        { x: 8, y: 12, color: Colour.White },
        { x: 8, y: 13, color: Colour.White },
        { x: 8, y: 14, color: Colour.White },
        { x: 8, y: 15, color: Colour.White },
        { x: 8, y: 15, color: Colour.White },
        { x: 0, y: 0, color: Colour.White   },
        { x: 0, y: 1, color: Colour.White   },
        { x: 1, y: 1, color: Colour.White   },
        { x: 1, y: 0, color: Colour.White   },
        { x: 1, y: 14, color: Colour.White  },
        { x: 1, y: 15, color: Colour.White  },
        { x: 0, y: 14, color: Colour.White  },
        { x: 0, y: 15, color: Colour.White  },
        { x: 1, y: 15, color: Colour.White  },
        { x: 15, y: 0, color: Colour.White  },
        { x: 15, y: 1, color: Colour.White  },
        { x: 14, y: 0, color: Colour.White  },
        { x: 14, y: 1, color: Colour.White  },
        { x: 15, y: 15, color: Colour.White },
        { x: 15, y: 14, color: Colour.White },
        { x: 14, y: 15, color: Colour.White },
        { x: 14, y: 14, color: Colour.White },
        { x: 2, y: 2, color: Colour.White   },
        { x: 3, y: 3, color: Colour.White   },
        { x: 4, y: 4, color: Colour.White   },
        { x: 5, y: 5, color: Colour.White   },
        { x: 6, y: 6, color: Colour.White   },
        { x: 6, y: 9, color: Colour.White   },
        { x: 5, y: 10, color: Colour.White  },
        { x: 4, y: 11, color: Colour.White  },
        { x: 3, y: 12, color: Colour.White  },
        { x: 2, y: 13, color: Colour.White  },
        { x: 1, y: 14, color: Colour.White  },
        { x: 9, y: 6, color: Colour.White   },
        { x: 10, y: 5, color: Colour.White  },
        { x: 11, y: 4, color: Colour.White  },
        { x: 12, y: 3, color: Colour.White  },
        { x: 13, y: 2, color: Colour.White  },
        { x: 9, y: 9, color: Colour.White   },
        { x: 10, y: 10, color: Colour.White },
        { x: 11, y: 11, color: Colour.White },
        { x: 12, y: 12, color: Colour.White },
        { x: 13, y: 13, color: Colour.White },

        );

    return result;
}

function generateFrames(): IFrame[] {
    const frames: IFrame[] = [];

    const art: IPixelState[] = [
        { x: 9, y: 6, color: Colour.White   }, { x: 10, y: 5, color: Colour.White  }, { x: 11, y: 4, color: Colour.White  }, { x: 12, y: 3, color: Colour.White  }, { x: 13, y: 2, color: Colour.White  }, { x: 2, y: 2, color: Colour.White   },
        { x: 3, y: 3, color: Colour.White   }, { x: 4, y: 4, color: Colour.White   }, { x: 5, y: 5, color: Colour.White   }, { x: 6, y: 6, color: Colour.White   }, { x: 6, y: 9, color: Colour.White   }, { x: 5, y: 10, color: Colour.White  },
        { x: 4, y: 11, color: Colour.White  }, { x: 3, y: 12, color: Colour.White  }, { x: 2, y: 13, color: Colour.White  }, { x: 1, y: 14, color: Colour.White  }, { x: 9, y: 9, color: Colour.White   }, { x: 10, y: 10, color: Colour.White },
        { x: 11, y: 11, color: Colour.White }, { x: 12, y: 12, color: Colour.White }, { x: 13, y: 13, color: Colour.White }, { x: 0, y: 8, color: Colour.White   }, { x: 1, y: 8, color: Colour.White   }, { x: 2, y: 8, color: Colour.White   },
        { x: 3, y: 8, color: Colour.White   }, { x: 4, y: 8, color: Colour.White   }, { x: 5, y: 8, color: Colour.White   }, { x: 6, y: 8, color: Colour.White   }, { x: 7, y: 8, color: Colour.White   }, { x: 8, y: 8, color: Colour.White   },
        { x: 9, y: 8, color: Colour.White   }, { x: 10, y: 8, color: Colour.White  }, { x: 11, y: 8, color: Colour.White  }, { x: 12, y: 8, color: Colour.White  }, { x: 13, y: 8, color: Colour.White  }, { x: 14, y: 8, color: Colour.White  },
        { x: 15, y: 8, color: Colour.White  }, { x: 0, y: 7, color: Colour.White   }, { x: 1, y: 7, color: Colour.White   }, { x: 2, y: 7, color: Colour.White   }, { x: 3, y: 7, color: Colour.White   }, { x: 4, y: 7, color: Colour.White   },
        { x: 5, y: 7, color: Colour.White   }, { x: 6, y: 7, color: Colour.White   }, { x: 7, y: 7, color: Colour.White   }, { x: 8, y: 7, color: Colour.White   }, { x: 9, y: 7, color: Colour.White   }, { x: 10, y: 7, color: Colour.White  },
        { x: 11, y: 7, color: Colour.White  }, { x: 12, y: 7, color: Colour.White  }, { x: 13, y: 7, color: Colour.White  }, { x: 14, y: 7, color: Colour.White  }, { x: 15, y: 7, color: Colour.White  }, { x: 7, y: 0, color: Colour.White   },
        { x: 7, y: 1, color: Colour.White   }, { x: 7, y: 2, color: Colour.White   }, { x: 7, y: 3, color: Colour.White   }, { x: 7, y: 4, color: Colour.White   }, { x: 7, y: 5, color: Colour.White   }, { x: 7, y: 6, color: Colour.White   },
        { x: 7, y: 7, color: Colour.White   }, { x: 7, y: 8, color: Colour.White   }, { x: 7, y: 9, color: Colour.White   }, { x: 7, y: 10, color: Colour.White  }, { x: 7, y: 11, color: Colour.White  }, { x: 7, y: 12, color: Colour.White  },
        { x: 7, y: 13, color: Colour.White  }, { x: 7, y: 14, color: Colour.White  }, { x: 7, y: 15, color: Colour.White  }, { x: 8, y: 0, color: Colour.White   }, { x: 8, y: 1, color: Colour.White   }, { x: 8, y: 2, color: Colour.White   },
        { x: 8, y: 3, color: Colour.White   }, { x: 8, y: 4, color: Colour.White   }, { x: 8, y: 5, color: Colour.White   }, { x: 8, y: 6, color: Colour.White   }, { x: 8, y: 7, color: Colour.White   }, { x: 8, y: 8, color: Colour.White   },
        { x: 8, y: 9, color: Colour.White   }, { x: 8, y: 10, color: Colour.White  }, { x: 8, y: 11, color: Colour.White  }, { x: 8, y: 12, color: Colour.White  }, { x: 8, y: 13, color: Colour.White  }, { x: 8, y: 14, color: Colour.White  },
        { x: 8, y: 15, color: Colour.White  }, { x: 8, y: 15, color: Colour.White  }, { x: 0, y: 0, color: Colour.White   }, { x: 0, y: 1, color: Colour.White   }, { x: 1, y: 1, color: Colour.White   }, { x: 1, y: 0, color: Colour.White   },
        { x: 1, y: 14, color: Colour.White  }, { x: 1, y: 15, color: Colour.White  }, { x: 0, y: 14, color: Colour.White  }, { x: 0, y: 15, color: Colour.White  }, { x: 1, y: 15, color: Colour.White  }, { x: 15, y: 0, color: Colour.White  },
        { x: 15, y: 1, color: Colour.White  }, { x: 14, y: 0, color: Colour.White  }, { x: 14, y: 1, color: Colour.White  }, { x: 15, y: 15, color: Colour.White }, { x: 15, y: 14, color: Colour.White }, { x: 14, y: 15, color: Colour.White },
        { x: 14, y: 14, color: Colour.White },
        
    ];

    for (let frameNumber = 0; frameNumber < 40; frameNumber++) {
        const pixels: IPixelState[] = [];

        const showart = frameNumber  +100;
        const slide = frameNumber -20 ;

        if (showart) {
            pixels.push(...art.map(pixel => ({ ...pixel, x: pixel.x - slide, color: Colour.White })));
        }
        
        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });

    }

    return frames;
}
