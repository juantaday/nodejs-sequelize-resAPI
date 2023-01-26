import express from "express";
import  proyectRouter from "./routes/proyects.routes.js";
import taskRouter from "./routes/tasks.routes.js";


const app = express();


//middleware
app.use(express.json());


app.use(proyectRouter);
app.use(taskRouter);

export default app;