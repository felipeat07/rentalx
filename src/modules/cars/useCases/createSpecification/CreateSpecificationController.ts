import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationControlller {

    constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

    handle(request: Request, response: Response){
        const { name, description } = request.body;
  
        this.createSpecificationUseCase.execute({ name, description });
        return response.status(201).send();
    }
}

export { CreateSpecificationControlller }