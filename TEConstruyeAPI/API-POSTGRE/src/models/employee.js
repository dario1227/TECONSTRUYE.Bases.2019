import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const employee=sequelize.define('employee',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name:{
        type: Sequelize.TEXT
    },
    identification:{
        type: Sequelize.INTEGER
    },
    phone:{
        type: Sequelize.INTEGER
    },
    hourprice:{
        type: Sequelize.INTEGER
    },
    projectid:{
        type: Sequelize.INTEGER,
    },
    project:{
        type: Sequelize.INTEGER,
    }
    
}, {
    timestamps: false
});

export default employee;