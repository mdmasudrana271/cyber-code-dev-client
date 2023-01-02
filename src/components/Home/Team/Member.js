import React from "react";

const Member = ({ man }) => {
  return (
    <div data-aos="flip-up" className="card w-full bg-base-100 shadow-xl hover:bg-indigo-500">
      <figure className="px-10 pt-10">
      <img
        src={man.image}
        alt=""
        className="w-64 h-64 mx-auto rounded-full dark:bg-gray-500 aspect-square scale-55 hover:scale-75 ease-in duration-500"
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
