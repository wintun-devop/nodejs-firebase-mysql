import { Router,Request,Response } from "express";

//declare router
export const testRoute = Router();

// crate request and response
testRoute.get('/', async (req:Request, res:Response) => {
  res.send({"message":"API is working ok"})
})
