import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

export default function flutterpay() {
  const config = {
    public_key: "FLWPUBK-f001ddfe6a31a9c0c2829b2548ff8121-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "horpeelo@gmail.com",
      phonenumber: "08178435354",
      name: "Balogun Abdulganiyy",
    },
    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {
      console.log("cancelled");
    },
  };

  return (
    <div>
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}
