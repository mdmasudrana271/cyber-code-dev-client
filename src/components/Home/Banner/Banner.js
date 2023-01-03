import React from "react";
import banner from "../../../assets/images/banner.png";
import AnimatedText from "react-animated-text-content";

const Banner = () => {
  return (
    <section className="text-white  md:flex items-center justify-between mx-10 lg:h-[100vh]">
      <div className="flex flex-col justify-center md:p-6 text-start ">
        <h3 className="text-3xl font-bold leading-none sm:text-3xl font-bold">
          Online
          <AnimatedText
            type="words" // animate words or chars
            animation={{
              x: "200px",
              y: "-20px",
              scale: 1.1,
              ease: "ease-in-out",
            }}
            animationType="float"
            interval={0.06}
            duration={0.8}
            tag="span"
            className="animated-paragraph text-orange-500 mx-1"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          >
            education
          </AnimatedText>
          courses
        </h3>
        <h2 className="text-5xl font-bold">Millions of people learning</h2>
        <p className="mt-5">
          There are so many things to love about coding, both from a technical
          and philosophical perspective.
        </p>
      </div>
      <img src={banner} className="md:w-96" alt="" />
    </section>
  );
};

export default Banner;
