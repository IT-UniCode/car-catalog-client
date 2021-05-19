declare interface IData {
  content: IContent[];
  total: number;
  facetFields: any[];
  marks: string[];
  models: string[],
  vehicleCount: IVehicleCount;
}
declare interface IContent {
  ld: string; //Год, название
  lcy: number; //Год
  mkn: string; //Марка
  km: string; //Модель

  ln: number; //№ лота
  fv: string; //VIN
  locCity: string; //Город
  locCountry: string; //Страна
  locState: string; //Штат
  td: string; //+Тип документа
  orr: number; //Одометр
  ord: string; //Тип пробега
  lcd: string; //Основные моменты
  dd: string; //Основные повреждения
  bstl: string; //Тип кузова
  vehTypDesc: string; //Классификация
  clr: string; //Цвет
  egn: string; //Тип двигателя
  cy: string; //Количество цилиндров
  tmtp: string; //Коробка передач
  drv: string; //Привод
  ft: string; //Топливо
  hk: string; //Ключи

  hb: number; //Текущяя ставка
  bnp: number; //Минимальная ставка для покупки лота
  syn: string; //Местонахождение лота
  ad: number; //Дата продажи(мс)

  syn: string; //Площадка
  al: string; //Участок(Очередь)
  aan: number; //№ позиции
  gr: string; //сетка/ряд

  lu: number; //Последнее обновление(мс)
  brand: string; //COPART

  tims: string; //IMG
  cuc: string; //Валюта
  la: string; //Оценочная розничная стоимость
}

declare interface IPageData {
  currentPage: number;
  page: number;
  size: number;
  defaultSort: boolean;
  sort: string[];
}

declare interface IFilter {
  [key: string]: string[];
}

declare interface IVEHTItem {
  count: number;
  displayName: string;
  query: string;
  uri: string;
  quickPickCode: string;
}

declare interface IVehicleCount {
  [key: string]: number;
  automobiles: number;
  pickuptrucks: number;
  suvs: number;
  motorcycle: number;
  atvs: number;
  dirtbikes: number;
  snowmobile: number;
  heavydutytrucks: number;
  mediumdutyboxtrucks: number;
  boats: number;
  jetskis: number;
  industrialequipment: number;
  forklifts: number;
  trailers: number;
  recreationalveh: number;
}
