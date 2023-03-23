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
import { MalishVitaliyConfigLoaderService } from "./students/vitalii.malysh";
import { ArsenShvediukConfigLoaderService } from "./students/arsen-shvediuk";
import { DaniilHulchenkoLoaderService } from "./students/daniil-hulchenko";
import { VitaliyHavronaConfigLoaderService } from "./students/vitaliy-havrona";
import { RuslanHavrilyakConfigLoaderService } from "./students/ruslan-havrilyak";
import { MyronVikaConfigLoaderService } from "./students/vika-myron";
import { TarasRohulyaConfigLoaderService } from "./students/taras-rohulya";
import { OleksandrZhovanukConfigLoaderService } from "./students/oleksandr-zhovanuk";
import { BohdanDzirbaConfigLoaderService } from "./students/bohdan-dzirba";
import { YaroslavHolovkoConfigLoaderService } from "./students/yaroslav-holovko";
import { BardakovConfigLoaderService } from "./students/bardakov";
import { VitaliLyloConfigLoaderService } from "./students/vitali-lylo";
import { OlehGeriiConfigLoaderService } from "./students/oleh-gerii";
import { DenysVelychkoConfigLoaderService } from "./students/denys-velychko";
import { YuriiRobakConfigLoaderService } from "./students/yurii-robak";

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
      new DaniilHulchenkoLoaderService(),
      new ArsenShvediukConfigLoaderService(),
      new VitaliyHavronaConfigLoaderService(),
      new RuslanHavrilyakConfigLoaderService(),
      new MyronVikaConfigLoaderService(),
      new TarasRohulyaConfigLoaderService(),
      new OleksandrZhovanukConfigLoaderService(),
      new BohdanDzirbaConfigLoaderService(),
      new MalishVitaliyConfigLoaderService(),
      new YaroslavHolovkoConfigLoaderService(),
      new BardakovConfigLoaderService(),
      new VitaliLyloConfigLoaderService(),
      new OlehGeriiConfigLoaderService(),
      new DenysVelychkoConfigLoaderService(),
      new YuriiRobakConfigLoaderService(),
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
