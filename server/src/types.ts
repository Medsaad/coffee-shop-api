export type MACHINE = {
  id?: number;
  sku: string;
  product_type: MACHINE_TYPE;
  water_line_compatible: boolean;
};

export type POD = {
  id?: number;
  sku: string;
  product_type: POD_TYPE;
  coffee_flavor: string;
  pack_size: number;
};

export type FILTERS = {
  product_type?: MACHINE_TYPE & POD_TYPE;
  water_line_compatible?: boolean;
  coffee_flavor: string;
  pack_size: number;
};

export enum MACHINE_TYPE {
  COFFEE_MACHINE_LARGE = 'COFFEE_MACHINE_LARGE',
  COFFEE_MACHINE_SMALL = 'COFFEE_MACHINE_SMALL',
  ESPRESSO_MACHINE = 'ESPRESSO_MACHINE',
}

export enum POD_TYPE {
  COFFEE_POD_LARGE = 'COFFEE_POD_LARGE',
  COFFEE_POD_SMALL = 'COFFEE_POD_SMALL',
  ESPRESSO_POD = 'ESPRESSO_POD',
}

export enum FLAVOR {
  COFFEE_FLAVOR_VANILLA = 'COFFEE_FLAVOR_VANILLA',
  COFFEE_FLAVOR_CARAMEL = 'COFFEE_FLAVOR_CARAMEL',
  COFFEE_FLAVOR_PSL = 'COFFEE_FLAVOR_PSL',
  COFFEE_FLAVOR_MOCHA = 'COFFEE_FLAVOR_MOCHA',
  COFFEE_FLAVOR_HAZELNUT = 'COFFEE_FLAVOR_HAZELNUT',
}
