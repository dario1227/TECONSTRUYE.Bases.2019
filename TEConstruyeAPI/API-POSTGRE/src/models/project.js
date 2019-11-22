import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const project=sequelize.define('project',{
    name:{
        type: Sequelize.TEXT
    },
    hours:{
        type: Sequelize.INTEGER
    },
    stageid:{
       type: Sequelize.INTEGER
    },
    stage:{
        type: Sequelize.TEXT

    },
    begin:{
        type: Sequelize.DATE,
    },
    ends:{
        type: Sequelize.DATE,
    },
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    }
}, {
    timestamps: false
});
export default project;