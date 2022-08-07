import Sequelize from 'sequelize-cockroachdb';
import db from '../db/connection';
import Repository from './repository';

const Tribe = db.define('Tribe', {
    id_tribe: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_organization: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

Tribe.hasMany(Repository, { foreignKey: 'id_tribe' });

export default Tribe;