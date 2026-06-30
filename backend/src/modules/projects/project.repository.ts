// Database only. the repository only talks to prisma only 

/**

 * Project Repository
 * Responsibility:
 * Encapsulates every database operation related to Projects.
 * This layer is the ONLY place allowed to talk to Prisma.

 * It should NOT contain:
 * - HTTP logic
 * - Request validation
 * - Business rules

 */

import prisma from "../../config/prisma";

export class ProjectRepository {
   // create a new project 
   async create(data: { name: string; githubUrl: string }) {
      return prisma.project.create({
         data,
      });
   }

   // get all projects
   async findMany() {
      return prisma.project.findMany({
         orderBy: {
            createdAt: "desc",
         }
      });
   }

   // get project by id 
   async findById(id: string) {
      return prisma.project.findUnique({
         where: { id },
      });
   }

   // delete project by id 
   async deleteById(id: string) {
      return prisma.project.delete({
         where: { id },
      });
   }
}