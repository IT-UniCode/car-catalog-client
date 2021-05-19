export enum VEHTYPE {
  automobile = 'vehicle_type_code:VEHTYPE_V',
  pickup = 'vehicle_type_code:VEHCAT_P',
  suv = 'vehicle_type_code:VEHCAT_S',
  motorcycle = 'vehicle_type_code:VEHTYPE_C',
  ATV = 'vehicle_type_code:VEHTYPE_A',
  dirt_bike = 'vehicle_type_code:VEHTYPE_D',
  snowmobile = 'vehicle_type_code:VEHTYPE_S',
  heavy_duty_truck = 'vehicle_type_code:VEHTYPE_U',
  medium_duty_truck = 'vehicle_type_code:VEHTYPE_K',
  boat = 'vehicle_type_code:VEHTYPE_M',
  jet_ski = 'vehicle_type_code:VEHTYPE_J',
  industrial_equipment = 'vehicle_type_code:VEHTYPE_E',
  fork_lift = 'lot_features_code:LOTFEATURE_F1',
  trailer = 'vehicle_type_code:VEHTYPE_L',
  RV = 'vehicle_type_code:VEHTYPE_R',
}

export enum NLTS_Params {
  lastDay = 'expected_sale_assigned_ts_utc:[NOW/DAY-1DAY TO NOW/DAY]',
  lastWeek = 'expected_sale_assigned_ts_utc:[NOW/DAY-7DAY TO NOW/DAY]',
}

export enum FilterTypes {
  VEHT = 'filter[VEHT]',
  BODY = 'filter[BODY]',
  MAKE = 'filter[MAKE]',
  NLTS = 'filter[NLTS]',
  MODL = 'filter[MODL]',
}
