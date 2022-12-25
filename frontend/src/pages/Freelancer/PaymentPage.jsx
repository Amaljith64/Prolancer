import React,{ useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import PaypalCheckOutButton from "./PaypalCheckOutButton";
import { useLocation ,useNavigate } from 'react-router-dom'


import QueryString from 'query-string'


const PaymentPage = () => {
  const price = 100;
  const Navigate = useNavigate()
  const location = useLocation()


  useEffect(() => {
  
    const values = QueryString.parse(location.search)
    console.log(values)
    if (values.success) {
        Navigate('/success')
    }

    if (values.canceled) {
        Navigate("/cancelled")
    }
  }, [])
  

  return (
    <div>
      <PaypalCheckOutButton price={price} />
      <form action={`/client/create-checkout-session/${price}/`} method="POST">
        <button
          type="submit"
          className="btn btn-primary btn-rounded fs-4"
          style={{ width: "100%", borderRadius: "24px" }}
        >
          <strong>Pay with Card</strong>
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
