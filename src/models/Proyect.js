import {DataTypes} from "sequelize";
import {Task} from "./Task.js";
import {sequelize} from "../database/database.js"

export const Proyect = sequelize.define('proyect',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    },
    priority: {
        type:DataTypes.INTEGER
    },
    description: {
        type:DataTypes.STRING
    }
});

Proyect.hasMany(Task,{
    foreignKey:{
        name: 'proyectId',
        allowNull: false
    },
    sourceKey:'id'
});

Task.belongsTo(Proyect,{  
     foreignKey:{
        name: 'proyectId',
        allowNull: false
    },
     targetId:'id'
});
