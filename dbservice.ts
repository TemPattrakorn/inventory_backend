import { Client } from 'ts-postgres'
const pool = new Client(
    {
        user: 'postgres',
        password: 'noteearea',
        database: 'inventory',
        host: 'localhost',
        port: '5433'
    }
);
//initDB function to connect to our Database once before making requests
export const initDB =async function(){
  await pool.connect();
}