import { Sequelize } from "sequelize";

const db = new Sequelize('data_user', 'root','',{
    host: 'localhost',
    dialect : 'mysql'
})
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'test_db'
//   });

// kalo tampa orm
export default db;