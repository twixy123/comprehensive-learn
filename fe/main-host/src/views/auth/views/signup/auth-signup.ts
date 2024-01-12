import {AuthResponse, CustomerAuthRequestPayload} from "@/grpc/code-gen/tech-market_pb.js";
import {TechMarketClient} from "@/grpc/code-gen/Tech-marketServiceClientPb";

import { defineComponent, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import $infra from "@/infrastructure/index";
import $service from "@/service/index";

import AuthSignForm from "@/views/auth/components/auth-sign-form/auth-sign-form.vue";

import type { IAuthRequest } from "@/infrastructure/auth/auth.types";

export default defineComponent({
  name: "AuthSignup",

  components: {
    AuthSignForm,
  },

  setup () {
    const router = useRouter();
    const msg = "Регистрация";
    const loading = ref(false);

    const onSubmit = async (formDataPayload: IAuthRequest) => {
      loading.value = true;

      try {
        // const authResponse = await $infra.auth.signup(formDataPayload);
        const authResponse = await getOrder(formDataPayload);

        // eslint-disable-next-line no-console
        console.log("authResponse", authResponse);
        // $service.auth.setAuthData(authResponse);
        router.push({ name: "main-profile-update" });
      } catch (error) {
        console.log("erroe auth signup", error);
      } finally {
        loading.value = false;
      }
    };

    function getOrder(formDataPayload: IAuthRequest): Promise<AuthResponse.AsObject> {
      const client = new TechMarketClient("http://localhost:3000");
      const request = new CustomerAuthRequestPayload();

      request.setEmail(formDataPayload.email)
      request.setPassword(formDataPayload.password)

      return client
        .registration(request, null)
        .then((response: AuthResponse) => {
          return response.toObject();
        })
        .catch((err) => {
          console.error(err.message);
          throw new Error(err.message);
        });
    }

    return {
      RouterLink,
      msg,
      loading,
      onSubmit,
    };
  },
});
