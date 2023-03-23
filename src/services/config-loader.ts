import IAnimationConfig from "../models/animation-config";
import { IConfigLoaderService } from "./config-loader-interface";
import { AndriiSlobodianiukConfigLoaderService } from "./students/andrii-slobodianiuk";
import { VitaliiSynytskyiConfigLoaderService } from "./students/vitalii-synytskyi";
import { OleksandrZhukConfigLoaderService } from "./students/oleksandr-zhuk";
import { YaroslavPasichnykConfigLoaderService } from "./students/yaroslav-pasichnyk";
import { YaroslavTsvykConfigLoaderService } from "./students/yaroslav-tsvyk";
import { OstapBlystsivConfigLoaderService } from "./students/ostap-blystsiv";
import { DenysZarubaConfigLoaderService } from "./students/denys-zaruba";
import { ZakalaOleksandrConfigLoaderService } from "./students/zakala-oleksandr";

export class MainConfigLoaderService {
  private services: IConfigLoaderService[];

  constructor() {
    this.services = [
      new AndriiSlobodianiukConfigLoaderService(),
      new OleksandrZhukConfigLoaderService(),
      new ZakalaOleksandrConfigLoaderService(),
      new YaroslavPasichnykConfigLoaderService(),
      new YaroslavTsvykConfigLoaderService(),
      new OstapBlystsivConfigLoaderService(),
      new DenysZarubaConfigLoaderService(),
      new VitaliiSynytskyiConfigLoaderService()
    ];
  }

  public loadAllConfigs(): IAnimationConfig[] {
    const results = [];
    let counter = 0;

    for (const service of this.services) {
      let name = "";
      let email = "";

      try {
        name = service.getStudentName();
        email = service.getStudentEmail();
        const config = service.loadConfig();
        config.id = counter.toString();

        results.push(config);
        counter++;
      } catch (exc) {
        console.error(`Error occured while processing student '${name}' - ${email}.`, exc);
      }
    }

    return results;
  }
}
