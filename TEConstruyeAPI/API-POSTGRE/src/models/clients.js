import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const client=sequelize.define('client',{
    name:{
        type: Sequelize.TEXT
    },
    phone:{
        type: Sequelize.INTEGER
    },
    identification:{
        type: Sequelize.INTEGER
    },
    username:{
        type: Sequelize.TEXT,
        primaryKey: true
    }
    
}, {
    timestamps: false
});

export default client;