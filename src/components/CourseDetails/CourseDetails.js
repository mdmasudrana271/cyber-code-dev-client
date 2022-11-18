import React from "react";
import { FaDownload, FaStar, FaUserFriends } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();



const CourseDetails = () => {
  const course = useLoaderData();
  const {image, title, rating, price, description, instructor, enroll, id} = course;
  return (
    <div style={{width: '63%', height: '100%'}} ref={ref} className="flex flex-col  mx-auto my-20 space-y-6 bg-white overflow-hidden rounded-lg shadow-md text-black">
      <div>
      <div className="flex justify-center items-center px-5">
          <h2 className="md:text-4xl font-bold my-4">{title}</h2>
          
          <Pdf targetRef={ref} filename="course details.pdf">
          {({ toPdf }) => <button className="px-5 text-xl" onClick={toPdf}><FaDownload></FaDownload></button>}
        </Pdf>
        </div>
        <img
          className="object-cover rounded w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          src={image}
          alt=""
        />
        <p className="text-lg text-black px-5">
         {description}
        </p>
      </div>
      <div className="flex flex-wrap justify-between px-5">
        <div className="space-x-2">
          <p className="flex items-center text-xl"><FaStar className="text-amber-400 mx-1"></FaStar> <span className="text-black">{rating}</span></p>
          <p className="my-3 text-xl">price: {price}</p>
        </div>
        <div className="flex justify-end space-x-2 text-sm dark:text-gray-400">
            <p className="text-black text-xl flex items-center gap-2">Enrolled: {enroll} <FaUserFriends/></p>
        </div>
      </div>
      <div className="flex justify-end space-x-2 text-sm dark:text-gray-400 px-5">
            <p className="text-black font-bold">Instructor: {instructor}</p>
        </div>
        <div className="flex justify-end space-x-2 text-sm dark:text-gray-400 p-5">
            <Link to={`/coursedetails/${id}`}><button className="btn btn-success text-bold">Get premium access.</button></Link>
        </div>
    </div>
  );
};

export default CourseDetails;
