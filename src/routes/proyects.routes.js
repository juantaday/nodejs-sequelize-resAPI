import  {Router} from "express";

import {getProyects, createProyect, updateProyect, deleteProyect, getProyectById, getTaskByProyectId}  from "../controllers/proyects.controller.js"

const router = Router();


router.get ('/proyect',getProyects);

router.post ('/proyect', createProyect);

router.put ('/proyect/:id',updateProyect);

router.delete ('/proyect/:id', deleteProyect);

router.get ('/proyect/:id',getProyectById);

router.get ('/proyect/:id/tasks',getTaskByProyectId);

export default router ;


