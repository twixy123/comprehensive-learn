import {Customer__Output} from "../../grpc/pb/Customer";

export default class CustomerDTO implements Customer__Output {
  email: string;
  uuid: string;
  name: string;
  surname: string;
  age: number;

  constructor(model: Customer__Output) {
    this.email = model.email || "";
    this.uuid = model.uuid || "";
    this.name = model.name || "";
    this.surname = model.surname || "";
    this.age = model.age;
  }
}
