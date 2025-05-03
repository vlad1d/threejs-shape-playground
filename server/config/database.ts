import { Sequelize } from 'sequelize';

// Simple database connection
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite'
});

export default sequelize;