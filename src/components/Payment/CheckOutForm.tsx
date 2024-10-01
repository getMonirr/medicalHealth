"use client";

import { selectUser } from "@/libs/redux/features/auth/authSlice";
import { useMakePaymentMutation } from "@/libs/redux/features/payment/paymentApi";
import { useAppSelector } from "@/libs/redux/hooks";
import {
  CardElement,
  //   PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import { toast } from "react-toastify";
import "./form.css";

const CheckOutForm = ({
  paymentInformation,
}: {
  paymentInformation: {
    price: number;
    paymentId: string;
    clientSecret: string;
  };
}) => {
  const [paymentErr, setPaymentErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { price, clientSecret } = paymentInformation;
  const stripe = useStripe();
  const elements = useElements();

  const user = useAppSelector(selectUser);

  const [createMakePayment] = useMakePaymentMutation();

  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setPaymentErr(error?.message as any);
      setIsLoading(false);
    } else {
      console.log("paymentMethod", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: "anonymous",
          },
        },
      });

    // const { error } = await stripe.confirmPayment({
    //   elements,
    //   confirmParams: {
    //     return_url: "https://example.com/order/123/complete",
    //   },
    // });

    // console.log({ error });

    if (confirmError) {
      console.log(confirmError);
      setPaymentErr(confirmError?.message as any);
      setIsLoading(false);
    }

    if (paymentIntent?.status === "succeeded") {
      // store payment info in DB
      const paymentInfo = {
        amount: price,
        transactionId: paymentIntent.id,
        currency: "usd",
        method: "Credit Card",
        description: `Payment for order ${paymentInformation.paymentId} and transaction id ${paymentIntent.id}`,
        doctorId: paymentInformation.paymentId,
        userId: user?.id,
      };

      console.log({ paymentInfo });

      const makePayment = await createMakePayment(paymentInfo).unwrap();

      if (makePayment.success) {
        toast.success("Payment successful");

        // redirect to payment success page
        router.push(
          `/payment/success?paymentId=${paymentInformation.paymentId}`
        );
      } else {
        toast.error("Payment failed");

        // redirect to payment failed page
        router.push(
          `/payment/failed?paymentId=${paymentInformation.paymentId}`
        );
      }
    }
  };

  return (
    <div>
      {paymentErr && <p className="text-red-500 mb-2">{paymentErr}</p>}
      <div className="">
        <form
          className="medCamp bg-slate-400 p-12 rounded-xl"
          onSubmit={handleSubmit}
        >
          {/* <PaymentElement /> */}
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <div className="text-center max-w-xs ml-auto mr-48 mt-4">
            <Button
              htmlType="submit"
              icon={<BiRightArrow />}
              disabled={!stripe || isLoading || !clientSecret}
            >
              Pay
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOutForm;
