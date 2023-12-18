import {Customer__Output} from "../../grpc/pb/Customer";

export interface ICustomer extends Customer__Output {
  password: string;
}
