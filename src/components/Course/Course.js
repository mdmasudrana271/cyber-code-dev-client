import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { title, image, id } = course;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img className="h-72" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <Link to={`/courses/${id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
