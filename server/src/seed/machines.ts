import { MACHINE, MACHINE_TYPE } from "../types";

export const machines: MACHINE[] = [
    {
        sku: 'CM001',
        product_type: MACHINE_TYPE.COFFEE_MACHINE_SMALL,
        water_line_compatible: false
    },
    {
        sku: 'CM002',
        product_type: MACHINE_TYPE.COFFEE_MACHINE_SMALL,
        water_line_compatible: true
    },
    {
        sku: 'CM003',
        product_type: MACHINE_TYPE.COFFEE_MACHINE_LARGE,
        water_line_compatible: false
    },
    {
        sku: 'CM004',
        product_type: MACHINE_TYPE.COFFEE_MACHINE_LARGE,
        water_line_compatible: true
    },
    {
        sku: 'EM001',
        product_type: MACHINE_TYPE.ESPRESSO_MACHINE,
        water_line_compatible: false
    },
    {
        sku: 'EM002',
        product_type: MACHINE_TYPE.ESPRESSO_MACHINE,
        water_line_compatible: true
    },
];