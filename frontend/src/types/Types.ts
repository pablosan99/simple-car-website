export type Category = "CombustionEngine" | "ElectricEngine" | "Hybrid" | "City" | "SUV" | "GT";
export type CombustionEngine = "1.0 MT" | "1.0 AT" | "1.4 MT" | "1.5 MT" | "1.5 AT" | "1.6 AT" | "2.0 AT";
export type ElectricEngine = "39kWh" | "64kWh";
export type HybridEngine = "1.6 AT Plug-in";
export type EquipmentVersion = "S" | "M" | "L" | "Business" | "GTLine"
export type ExtraEquipment =
  |"Heated seats"
  |"Leather seats"
  |"Navigation"
  |"Parking assist"
  |"Rear view camera"
  |"Seat heating"
  |"Seat memory"
  |"Seat ventilation"
  |"Sunroof"
  |"Tinted glass"
export type Color = "Silver" | "Black" | "Yellow" | "LightBlue" | "Pink";
type EquipmentInVersion = {
  [key in EquipmentVersion]: ReadonlyArray<ExtraEquipment>
};
export type Model = {
  code: string;
  name: string;
  categories: Category[];
  engineTypes: Array<CombustionEngine|ElectricEngine|HybridEngine>;
  colors: Color[];
  versions: EquipmentVersion[];
  equipment: EquipmentInVersion;
}

export type SelectedModel = {
  code: string;
  engineType: CombustionEngine;
  version: EquipmentVersion;
  color: Color;
  equipment?: ExtraEquipment[];
}

export type ConfiguratorType = {
  models: Model[]
}
