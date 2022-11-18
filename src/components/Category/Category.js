import React from "react";
import { Link } from "react-router-dom";

const Category = ({course}) => {
    const {title,id} = course;
  return (
    <div>
      <div className="btn-group btn-group-vertical my-3 px-2 sm:flex">
        <Link to={`/courses/${id}`}><button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800">{title}</button></Link>
        {/* <Link to={`/courses/${id}`}><button className="btn btn-primary">{title}</button></Link> */}
      </div>
    </div>
  );
};

export default Category;
