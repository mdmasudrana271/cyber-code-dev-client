import React from "react";

const FAQ = () => {
  return (
    <section className="md:px-10 items-center md:py-20 bg-blue-500 rounded-xl">
      <div className="bg-gray-300 bg-opacity-20 backdrop-blur-md p-10 rounded-xl">
        <div className="space-y-4">
          <h1 className="text-5xl font-semibold hover:scale-0 text-center mb-10">
            FAQ_
          </h1>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 text-lg focus:outline-none md:text-3xl text-white">
              For Whom Is This Course?
            </summary>
            <p className="md:px-4 py-6 pt-0 ml-4 -mt-4 text-white">
              This Course Is Created For Those Who Want To Learn Web Development
              From Scratch And Build A Career As A Web Developer In Software
              Companies.Even Those Who Studied CSE For Four Years But Didn’t
              Learn Much And Couldn’t Decide What To Do, Can Complete Web
              Development From This Course And Apply For Jobs.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none text-lg md:text-3xl text-white">
              What Prior Experience Is Needed For This Course?
            </summary>
            <p className="md:px-4 py-6 pt-0 ml-4 -mt-4 text-white">
              Since We’ll Be Teaching From Scratch, You Don’t Need To Know
              Anything Beforehand. But If You Have Free Time, You Can Do These
              Things: Be Comfortable With A Computer, Internet So That You Can
              Search Anything Online You Should Have Basic English Literacy
              Typing Speed 15-30 Wpm Will Be Excellent. Familiarity With HTML,
              CSS Would Be Fantastic..
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none text-lg md:text-3xl text-white">
              What's Inside The Course?
            </summary>
            <p className="md:px-4 py-6 pt-0 ml-4 -mt-4 text-white">
              You Will Learn Everything Needed To Become A Serious Web
              Developer. Starting From HTML, CSS, You'll Learn Bootstrap,
              JavaScript, Git, ES6, REST API, Server, JSON, Etc. Not Only That,
              You'll Also Learn The Most Famous Framework, ReactJS, Alongside
              These And Will Make A Complete Website. In Addition, You'll Learn
              Node, Database (Mongodb), Debug, Problem Solving, Interview
              Questions And Many Other Things. We'll Teach You How To Build 11
              Websites In The Entire Course. Moreover, You'll Get 11 Websites To
              Build As Your Homework. If You Finish This Anyhow, Then You'll
              Surely Be A Junior Developer.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
