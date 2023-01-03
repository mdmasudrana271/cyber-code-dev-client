import React from "react";

const Member = ({ man }) => {
  return (
    <div data-aos="flip-left" data-aos-duration="1000" className="card w-full bg-gray-300 bg-opacity-40 backdrop-blur-md shadow-xl hover:bg-indigo-500 ">
      <figure className="">
      <img
        src={man.image}
        alt=""
        className="w-64 h-64 mx-auto rounded-full dark:bg-gray-500 aspect-square scale-50 hover:scale-75 ease-in duration-500"
      />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{man.name}</h2>
        <p>{man.position}</p>
      </div>
    </div>
  );
};

export default Member;
