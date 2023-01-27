import {Proyect} from "../models/Proyect.js"
import  handleHttp from "../utils/error.handle.js"
import {Task} from "../models/Task.js";

export const createProyect = async (req, res, next)=>{
    try {
        var todos = await Proyect.create({...req.body});
        return res
        .status(200)
        .json({message:'Proyect created successfully',data:todos});
    } catch (err) {
        console.log(err);
        handleHttp(res,"ERROR_CONTROLLER_GETPROYECT",err);
    }

};

export const getProyects = async (req, res, next)=>{
    try {
        const allProcts=await Proyect.findAll({});
        return res
        .status(200)
        .json({message:'Proyect created successfully', data:allProcts});
    } catch (err) {
        console.log(err);
        handleHttp(res,"ERROR_CONTROLLER_GETPROYECT",err);
    }
};


export const updateProyect = async (req, res, next) =>{
    try {
        const {id}=req.params;
       const result =   await Proyect.update({...req.body},{where:{id}});
       if ( result == 0)
        {
          return  res
            .status(500)
            .json ({message:`not fount proyect by id: ${id}`});
        }

       console.log (`this is result:`,result);

        const proyect = await Proyect.findByPk(id);
    
        res
        .status(200)
        .json ({mesagge:``, data:proyect});
    } catch (error) {
        console.log(error);
        handleHttp(res,"ERROR_CONTROLLER_UPDATE_PROYECT",error);
    }

};

export const deleteProyect =  async (req,res, next)=>{
    try {
        const {id} = req.params;
        const result  = await Proyect.destroy({where:{id}});
        if (result ==0)
            return res.status(500).json({message:`not removed Proyect by id ${id}`});
        else
           return res.status(200).json ({message:`Remove proyect successfully`,id:id});
    } catch (error) {
        handleHttp(res,'ERROR_CONTROLLER_DELETE_PROYECT',error);
    }
   
};

export  const getProyectById= async (req,res,next)=>{
   try {
    const  {id} = req.params;
    const proyect =  await Proyect.findByPk(id);
    res.status(200).json({message:`Proyect fetched successfully`, data:proyect});

   } catch (error) {
    handleHttp(res,'ERROR_CONTROLLER_GET_BYID_PROYECT',error);
   }
};

export const getTaskByProyectId =async(req, res, next)=>{
    try {
        var {id}= req.params;

        const data  = await Task.findAll({where:{proyectId:id}});
        res.send(data);
     
    } catch (error) {
        handleHttp(res,'ERROR_GET_TASK_BY_PROYECTID_CONTROLLER',error);
    }

};