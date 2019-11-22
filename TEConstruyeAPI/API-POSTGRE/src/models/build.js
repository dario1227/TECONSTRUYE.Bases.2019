import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const build=sequelize.define('build',{
    name:{
        type: Sequelize.TEXT
    },
    location:{
        type: Sequelize.INTEGER
    },
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    rooms:{
        type: Sequelize.INTEGER,
    },
    bathrooms:{
        type: Sequelize.INTEGER,
    },
    floor:{
        type: Sequelize.INTEGER,
    },
    groundsize:{
        type: Sequelize.INTEGER,
    },
    buildsize:{
        type: Sequelize.INTEGER,
    },
    owner:{
        type: Sequelize.TEXT,
    },
    proyect:{
        type: Sequelize.INTEGER,
    },
    proyectname:{
        type: Sequelize.TEXT,
    }
}, {
    timestamps: false
});
export default build;