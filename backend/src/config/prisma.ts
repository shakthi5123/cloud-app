/**

 * Prisma Configuration
 * Responsibility:
 * Creates and exports a SINGLE Prisma Client instance.
 * Why?
 * PrismaClient manages a pool of database connections.
 * Creating multiple instances can exhaust the database's
 * available connections.
 * Rule:
 * Never call `new PrismaClient()` anywhere else in the project.
 */

import { PrismaClient } from '../../generated/prisma/client'

const prisma = new PrismaClient({
  log:
      process.env.NODE_ENV === 'development'
   ?   ['query', 'error', 'warn']
   : ["error"]
})

export default prisma
