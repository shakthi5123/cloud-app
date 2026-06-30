// This is the brain.
/**

 * Project Service

 * Responsibility:
 * Contains ALL business logic related to Projects.
 * This layer should:
 * Validate business rules
 * Coordinate repositories
 * Throw meaningful errors

 * This layer should NEVER:
 * Read req/res
 * Return HTTP responses
 * Talk directly to Express
 */


import { ProjectRepository } from "./project.repository";

export class ProjectService {
   // dependency injection 
   // Instead of creating a new repository ourselves, we receive one from the outside.
   constructor(
      private readonly projectRespository: ProjectRepository
   ) {}

   // create a new project 
   async create(data: {
      name: string;
      githubUrl: string;
   }) {
      // business rule: project name should not be empty
      if (!data.name) {
         throw new Error("Project name is required");
      }

      // business rule: github URL should not be empty
      if(!data.githubUrl) {
         throw new Error("Github URL is required");
      }

      // save to database
      return this.projectRespository.create(data);

   }

   // get all projects
   async getProjects() {
      return this.projectRespository.findMany();
   }

   // find a project by id 
   async getProject(id: string) {
      return this.projectRespository.findById(id);
   }

   // delete a project 
   async deleteProject(id: string) {
      return this.projectRespository.deleteById(id);
   }
}