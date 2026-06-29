// backend/src/Server.ts 
// Responsible ONLY for starting the HTTP server.

// local imports 
import app from "./app";
import { env } from "./config/env";

const server = app.listen(env.PORT, () => {
   console.log(`CloudForge API is running on Port: ${env.PORT} in ${env.NODE_ENV} mode`);
})

server.on("error", (error: NodeJS.ErrnoException) => {
   if (error.code === "EADDRINUSE") {
      console.error(`Port ${env.PORT} is already in use.`)
   }else {
      console.error(error)
   }

   process.exit(1)
})