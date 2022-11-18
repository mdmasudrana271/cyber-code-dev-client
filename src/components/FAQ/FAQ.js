import React from "react";

const FAQ = () => {
  return (
    <div>
      <div tabIndex={0} className="collapse group mb-5">
        <div className="collapse-title bg-primary text-primary-content group-focus:bg-black group-focus:text-secondary-content">
          what is cors?
        </div>
        <div className="collapse-content bg-primary text-primary-content group-focus:bg-black group-focus:text-secondary-content">
          <p>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse group mb-5">
        <div className="collapse-title bg-primary text-primary-content group-focus:bg-black group-focus:text-secondary-content">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </div>
        <div className="collapse-content bg-primary text-primary-content group-focus:bg-black group-focus:text-secondary-content">
          <p>
            {" "}
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more
          </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse group mb-5">
        <div className="collapse-title bg-primary text-primary-content group-focus:bg-black group-focus:text-secondary-content">
          How does the private route work?
        </div>
        <div className="collapse-content bg-primary text-primary-content group-focus:bg-black group-focus:text-secondary-content">
          <p>
            The react private route component renders child components (
            children ) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property
          </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse group mb-5">
        <div className="collapse-title bg-primary text-primary-content group-focus:bg-black group-focus:text-secondary-content">
          What is Node? How does Node work?
        </div>
        <div className="collapse-content bg-primary text-primary-content group-focus:bg-black group-focus:text-secondary-content">
          <p>
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive.
          </p>
        </div>
      </div>
      <img
        src="https://img.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg?w=740&t=st=1666699405~exp=1666700005~hmac=ebb9337fd62ab1296c5522ead8ca5d3a70bb8b1a58ca31b4510917fbccbba66b"
        alt=""
        className=" mx-auto w-96 rounded-lg shadow-md dark:bg-gray-500"
      />
    </div>
  );
};

export default FAQ;
