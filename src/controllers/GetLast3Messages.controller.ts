
import { Request, Response } from "express";
import { GetLastMessageService } from "../services/GetLast3Messages.service";



class Getlast3MessageController {
    async handle(request: Request, response: Response) {

        const service = new GetLastMessageService()

        const result = await service.execute();


        return response.json(result)
    }
}

export { Getlast3MessageController }