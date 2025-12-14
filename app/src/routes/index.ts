import express from 'express';


// import routes
import { testRoute } from './test-route';
import { loginRoute } from './auth/login';




// declare the routes for router
export const routes = express.Router();

// register routes
routes.use("/test",testRoute)
routes.use("/auth/login",loginRoute)
