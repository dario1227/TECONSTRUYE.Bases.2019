import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const specialty=sequelize.define('specialty',{
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
export default specialty;