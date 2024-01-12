import ApiError from "../exceptions/api-errors";
import authService from "../service/auth-service";
import {RegistrationRequest, RegistrationResponse} from "./types/auth-grpc-controller.type";

class AuthGRPCController {
  async registration(
    req: RegistrationRequest,
    res: RegistrationResponse,
  ) {
    try {
      if (!req.request.email || !req.request.password) {
        throw ApiError.BadRequest("Ошибка валидации, заполните все поля");
      }

      const {email, password} = req.request;

      const customerWithTokens = await authService.registration(email, password);

      res(null, customerWithTokens)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log("Обработать ошибку");
      // next(error);
    }
  }
}

export default new AuthGRPCController();
