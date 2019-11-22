import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const location=sequelize.define('location',{
    province:{
        type: Sequelize.TEXT
    },
    canton:{
       type: Sequelize.TEXT
    },
    district:{
        type: Sequelize.TEXT

    },
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    }
}, {
    timestamps: false
});
export default location;