import React from "react";

const Blog = () => {
  return (
    <div  className="md:flex mx-5 gap-5 my-10 md:h-[100vh]">
      <div className="relative flex flex-col max-w-xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-900 dark:text-gray-100 divide-gray-700">
        <div className="p-3 space-y-1 xl:ml-6">
          <h3 className="text-3xl font-semibold">Applied Learning Project</h3>
          <p className="text-sm dark:text-gray-400">
            Beginners, even those without any programming experience, will be
            able to immediately start coding in C through our new coding tools
            within the web browser.
          </p>
        </div>
      </div>
      <div className="relative flex flex-col max-w-xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-900 dark:text-gray-100 divide-gray-700">
        <div className="p-3 space-y-1 xl:ml-6">
          <h3 className="text-3xl font-semibold">Take Courses</h3>
          <p className="text-sm dark:text-gray-400">
            A Coursera Specialization is a series of courses that helps you
            master a skill. To begin, enroll in the Specialization directly, or
            review its courses and choose the one you'd like to start with. When
            you subscribe to a course that is part of a Specialization, you’re
            automatically subscribed to the full Specialization. It’s okay to
            complete just one course — you can pause your learning or end your
            subscription at any time. Visit your learner dashboard to track your
            course enrollments and your progress.
          </p>
        </div>
      </div>
      <div className="relative flex flex-col max-w-xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-900 dark:text-gray-100 divide-gray-700">
        <div className="p-3 space-y-1 xl:ml-6">
          <h3 className="text-3xl font-semibold">Earn a Certificate</h3>
          <p className="text-sm dark:text-gray-400">
            When you finish every course and complete the hands-on project,
            you'll earn a Certificate that you can share with prospective
            employers and your professional network.
          </p>
        </div>
      </div>
    </div>

    
  );
};

export default Blog;
