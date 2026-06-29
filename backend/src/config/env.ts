// backend/src/config/env.ts

/**
 * Loads environment variables and exposes them in one place.
 * Why?
 * Instead of using process.env everywhere in the project,
 * we centralize configuration here.
 */

// global imports 
import dotenv from "dotenv"

// load variables from .env into process.env
dotenv.config()

// Any environment variable used by the application should be exposed through this object.

export const env = {
   PORT: Number(process.env.PORT) || 5001,
   NODE_ENV: process.env.NODE_ENV || "development",
}

