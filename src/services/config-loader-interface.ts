import IAnimationConfig from "../models/animation-config";

export interface IConfigLoaderService {
    getStudentName(): string;
    getStudentEmail(): string;
    loadConfig(): IAnimationConfig;
}