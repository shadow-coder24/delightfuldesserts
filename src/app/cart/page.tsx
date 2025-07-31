"use client";
import React, { useContext, useEffect, useState } from "react";
import cartContext from "../../context/cartcontext";
import { CartItem } from "@/type/cart";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Addtocartbutton } from "@/component/addtocartbutton";

function Cart() {
  const { cart } =
    useContext(cartContext);

  const [totalprice, setTotalPrice] = useState(0);

  const [prodquantity, setQuantity] = useState(0);
  const [finalprice, setFinalPrice] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(0);
  const [gst, setGst] = useState(0);

  const [showOrderPlaced, setShowOrderPlaced] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calculatePrices = () => {
    let pricesum = 0;
    let quantitysum = 0;
  
    Object.keys(cart).forEach((product) => {
      const item: CartItem = cart[product];
      pricesum += item.productprice * item.quantity;
      quantitysum += item.quantity;
    });
  
    const shipping = Math.ceil(pricesum / 100);
    const tax = Math.ceil((pricesum / 100) * 5);
    const lastprice = pricesum + shipping + tax;
  
    return { pricesum, quantitysum, shipping, tax, lastprice };
  };

  
  
  
  useEffect(() => {
    const { pricesum, quantitysum, shipping, tax, lastprice } = calculatePrices();
    setTotalPrice(pricesum);
    setQuantity(quantitysum);
    setShippingCharge(shipping);
    setGst(tax);
    setFinalPrice(lastprice);
  }, [calculatePrices, cart]);





  const OrderPlaced = ({ setQuantity, setShowOrderPlaced }) => {
    const { clearCart } = useContext(cartContext);

    const handleOrderComplete = () => {
      setQuantity(0); // Reset quantity in the UI
      setShowOrderPlaced(false); // Hide the modal and remove blur
    };
    

    return (
      <div className="fixed inset-0 flex justify-center items-center bg-transparent z-50">
        <div className="w-[370px] h-[250px] flex flex-col justify-center items-center bg-pink-700 rounded-lg shadow-xl z-20 ease-in-out translate-x-2">
          <Image
            src="/otherimage/cakebox.png"
            alt="order placed"
            width={100}
            height={100}
          />
          <p className="text-2xl font-bold text-yellowmuted mb-4">
            Order Placed Successfully
          </p>
          <button
            className="w-[100px] h-[50px] flex justify-center items-center text-browndark bg-pinkpale rounded-md hover:bg-pinksoft font-semibold transition text-lg"
            onClick={() => {
              clearCart();
              handleOrderComplete;
            }}
          >
            Ok
          </button>
        </div>
      </div>
    );
  };

  return prodquantity === 0 ? (
    <div className="flex flex-col gap-2 justify-center items-center bg-pinksoft min-w-full min-h-full pt-[120px]">
      <Image
        src="/otherimage/emptycart.png"
        alt="Emptycart"
        width={290}
        height={290}
      />
      <p className="text-browndark font-bold text-3xl pb-4">
        Nothing In The Cart Right Now
      </p>
      <Link
        href="/"
        className="bg-yellowmuted p-4 rounded-lg flex justify-center items-center text-browndark font-bold"
      >
        Add Product
      </Link>
    </div>
  ) : (
    <div className="bg-pinksoft p-1">
      <div className={`relative ${showOrderPlaced ? "blur-sm" : ""}`}>
        <div className="flex flex-row h-[70px] bg-yellowmuted items-center">
          <Link href="/">
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ color: "brown", width: "30px", height: "30px" }}
              className="p-[8px] pt-[9.5px]"
            ></FontAwesomeIcon>
          </Link>
          <span className="text-browndark text-center font-bold text-3xl pl-[7px]">
            My Cart
          </span>
        </div>
        <div className="pt-7 flex flex-row gap-7">
          <div className="flex flex-col gap-4 pl-3">
            {Object.keys(cart).map((product, key) => (
              <div
                key={key}
                className="bg-pinkpale flex flex-row p-3 pl-4 gap-8"
              >
                <img
                  src={cart[product].productimage}
                  alt={cart[product].productname}
                  style={{ width: "150px", height: "150px" }}
                />
                <div className="w-[700px] flex flex-col gap-3">
                  <p className="text-browndark text-xl font-extrabold pt-[12px]">
                    {cart[product].productname}
                  </p>
                  <p className="text-browndark italic pt-[3px]">
                    {cart[product].productdescription}
                  </p>
                  <div className="flex flex-row justify-between">
                    <span className="text-browndark text-lg pt-[5px]">
                      ₹.{cart[product].productprice}
                    </span>
                    <div className="pr-[30px] pt-[10px]"><Addtocartbutton product={cart[product]} /></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-black w-[390px] flex flex-col gap-3">
            <div className="bg-pinkpale">
              <div>
                <p className="text-xl pt-[5px] font-bold text-center">
                  Your Bill
                </p>
              </div>
              <div className="flex flex-row pr-[20px] pl-[15px] pb-[8px] justify-between pt-4">
                <p className="font-semibold">Subtotal: </p>
                <span>₹.{totalprice}</span>
              </div>
              <div className="flex flex-row pr-[20px] pl-[15px] pb-[8px] justify-between">
                <p className="font-semibold">Shipping :</p>
                <span>₹.{shippingCharge}</span>
              </div>
              <div className="flex flex-row pr-[20px] pl-[15px] pb-[8px] justify-between">
                <p className="font-semibold">GST(5%):</p>
                <span>₹.{gst}</span>
              </div>
              <div className="w-[370px] h[1px] bg-browndark border-black ml-2 border-[1px]"></div>
              <div className="flex flex-row pr-[20px] pl-[15px] pb-[8px] justify-between pt-[7px]">
                <p className="text-xl font-semibold">Total : </p>
                <span className="text-xl font-semibold">₹.{finalprice}</span>
              </div>
            </div>
            <div>
              <button
                className="w-[390px] h-[70px] bg-yellowmuted text-browndark font-bold text-2xl flex justify-center items-center rounded-md"
                onClick={() => {
                  setShowOrderPlaced(true);
                }}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {showOrderPlaced && <OrderPlaced setQuantity={setQuantity} setShowOrderPlaced={undefined} />}
    </div>
  );
}

export default Cart;
