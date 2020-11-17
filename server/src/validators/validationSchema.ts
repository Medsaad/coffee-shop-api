import * as yup from 'yup';
import { FILTERS, FLAVOR, MACHINE_TYPE, POD_TYPE } from '../types';

export const podSchema = yup
  .object<FILTERS>()
  .shape({
    product_type: yup
      .mixed<POD_TYPE>()
      .optional()
      .oneOf(Object.values(POD_TYPE)),
    coffee_flavor: yup.mixed<FLAVOR>().optional().oneOf(Object.values(FLAVOR)),
    pack_size: yup.number().optional().positive().integer(),
  })
  .test(
    'keys-correct',
    'You can only filter by: product_type, coffee_flavor or pack_size',
    (filters) => {
      const filterKeys = Object.keys(filters as FILTERS);
      if (filterKeys.length === 0) {
        return true;
      }

      const allowedFilters = ['product_type', 'coffee_flavor', 'pack_size'];
      return allowedFilters.every((f) => filterKeys.includes(f));
    },
  );

export const machineSchema = yup
  .object<FILTERS>()
  .shape({
    product_type: yup
      .mixed<MACHINE_TYPE>()
      .optional()
      .oneOf(Object.values(MACHINE_TYPE)),
    water_line_compatible: yup.bool().optional(),
  })
  .test(
    'keys-correct',
    'You can only filter by: product_type or water_line_compatible',
    (filters) => {
      const filterKeys = Object.keys(filters as FILTERS);
      if (filterKeys.length === 0) {
        return true;
      }

      const allowedFilters = ['product_type', 'water_line_compatible'];
      return allowedFilters.every((f) => filterKeys.includes(f));
    },
  );
