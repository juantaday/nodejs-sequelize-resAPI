import { Task } from "../models/Task.js";
import handleHttp from "../utils/error.handle.js"

export const createTask = async (req, res, next) => {
    try {
        const newTask = await Task.create({ ...req.body });
        return res.status(200).json({ message: `Task created successfully`, date: newTask });
    } catch (error) {
        handleHttp(res, `ERROR_CONTROLLER_CREATE_TASK`, error);
    }
};

export const getAllTasks = async (req, res, next) => {
    try {
        const allTask = await Task.findAll({});
        return res.status(200).json({ message: `Task get all successfully`, data: allTask });

    } catch (error) {
        handleHttp(res, `ERROR_CONTROLLER_GET_TASK`, error);
    }
};

export const updateTask = async (req, res, next) => {
    try {
        var { id } = req.params;
        const result = await Task.update({ ...req.body }, { where: { id } })
        if (result == 0)
            return res.status(500).json({ message: `Not update Task by id ${id}` });
        else
            return res.status(200).json(`update Task successfully`);

    } catch (error) {
        handleHttp(res, `ERRO_UPDATE_TASK_CONTROLLER`, error)
    }
};

export const deleteTask = async (req, res, next) => {
    try {
        var { id } = req.params;
        const result = await Task.destroy({ where: { id } });
        if (result == 0)
            return res.status(500).json({ message: `Not delete Task by id ${id}` });
        else
            return res.status(200).json(`delete Task successfully`);
    } catch (error) {
        handleHttp(res,`ERROR_DELETE_TASK_CONTROLLER`,error);
    }
};

export const  getTaskById =async (req,res, next)=>{
    try {
        var {id}= req.params;
        const result = await Task.finByPk(id);
        res.status(200).json({message:`Task fetched successfully`, data:result});
    
    } catch (error) {
        handleHttp(res,`ERROR_GET_TASK_BY_IDCONTROLLER`, error);
    }

};