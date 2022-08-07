import Sequelize from 'sequelize-cockroachdb';
import db from '../db/connection';

const Metric = db.define('Metric', {
    id_repository: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    coverage: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    bugs: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    vulnerabilities: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    hotspot: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    code_smells: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

export default Metric;