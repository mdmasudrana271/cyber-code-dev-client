import React from "react";
import Contact from "../Contact/Contact";
import FAQ from "../FAQ/FAQ";
import Banner from "./Banner/Banner";
import Bannertwo from "./Bannertwo/Bannertwo";
import CategoryCourses from "./CategoryCourses/CategoryCourses";
import State from "./State/State";
import Team from "./Team/Team";

const Home = () => {
  return (
    <section className="overflow-hidden">
      <div className="bg-indigo-600"><Banner></Banner></div>
      <div className="mt-20">
        <h2 className="text-5xl font-bold text-center hover:text-indigo-500">Our Courses</h2>
        <CategoryCourses></CategoryCourses>
      </div>
      <div className="mx-10 my-40">
        <State></State>
      </div>
      <div className="mt-20">
      <h2 className="text-5xl font-bold text-center hover:text-indigo-500">Our Team</h2>
        <Team></Team>
      </div>
      <div data-aos="fade-left" className="my-20 bg-indigo-600 mx-10 rounded-xl">
        <Bannertwo></Bannertwo>
      </div>
      <div data-aos="zoom-out-up" className="mx-10">
        <FAQ></FAQ>
      </div>
      <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="my-20 bg-gray-300 bg-opacity-40 backdrop-blur-md mx-10 rounded-xl">
        <Contact></Contact>
      </div>
    </section>
  );
};

export default Home;
