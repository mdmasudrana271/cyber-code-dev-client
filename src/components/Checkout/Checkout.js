import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Checkout = () => {
    const course = useLoaderData()
    const {title, price} = course;
    const {user} = useContext(AuthContext)

    const [active,setActive] = useState(true)

    const handleClick = ()=>{
        toast.success('congratualtion you have successfully enrolled in the course.')
    }

  return (
    <div className="flex">

      {/* payment card */}

      <div className=" md:w-5/12 mx-auto my-10 p-8 rounded-xl bg-gray-100 text-black shadow-xl">
        <h1 className="text-3xl mb-10 font-semibold">{title}</h1>
        <p className="flex items-start mb-2">{user?.displayName}</p>
        <p className="flex items-start mb-2">{user?.email}</p>
        <div className="">
          <div>
            <h2 className="text-2xl flex justify-start font-semibold">
              Checkout
            </h2>
            
          </div>
          <div className="form-control">
            <p className="flex justify-start my-4 font-semibold">
              Select payment method
            </p>
            <label className="label cursor-pointer">
              <div className="flex gap-2">
                <img
                  className="w-6"
                  src="https://logos-download.com/wp-content/uploads/2022/01/BKash_Logo_icon-700x662.png"
                  alt=""
                />
                <span className="label-text">Bkash payment</span>
              </div>
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-blue-500"
              />
            </label>
            <label className="label cursor-pointer">
              <div className="flex gap-2">
                <img
                  className="w-6"
                  src="https://image.shutterstock.com/image-vector/cards-icon-logo-design-600w-1564057351.jpg"
                  alt=""
                />
                <span className="label-text">Stripe</span>
              </div>
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-blue-500"
              />
            </label>
            <label className="label cursor-pointer">
              <div className="flex gap-2">
                <img
                  className="w-6"
                  src="https://seeklogo.com/images/N/nagad-logo-7A70CCFEE0-seeklogo.com.png"
                  alt=""
                />
                <span className="label-text">Nagad payment</span>
              </div>
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-blue-500"
              />
            </label>
            <label className="label cursor-pointer">
              <div className="flex gap-2">
                <img
                  className="w-6"
                  src="https://1000logos.net/wp-content/uploads/2021/11/VISA-logo-500x281.png"
                  alt=""
                />
                <span className="label-text">Visa Card</span>
              </div>
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-blue-500"
              />
            </label>
          </div>
          <div className="flex justify-between items-center my-5 text-xl font-semibold">
            <p>Total</p>
            <p>{price}</p>
          </div>
          <div className="flex items-center gap-2 my-5">
              <input onClick={()=>setActive(!active)} type="checkbox" className="checkbox" />
              <span className="">
                i agree to{" "}
                <Link className="text-red-400">terms and condition</Link>
              </span>
            </div>
          <button disabled={active} onClick={handleClick} className="btn btn-secondary w-full my-5">Complete payment</button>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Checkout;
