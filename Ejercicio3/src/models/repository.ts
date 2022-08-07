import Sequelize from 'sequelize-cockroachdb';
import db from '../db/connection';
import Metric from './metric';

const Repository = db.define('Repository', {
    id_repository: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    create_time: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING(1),
        allowNull: false,
        validate: {
            isIn: {
                args: [['A', 'I']],
                msg: "Allow status  A=Active, I=Inactive"
            }
        }
    },
    state: {
        type: Sequelize.STRING(1),
        allowNull: false,
        validate: {
            isIn: {
                args: [['E', 'D', 'A']],
                msg: "Allow state  E=Enable, D=Disable, A=Archived"
            }
        }
    },
    id_tribe: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});
Repository.hasOne(Metric, { foreignKey: 'id_repository' });

export default Repository;