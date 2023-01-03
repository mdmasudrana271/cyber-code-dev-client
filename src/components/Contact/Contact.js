import React from "react";
import Lottie from "lottie-react";
import animation from "../../contact.json";

const Contact = () => {
  return (
    <section>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="md:text-4xl text-2xl font-bold leading-tight lg:text-5xl">
              Contact with us
            </h2>
          </div>
          <Lottie className="md:w-72" animationData={animation} loop={true} />
        </div>
        <form
          action="https://getform.io/f/923d35e5-4392-4fdd-8a69-533de3d72d65"
          method="POST"
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <label for="name" className="text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
            ></input>
          </div>
          <div>
            <label for="email" className="text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            ></input>
          </div>
          <div>
            <label for="message" className="text-sm">
              Message
            </label>
            <textarea
              name="message"
              className="textarea input-bordered w-full"
              placeholder="Message"
            ></textarea>
          </div>
          <button class="relative px-5 py-2 font-medium text-white group w-full">
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-indigo-500 group-hover:bg-indigo-700 group-hover:skew-x-12"></span>
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-indigo-700 group-hover:bg-indigo-500 group-hover:-skew-x-12"></span>
            <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-indigo-600 -rotate-12"></span>
            <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-indigo-400 -rotate-12"></span>
            <span class="relative">Button Text</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
