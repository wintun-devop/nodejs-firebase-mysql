import express from 'express';


// import routes
import { testRoute } from './test-route';



// declare the routes for router
export const routes = express.Router();

// register routes
routes.use("/test",testRoute)
