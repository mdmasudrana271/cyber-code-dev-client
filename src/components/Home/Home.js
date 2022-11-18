import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div className="bg-orange-300">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
            Learn a new skill online on your time
          </h1>
          <div className="flex flex-wrap justify-center my-12">
            <Link to="/courses">
              <button
                type="button"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
              >
                Get started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <img
        className="md:w-4/6 mx-auto mb-12 mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
        src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=740&t=st=1666766309~exp=1666766909~hmac=e35ade61eef8e2aa5faa162a691d7842ec37c304239b7855ad2fd936ffb21ee5"
        alt=""
      />
    </section>
  );
};

export default Home;
