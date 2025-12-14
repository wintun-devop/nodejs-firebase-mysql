import { Router, Request, Response } from "express";
import { signInUser } from "../../utils/firebase";


export const loginRoute = Router();

loginRoute.post("/", async (request: Request, response: Response): Promise<any> => {
    try {
        const reqBody = await request.body
        const { password, email } = reqBody
        const result = await signInUser(email,password);
        console.info(result)
        return response.status(200).json({ status: "success", "message": "success", result })
    } catch (e) {
        console.log("error", e)
        return response.status(500).json({ status: "error", message: "Internal server error!" })
    }
});