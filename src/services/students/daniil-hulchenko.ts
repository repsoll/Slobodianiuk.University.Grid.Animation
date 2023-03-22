import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class  DaniilHulchenkoLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'daniil-hulchenko';
    }

    public getStudentEmail(): string {
        return 'lvov.danik@gmail.com';
    }

   
    public loadConfig(): IAnimationConfig {
        return {
            name: 'Daniil',
            surname: 'Hulchenko',
            email: this.getStudentEmail(),
            projectName: 'EventTracker',
            personalProjectLink: 'https://silver-side.azurewebsites.net',
            header: GetHeader(),
            frames: GenerateFrames(0)
        }
    }
    
}
const Logo: IPixelState[] = [];

function Make_Logo(){
    Logo.push({x:15,y:0,color:Colour.White});
    Logo.push({x:14,y:0,color:Colour.White});
    for(let i=0;i<5;i++){
        Logo.push({x:16-i,y:i,color:Colour.White});
        Logo.push({x:16-i-1,y:i,color:Colour.White});
        Logo.push({x:16-i-2,y:i,color:Colour.White});
    }

    for(let i=4;i<9;i++){
        Logo.push({x:i,y:9+6,color:Colour.White});
        Logo.push({x:i,y:9-6,color:Colour.White});
    }
    for(let i=7;i<12;i++){
        Logo.push({x:6+6,y:i,color:Colour.White});
        Logo.push({x:6-6,y:i,color:Colour.White});
    }

    Logo.push({x:3,y:4,color:Colour.White});
    Logo.push({x:2,y:5,color:Colour.White});
    Logo.push({x:1,y:6,color:Colour.White});

    Logo.push({x:1,y:12,color:Colour.White});
    Logo.push({x:2,y:13,color:Colour.White});
    Logo.push({x:3,y:14,color:Colour.White});


    Logo.push({x:9,y:14,color:Colour.White});
    Logo.push({x:10,y:13,color:Colour.White});
    Logo.push({x:11,y:12,color:Colour.White});

    Logo.push({x:9,y:4,color:Colour.White});
    Logo.push({x:10,y:5,color:Colour.White});
    Logo.push({x:11,y:6,color:Colour.White});

    Logo.push({x:11,y:5,color:Colour.White});


    Logo.push({x:4,y:6,color:Colour.White});
    Logo.push({x:5,y:7,color:Colour.White});
}

function GetHeader():IFrame{
    Make_Logo();
    const frame:IFrame = {
        frameNumber: 0,
        pixels:Logo
    };
    return frame;
}

function ArtistMode():IFrame[]{
    const frame:IFrame[] = [{
        frameNumber: 0,
        pixels:Logo
    }];
    return frame;
}

function GenerateFrames(artistMode=0): IFrame[] {
    Make_Logo();
    if(artistMode==1) return ArtistMode();
    const frames: IFrame[] = [];
    
    let b=0;
    for (let FrameNumber = 0; FrameNumber < 50; FrameNumber++) {
        const Slide = FrameNumber - 20 ;
        if(Slide==0){
            for(let i=FrameNumber;i<=30;i++)
            frames.push({
                frameNumber: i,
                pixels: Logo,
            });
            b=1;
        }
        const pixels: IPixelState[] = [...Logo.map(pixel => ({ y:pixel.y, x: pixel.x + Slide-(10*b) ,  color: Colour.White}))];
        //const pixels: IPixelState[] = [...Logo.map(pixel => ({ ...pixel, x: pixel.x + Slide-(10*b) }))];
        frames.push({
            frameNumber: FrameNumber,
            pixels: pixels,
        });
    }

    return frames;
}
