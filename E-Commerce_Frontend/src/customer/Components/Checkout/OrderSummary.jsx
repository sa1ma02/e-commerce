import React, { useState, useEffect } from "react";
import { Badge, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../Redux/Customers/Order/Action";
import AddressCard from "../adreess/AdreessCard";


const OrderSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { order } = useSelector((state) => state);

  const [paymentMessage, setPaymentMessage] = useState("");

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId, dispatch]);

  const handleCreatePayment = () => {
  
    setPaymentMessage("Your order is currently pending. It will be delivered to you soon. Thank you for your patience.");
  };

  return (
    <div className="space-y-5">
      <div className="p-5 shadow-lg rounded-md border">
        <AddressCard address={order.order?.shippingAddress} />
      </div>
      <div className="lg:grid grid-cols-3 relative justify-between">
        <div className="lg:col-span-2 ">
          <div className="space-y-3">
            {order.order?.orderItems.map((item) => (
              <CartItem key={item.id} item={item} showButton={false} />
            ))}
          </div>
        </div>
        <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0 ml-5">
          <div className="border p-5 bg-white shadow-lg rounded-md">
            <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
            <hr />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price ({order.order?.totalItem} item)</span>
                <span>{order.order?.totalPrice}DH</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-700">-{order.order?.discounte}DH</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-700">50DH</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span className="text-green-700">{order.order?.totalDiscountedPrice + 50}DH</span>
              </div>
            </div>
            <Button
              onClick={handleCreatePayment}
              variant="contained"
              type="submit"
              sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
            >
              Validate
            </Button>
            {paymentMessage && (
              <div className="mt-4 p-3 bg-yellow-100 text-yellow-700 rounded-md">
                {paymentMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

