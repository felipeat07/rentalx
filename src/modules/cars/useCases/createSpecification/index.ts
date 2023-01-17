import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationControlller } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


const specificationRepository = new SpecificationRepository()

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository)

const createSpecificationController = new CreateSpecificationControlller(createSpecificationUseCase)

export { createSpecificationController }