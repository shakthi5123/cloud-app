// Handle HTTP requests and responses.
import { Request, Response } from 'express'

export const ProjectController = {
  async create(req: Request, res: Response) {
    console.log('Request body:', req.body)

    return res.status(201).json({
      success: true,

      message: 'Controller reached successfully ',

      data: req.body,
    })
  },
}
