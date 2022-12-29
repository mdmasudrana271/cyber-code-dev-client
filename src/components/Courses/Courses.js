import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData()

    console.log(courses)
    return (
        <div className='md:flex'>
            <div className='md:w-3/12 my-10 mx-0'>
                {
                    courses.map(course => <Category key={course._id} course={course}></Category>)
                }
            </div>
            <div className='md:w-9/12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 px-5 mx-0 my-10'>
                {
                    courses.map(course => <Course key={course._id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;