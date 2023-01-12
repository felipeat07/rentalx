import { Request, Response } from "express";

import { ListCategoriesuseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoriesuseCase) {}

  handle(request: Request, response: Response) {
    const all = this.listCategoryUseCase.execute();

    return response.json(all);
  }
}

export { ListCategoriesController };
