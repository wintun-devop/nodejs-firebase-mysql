import { Router, Request, Response } from "express";

export const loginRoute = Router();

loginRoute.post("/", async (request: Request, response: Response): Promise<any> => {
    try {
        const reqBody = await request.body
        const { password, email } = reqBody
        return response.status(200).json({ status: "success", "message": "success", result: {password,email} })
    } catch (e) {
        console.log("error", e)
        return response.status(500).json({ status: "error", message: "Internal server error!" })
    }
});