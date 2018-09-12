import Sequelize from 'sequelize';
import { dbConfig } from '../config/dbconfig';

import { DbConfig } from '../src/model';

export interface Db {
    dbConfig: DbConfig;
    connect: Sequelize.Sequelize;
}

let connect: Sequelize.Sequelize;

if (process.env.DATABASE_URL) {
    connect = new Sequelize(process.env.DATABASE_URL);
} else {
    connect = new Sequelize(dbConfig.database, dbConfig.connection.user, dbConfig.connection.password, {
        dialect: 'mysql'
    });
}

export const db: Db = {
    dbConfig,
    connect
};
