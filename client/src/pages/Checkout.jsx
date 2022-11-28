import React, { useState, useEffect } from "react";
import { useShop } from '../context/shopContext'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import '../assets/css/stripe.css'
import axios from "axios";

const stripePromise = loadStripe('pk_test_51IPd6xG3jRLaAqrOZJhSs6zeAhWmh2bEmzl8fMYfjCYpSp024GLs0xadWNUXCc9BNfGhVQfDtKjRMUH1PbDrQ9Oi00DymNqLPT')

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const params = useParams()
  const navigate = useNavigate()
  const { getOneProd } = useShop()


  const [isLoading, setIsLoading] = useState(false);
  const [prod, setProd] = useState({
    id: params.id,
    name: "",
    description: "",
    images: "",
    price: "",
    seller: ""
  })

  useEffect(() => {
    (async () => {
      if (params.id) {
        const prod = await getOneProd(params.id)
        setProd({
          id: params.id,
          name: prod.name,
          description: prod.description,
          images: prod.images.url,
          price: prod.price.$numberDecimal,
          seller: prod.seller
        })
      }
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setIsLoading(true);

    if (!error) {
      const { id } = paymentMethod
      try {
        const { data } = await axios.post(
          '/api/stripe',
          {
            id,
            amount: prod.price * 100,
            desc: prod.name
          }
        )
        navigate('/success/'+params.id)
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
    }
  };

  console.log(!stripe || isLoading)

  return (
    <>
      <div className="hero   min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={prod.images} className="max-w-xs rounded-lg shadow-2xl" />
          <div className="ml-8 grid justify-items-center">
            <h1 className="text-5xl font-bold">{prod.name}</h1>
            <h1 className="text-5xl mt-5 mb-5">${prod.price}</h1>
            <form id="payment-form mt-5" onSubmit={handleSubmit}>
              <CardElement id="payment-element" />
              <button className="btn btn-primary w-36 mt-2" disabled={isLoading || !stripe || !elements} id="submit">
                <span id="button-text">
                  {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                </span>
              </button>
            </form>

          </div>
        </div>
      </div>

    </>
  );
}

export function Checkout() {

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    appearance,
  };

  if (localStorage.getItem('user')) {
    return (
      <Elements options={options} stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
    )
  }

  return (
    <>
      <h1>Nothing here </h1>
    </>
  );

}
