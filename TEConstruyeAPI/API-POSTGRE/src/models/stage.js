import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const stage=sequelize.define('stage',{
    description:{
        type: Sequelize.TEXT
    },
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    }
}, {
    timestamps: false
});
export default stage;