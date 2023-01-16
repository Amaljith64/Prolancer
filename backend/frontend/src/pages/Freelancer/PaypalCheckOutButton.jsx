import React, { useState,useContext } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import AuthContext from '../../context/AuthContext';

function PaypalCheckOutButton(props) {
    const Navigate=useNavigate()
    const { price ,serviceid,jobid} = props
    let {user} = useContext(AuthContext)
    const dispatch = useDispatch()
    const successPaymentHandler = (price) => {
        
        Navigate('/success')
  
      }

  return (
    <PayPalButtons
      style={{
        color: "silver",
        layout: "horizontal",
        height: 48,
        tagline: false,
        shape: "pill"
      }}

      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: price
              }
            }
          ]
        })
      }}

      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order,'its paypal console')


        if(serviceid != null){
          axios.post('/client/paypalservicepayment/',{
            'user': user.user_id,
            'price':price,
            'getservice': serviceid,
            'payment_method': 'PayPal'
          })
   
        }
        else if (jobid != null){
          axios.post('/client/paypaljobpayment/',{
            'user': user.user_id,
            'price':price,
            'jobid': jobid,
            'payment_method': 'PayPal'
          })

        }
        else{
          axios.post('/client/paypalpayment/',{
            'user': user.user_id,
            'price':price
          })

        }
        successPaymentHandler(price);
       
      }}
      
      onCancel={() => {
        Navigate('/cancelled')

      }}

      onError={(err) => {
      }}

    />
  )
}

export default PaypalCheckOutButton