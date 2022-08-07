import Sequelize from 'sequelize-cockroachdb';
import db from '../db/connection';
import Tribe from './tribe';

const Organization = db.define('Organization', {
    id_organization: {
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

Organization.hasMany(Tribe, { foreignKey: 'id_organization' });

export default Organization;