import { machines } from '../seed/machines';
import { FILTERS } from '../types';
import { conn } from '.';

export const populateMachines = async () => {
  const data = await conn.query('SELECT * FROM `coffee_machine` limit 1');
  const rows = data[0] as any[];
  if(rows.length > 0){
    return false;
  }

  for(const machine of machines){
    await conn.query(`
    INSERT INTO coffee_machine (sku, product_type, water_line_compatible) VALUES 
    (?, ?, ?)
    `, [machine.sku, machine.product_type, machine.water_line_compatible]);
  }

  return true;
};

export const listMachines = async (filters: FILTERS) => {
    const fields = Object.keys(filters).map((field: string) => ` ${field}=? `);
    const values = Object.values(filters);
  
    let sql = `SELECT * FROM coffee_machine`;

    if(fields.length > 0){
      sql = `${sql} WHERE ${fields.join(' AND ')}`
    }

    const res = await conn.query(sql, values);

    return res[0] as any;
}