import { pods } from '../seed/pods';
import { FILTERS } from '../types';
import { conn } from './mysql';

export const populatePods = async () => {
  const data = await conn.query('SELECT * FROM `coffee_pod` limit 1');
  const rows = data[0] as any[];
  if(rows.length > 0){
    return false;
  }

  for(const pod of pods){
    await conn.query(`
    INSERT INTO coffee_pod (sku, product_type, coffee_flavor, pack_size) VALUES 
    (?, ?, ?, ?)
    `, [pod.sku, pod.product_type, pod.coffee_flavor, pod.pack_size]);
  }

  return true;
};

export const listPods = async (filters: FILTERS) => {
  const fields = Object.keys(filters).map((field: string) => ` ${field}=? `);
  const values = Object.values(filters);

  let sql = `SELECT * FROM coffee_pod`;

  if(fields.length > 0){
    sql = `${sql} WHERE ${fields.join(', ')}`
  }

  const res = await conn.query(sql, values);

  return res[0] as any;
}