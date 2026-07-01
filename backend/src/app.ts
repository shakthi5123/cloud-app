// backend/src/app.ts
/**
 * app.ts
 * This file is responsible for creating and configuring
 * the Express application.
 * It DOES NOT start the server.
 */

// global imports
import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"

// local imports
import projectRouter from "./modules/projects/project.routes"


const app = express()

// global middleware
// parsing incoming JSON requests
app.use(express.json())
// enabling cors for all frontend to communicate with the backend
app.use(cors())
// add helmet common HTTP security headers 
app.use(helmet())
// logs every HTTP requests
app.use(morgan("dev"))


// health check route verify the api is running 
app.get("/", (_req, res) => {
   res.json({
      success: true,
      message: "CloudForge API is running",
      data: null
   })
})

// feature routes
app.use("/api/v1/projects", projectRouter)


export default app;

