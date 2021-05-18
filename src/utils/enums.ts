export enum VEHTYPE_Auto {
  automobile = 'vehicle_type_code:VEHTYPE_V',
  pickup = 'vehicle_type_code:VEHCAT_P',
  suv = 'vehicle_type_code:VEHCAT_S',
}

export enum VEHTYPE_Moto {
  motorcycle = 'vehicle_type_code:VEHTYPE_C',
  ATV = 'vehicle_type_code:VEHTYPE_A',
  ditt_bikes = 'vehicle_type_code:VEHTYPE_D',
  snowmobile = 'vehicle_type_code:VEHTYPE_S',
}

export enum VEHTYPE_Truck {
  heavy_duty_truck = 'vehicle_type_code:VEHTYPE_U',
  medium_duty_truck = 'vehicle_type_code:VEHTYPE_K',
}

export enum VEHTYPE_Boat {
  boats = 'vehicle_type_code:VEHTYPE_M',
  jet_ski = 'vehicle_type_code:VEHTYPE_J',
}

export enum VEHTYPE_Special {
  industrial_equipment = 'vehicle_type_code:VEHTYPE_E',
  fork_lifts = 'lot_features_code:LOTFEATURE_F1',
}

export enum VEHTYPE_Trailer {
  traler = 'vehicle_type_code:VEHTYPE_L',
}

export enum VEHTYPE_RV {
  RV = 'vehicle_type_code:VEHTYPE_R',
}

export enum FilterTypes {
  VEHT = 'filter[VEHT]',
  BODY = 'filter[BODY]',
}
