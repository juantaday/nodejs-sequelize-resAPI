import {DataTypes} from "sequelize";

import {connection} from "../database/database.js"



export const Task = connection.define('task',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    done: {
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
},
{
    timestamps:false
});
