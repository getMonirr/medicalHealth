import baseApi from "../../api/baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // create payment client secret
    createPaymentClientSecret: builder.mutation({
      query: (payload) => {
        return {
          url: "/payments/create-payment-intent",
          method: "POST",
          body: payload,
        };
      },
    }),

    // payment for booking
    makePayment: builder.mutation({
      query: (payload) => {
        return {
          url: "/payments/make-payment",
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const { useCreatePaymentClientSecretMutation, useMakePaymentMutation } =
  paymentApi;
