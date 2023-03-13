import IFrame from "./frame";

export default interface IAnimationConfig {
    id?: string;
    name: string;
    surname: string;
    email: string;
    projectName: string;
    personalProjectLink: string;
    header: IFrame;
    frames: IFrame[];
}