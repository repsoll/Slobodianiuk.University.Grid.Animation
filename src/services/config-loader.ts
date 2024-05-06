import IAnimationConfig from "../models/animation-config";
import { IConfigLoaderService } from "./config-loader-interface";
import { AndriiKozynyiConfigLoaderService } from "./students/andrii-kozynyi";
import { AndriiSlobodianiukConfigLoaderService } from "./students/andrii-slobodianiuk";
import { ArsenShvediukConfigLoaderService } from "./students/arsen-shvediuk";
import { BardakovConfigLoaderService } from "./students/bardakov";
import { BohdanDzirbaConfigLoaderService } from "./students/bohdan-dzirba";
import { DaniilHulchenkoLoaderService } from "./students/daniil-hulchenko";
import { DenysVelychkoConfigLoaderService } from "./students/denys-velychko";
import { DenysZarubaConfigLoaderService } from "./students/denys-zaruba";
import { DmytroSerafymConfigLoaderService } from "./students/dmytro_serafym";
import { IlliaChumakConfigLoaderService } from "./students/illia-chumak";
import { MariiaHusakConfigLoaderService } from "./students/mariia-husak";
import { MykhailoHorpyniukConfigLoaderService } from "./students/mykhailo-horpyniuk";
import { MykytaSirykConfigLoaderService } from "./students/mykyta-siryk";
import { NazarPohonchukConfigLoaderService } from "./students/nazar-pohonchuk";
import { NazarYarishConfigLoaderService } from "./students/nazar-yarish";
import { OlehGeriiConfigLoaderService } from "./students/oleh-gerii";
import { OlehMuzychukConfigLoaderService } from "./students/oleh-muzychuk";
import { OlehSuvorovConfigLoaderService } from "./students/oleh-suvorov";
import { OlesandrBiletskyiConfigLoaderService } from "./students/oleksandr-biletskyi";
import { OleksandrZhovanukConfigLoaderService } from "./students/oleksandr-zhovanuk";
import { OleksandrZhukConfigLoaderService } from "./students/oleksandr-zhuk";
import { OleksiiPylypenkoConfigLoaderService } from "./students/oleksii-pylypenko";
import { OstapBlystsivConfigLoaderService } from "./students/ostap-blystsiv";
import { RuslanHavrilyakConfigLoaderService } from "./students/ruslan-havrilyak";
import { StepTkachivskyiConfigLoaderService } from "./students/stepan-tkachivskyi";
import { LozoviiTarasConfigLoaderService } from "./students/taras-lozovii";
import { TarasRohulyaConfigLoaderService } from "./students/taras-rohulya";
import { ValeriymanuilykConfigLoaderService } from "./students/valerii-manuilyk";
import { VictoriaKondratskaConfigLoaderService } from "./students/victoria-kondratska";
import { MyronVikaConfigLoaderService } from "./students/vika-myron";
import { VitaliLyloConfigLoaderService } from "./students/vitali-lylo";
import { VitaliiSynytskyiConfigLoaderService } from "./students/vitalii-synytskyi";
import { MalishVitaliyConfigLoaderService } from "./students/vitalii.malysh";
import { VitaliyHavronaConfigLoaderService } from "./students/vitaliy-havrona";
import { VoievodaVladislavConfigLoaderService } from "./students/vlad-voievoda";
import { KoarizVolodymyrConfigLoaderService } from "./students/volodymyr-kozariz";
import { YaroslavHolovkoConfigLoaderService } from "./students/yaroslav-holovko";
import { YaroslavPasichnykConfigLoaderService } from "./students/yaroslav-pasichnyk";
import { YaroslavTsvykConfigLoaderService } from "./students/yaroslav-tsvyk";
import { YuriiRobakConfigLoaderService } from "./students/yurii-robak";
import { ZakalaOleksandrConfigLoaderService } from "./students/zakala-oleksandr";

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
      new ZakalaOleksandrConfigLoaderService(),
      new ValeriymanuilykConfigLoaderService(),
      new LozoviiTarasConfigLoaderService(),
      new NazarYarishConfigLoaderService(),
      new StepTkachivskyiConfigLoaderService(),
      new VitaliLyloConfigLoaderService(),
      new OlehGeriiConfigLoaderService(),
      new DenysVelychkoConfigLoaderService(),
      new YuriiRobakConfigLoaderService(),
      new OlesandrBiletskyiConfigLoaderService(),
      new OlehSuvorovConfigLoaderService(),
      new KoarizVolodymyrConfigLoaderService(),
      new OlehMuzychukConfigLoaderService(),
      new OleksiiPylypenkoConfigLoaderService(),
      new MykhailoHorpyniukConfigLoaderService(),
      new DmytroSerafymConfigLoaderService(),
      new VictoriaKondratskaConfigLoaderService(),
      new AndriiKozynyiConfigLoaderService(),
      new MariiaHusakConfigLoaderService(),
      new MykytaSirykConfigLoaderService(),
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
