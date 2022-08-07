import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "./styles.css";

export function Stripe() {

toast.configure();
function App() {
  const [product] = React.useState({
    name: "",
    price: 64998.67,
    description: ""
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://ry7v05l6on.sse.codesandbox.io/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="container">
      <div className="product">
        <h1>{product.name}</h1>
        <h3>On Sale · ${product.price}</h3>
      </div>
      <StripeCheckout
        stripeKey="pk_test_51LU06yLXVwiGJcFmsOnwIpzO1YjAfCSjZBYikvddrzaGISlBQojV6pHCLQFjKbrieucZ4sa9GEW97QLpE2kfHSYV00GQk5wSYD"
        token={handleToken}
        amount={product.price * 100}
        name=""
        billingAddress
        shippingAddress
      />
    </div>
  );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
