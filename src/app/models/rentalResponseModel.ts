import { RentAl } from "./rental";
import { ResponseModel } from "./responseModel";

export interface RentAlResponseModel extends ResponseModel
{
    data:RentAl[]
}