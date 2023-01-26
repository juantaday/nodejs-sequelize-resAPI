import {Task} from "../models/Task.js";
import  handleHttp from "../utils/error.handle.js"

export const  createTask = async (req,res,next)=>{
    try {
        const newTask = await Task.create({...req.body});
        return res.status(200).json({message:`Task created successfully`, date:newTask});
    } catch (error) {
        handleHttp(res,`ERROR_CONTROLLER_CREATE_TASK`,error);
    }
};

export const getAllTasks = async (req,res,next)=>{
    try {
        const allTask = await Task.findAll({});
        return res.status(200).json({message:`Task get all successfully`, data:allTask});
        
    } catch (error) {
        handleHttp(res,`ERROR_CONTROLLER_GET_TASK`,error);
    }
};