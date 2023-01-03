import React from "react";
import courses from "../../../assets/images/online-courses-.png";
import certificate from "../../../assets/images/online-certificate.png";
import instractor from "../../../assets/images/instruction.png";
const State = () => {
  return (
    <div data-aos="fade-right" className="stats shadow-xl h-[40vh] w-full bg-gray-400 bg-opacity-40 backdrop-blur-md">
      <div className="stat flex justify-evenly items-center">
        <div className="stat-figure text-primary">
          <img src={courses} alt="" className="w-20" />
        </div>
        <div>
          <h2 className="text-3xl font-semibold">
            Ultimate <br /> Online Courses
          </h2>
        </div>
      </div>

      <div className="stat flex justify-evenly items-center">
        <div className="stat-figure text-secondary">
          <img src={certificate} alt="" className="w-20" />
        </div>
        <div>
          <h2 className="text-3xl font-semibold">
            Online <br /> Certification
          </h2>
        </div>
      </div>

      <div className=" stat flex justify-evenly items-center">
        <div className="stat-figure text-secondary">
          <img src={instractor} alt="" className="w-20" />
        </div>
        <div>
          <h2 className="text-3xl font-semibold">
            Top <br /> Instructor
          </h2>
        </div>
      </div>
    </div>
  );
};

export default State;
