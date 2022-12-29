import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { title, image, _id } = course;
  console.log(course);
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img className="h-72" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <Link to={`/courses/${_id}`}>
            <a
              href="#_"
              class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-indigo-600 rounded-lg group"
            >
              <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span class="relative">Details</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
