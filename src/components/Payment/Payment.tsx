"use client";

import { config } from "@/config";
import { useCreatePaymentClientSecretMutation } from "@/libs/redux/features/payment/paymentApi";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Title from "antd/es/typography/Title";
import { useEffect } from "react";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(config.stripeKey as string);

const Payment = ({
  paymentId,
  price,
}: {
  paymentId: string;
  price: number;
}) => {
  // get client secret
  const [createClientSecret, clientSecretResult] =
    useCreatePaymentClientSecretMutation();

  const clientSecret = clientSecretResult?.data?.data?.client_secret;

  const option = {
    clientSecret,
  };

  // get client secret with useEffect
  useEffect(() => {
    const bodyData = {
      amount: price,
      currency: "usd",
      method: "Credit Card",
      status: "Pending",
      description: `Payment for order ${paymentId}`,
    };

    const getClientSecret = async () => {
      if (paymentId && price) {
        const cSecret = await createClientSecret(bodyData).unwrap();
      }
    };

    getClientSecret();
  }, [createClientSecret, paymentId, price]);
  return (
    <div>
      {clientSecret && (
        <div>
          <Title title="Payment with Card">
            For payment use the dummy card number: 4242 4242 4242 4242, any
            future date, and any CVC.
          </Title>
          <Elements stripe={stripePromise} options={option}>
            <CheckOutForm
              paymentInformation={{ paymentId, price, clientSecret }}
            />
          </Elements>
        </div>
      )}
    </div>
  );
};

export default Payment;
