import React from "react";
import Contact from "../Contact/Contact";
import Banner from "./Banner/Banner";
import CategoryCourses from "./CategoryCourses/CategoryCourses";
import Team from "./Team/Team";

const Home = () => {
  return (
    <section>
      <div className="bg-indigo-600"><Banner></Banner></div>
      <div className="mt-20">
        <h2 className="text-5xl font-bold text-center hover:text-indigo-500">Our Courses</h2>
        <CategoryCourses></CategoryCourses>
      </div>
      <div className="mt-20">
      <h2 className="text-5xl font-bold text-center hover:text-indigo-500">Our Team</h2>
        <Team></Team>
      </div>
      <div className="my-20">
        <Contact></Contact>
      </div>
    </section>
  );
};

export default Home;
