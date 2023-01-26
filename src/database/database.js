import  Sequelize from "sequelize";

export const sequelize = new Sequelize('proyectsdb', 'root', '', {
    host: 'localhost',
    dialect:"mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });
