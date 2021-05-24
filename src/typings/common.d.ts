declare interface IData {
  content: IContent[];
  total: number;
  vehicle: IFacetData;
  facetFields?: {
    newly: IFacetData;
    marks: IFacetData;
    models: IFacetData;
    years: IFacetData;
    mileage: IFacetData;
    locations: IFacetData;
    saleNames: IFacetData;
    saleDates: IFacetData;
    documents: IFacetData;
    sources: IFacetData;
    damages: IFacetData;
    body: IFacetData;
    fuelTypes: IFacetData;
    engineTypes: IFacetData;
    transmission: IFacetData;
    driveTrain: IFacetData;
    cylinders: IFacetData;
  };
}

declare interface IFacetData {
  displayName: string;
  facetCounts: IFacetCount[];
  quickPickCode: string;
  query: string;
  count: string;
  uri: string;
}

declare interface IFacetCount {
  displayName: string;
  query: string;
  count: string;
  uri: string;
}

declare interface IDataResult {
  [key: string]: IFacetData;
}

declare interface IPageData {
  currentPage: number;
  page: number;
  size: number;
  defaultSort: boolean;
  sort: string[];
}

declare interface IVEHT {
  [key: string]: string;
}

declare interface IImageListItem {
  url: string;
}

declare interface IFilter {
  [key: string]: string[];
}

declare interface IContent {
  ld: string;
  lcy: number;
  mkn: string;
  km: string;
  ln: number;
  fv: string;
  locCity: string;
  locCountry: string;
  locState: string;
  td: string;
  orr: number;
  ord: string;
  lcd: string;
  dd: string;
  bstl: string;
  vehTypDesc: string;
  clr: string;
  egn: string;
  cy: string;
  tsmn: string;
  drv: string;
  ft: string;
  hk: string;
  sdd: string;
  hb: number;
  bnp: number;
  syn: string;
  ad: number;
  syn: string;
  al: string;
  aan: number;
  gr: string;
  lu: number;
  brand: string;
  tims: string;
  cuc: string;
  la: string;
  ltnte: string;
  imageList: IImageListItem[];
}

declare interface IVehicleData {
  key: string;
  value: string | number;
}

declare interface ICustomsResult {
  vehicleCost: number;
  customsPrice: number;
  excise: number;
  tax: number;
  pension_fund: number;
}
