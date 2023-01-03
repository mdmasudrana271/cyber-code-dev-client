import React from "react";

import banner from "../../../assets/images/cta.png";
import spinner from "../../../assets/images/icon-dots.png";

const Bannertwo = () => {
  return (
    <section className="text-white  md:flex items-center justify-between mx-10">
      <div className="flex flex-col justify-center md:p-6 text-start ">
        
        <h2 className="md:text-4xl text-3xl font-bold my-10 md:my-0">Skills certificate <br /> from the Cybercodedev</h2>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={spinner}
          className="md:w-72 md:mt-[-40px] animate-ping hidden md:block"
          alt=""
        />
        <img src={banner} className="md:w-96 md:mt-[-40px]" alt="" />
      </div>
    </section>
  );
};

export default Bannertwo;
