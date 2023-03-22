import IAnimationConfig from "../models/animation-config";
import { IConfigLoaderService } from "./config-loader-interface";
import { AndriiSlobodianiukConfigLoaderService } from "./students/andrii-slobodianiuk";
import { VitaliiSynytskyiConfigLoaderService } from "./students/vitalii-synytskyi";
import { OleksandrZhukConfigLoaderService } from "./students/oleksandr-zhuk";
import { YaroslavPasichnykConfigLoaderService } from "./students/yaroslav-pasichnyk";
import { YaroslavTsvykConfigLoaderService } from "./students/yaroslav-tsvyk";
import { OstapBlystsivConfigLoaderService } from "./students/ostap-blystsiv";
import { DenysZarubaConfigLoaderService } from "./students/denys-zaruba";
import { VoievodaVladislavConfigLoaderService } from "./students/vlad-voievoda";
import { IlliaChumakConfigLoaderService } from "./students/illia-chumak";
import { NazarPohonchukConfigLoaderService } from "./students/nazar-pohonchuk";
import { ArsenShvediukConfigLoaderService } from "./students/arsen-shvediuk"; 
import { VitaliyHavronaConfigLoaderService } from "./students/vitaliy-havrona";
import { RuslanHavrilyakConfigLoaderService } from "./students/ruslan-havrilyak"; 
import { MyronVikaConfigLoaderService } from "./students/vika-myron"; 
import { TarasRohulyaConfigLoaderService } from "./students/taras-rohulya"; 
import { OleksandrZhovanukConfigLoaderService } from "./students/oleksandr-zhovanuk";
import { BohdanDzirbaConfigLoaderService } from "./students/bohdan-dzirba"; 

export class MainConfigLoaderService {
  private services: IConfigLoaderService[];

  constructor() {
    this.services = [
      new AndriiSlobodianiukConfigLoaderService(),
      new OleksandrZhukConfigLoaderService(),
      new YaroslavPasichnykConfigLoaderService(),
      new YaroslavTsvykConfigLoaderService(),
      new OstapBlystsivConfigLoaderService(),
      new DenysZarubaConfigLoaderService(),
      new VitaliiSynytskyiConfigLoaderService(),
      new VoievodaVladislavConfigLoaderService(),
      new IlliaChumakConfigLoaderService(),
      new NazarPohonchukConfigLoaderService(),
      new ArsenShvediukConfigLoaderService(),
      new VitaliyHavronaConfigLoaderService(),
      new RuslanHavrilyakConfigLoaderService(),
      new MyronVikaConfigLoaderService(),
      new TarasRohulyaConfigLoaderService(),
      new OleksandrZhovanukConfigLoaderService(),
	    new BohdanDzirbaConfigLoaderService(),
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
