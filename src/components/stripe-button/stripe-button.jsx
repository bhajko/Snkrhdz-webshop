import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const pulishableKey = "pk_test_mz3TxAbHYpNJf842vLmiHB6q00KRqJzVyA";

  const onToken = token => {
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="SNEAKERHEADZ Co."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={pulishableKey}
    />
  );
};

export default StripeButton;
