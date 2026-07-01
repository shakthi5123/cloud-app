// Which URL exists?
// Project routes define every http endpoint related to projects.

import { Router } from "express";
import { ProjectController } from "./project.controller";

const projectRouter = Router();
// ProjectController is exported as an object with handlers, not a class — use it directly
const controller = ProjectController;

// Create project
projectRouter.post("/", controller.create);

export default projectRouter