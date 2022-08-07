import Sequelize from 'sequelize-cockroachdb';
import db from '../db/connection';

const Organization = db.define('Organization', {
    id_organizacion: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

export default Organization;