import { Customer } from "./customer";

export interface Rental{
    id:number,
    carId:number,
    customerId:number,
    rentDate:Date,
    returnDate:Date,
    customer:Customer
}