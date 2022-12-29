import React from "react";
import { Link } from "react-router-dom";

const Category = ({ course }) => {
  const { title, id } = course;
  return (
    <div>
      <div className="btn-group btn-group-vertical my-3 px-2 sm:flex">
        <Link to={`/courses/${id}`}>
          <a
            href="#_"
            class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-xl group"
          >
            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-600 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-indigo-700 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              {title}
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Category;
