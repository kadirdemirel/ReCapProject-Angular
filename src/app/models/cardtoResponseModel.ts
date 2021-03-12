import { CarDto } from "./cardto";
import { ResponseModel } from "./responseModel";

export interface CarDtoResponseModel extends ResponseModel
{
    data:CarDto[]
}