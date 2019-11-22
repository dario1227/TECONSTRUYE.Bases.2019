import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const material=sequelize.define('material',{
    name:{
        type: Sequelize.TEXT
    },
    unitprice:{
        type: Sequelize.INTEGER
    },
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    }
}, {
    timestamps: false
});
export default material;