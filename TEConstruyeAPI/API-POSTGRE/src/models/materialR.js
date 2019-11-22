import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const materialR=sequelize.define('materialregistry',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    material:{
        type: Sequelize.INTEGER
    },
    name:{
        type: Sequelize.TEXT
    },
    price:{
        type: Sequelize.INTEGER
    },
    quantity:{
       type: Sequelize.INTEGER
    },
    build:{
        type: Sequelize.INTEGER
     },
     buildname:{
        type: Sequelize.TEXT
     },
    total:{
        type: Sequelize.INTEGER,
    },
    stage:{
        type: Sequelize.INTEGER,
    },
}, {
    timestamps: false
});
export default materialR;