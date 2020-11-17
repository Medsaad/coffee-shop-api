import { machines } from '../seed/machines';
import { conn } from './mysql';

export const populateMachines = async () => {
  const data = await conn.query('SELECT * FROM `coffee_machine` limit 1');
  const rows = data[0] as any[];
  if(rows.length > 0){
    return false;
  }

  for(const machine of machines){
    await conn.query(`
    INSERT INTO coffee_machine (sku, product_type) VALUES 
    (?, ?)
    `, [machine.sku, machine.product_type]);
  }

  return true;
};