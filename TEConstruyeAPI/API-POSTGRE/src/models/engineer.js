import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const engineer=sequelize.define('engineer',{
    name:{
        type: Sequelize.TEXT
    },
    phone:{
        type: Sequelize.INTEGER
    },
    specialty:{
        type: Sequelize.INTEGER
    },
    identification:{
        type: Sequelize.INTEGER
    },
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    }
}, {
    timestamps: false
});

export default engineer;