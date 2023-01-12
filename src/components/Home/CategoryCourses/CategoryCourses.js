import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CategoryCard from './CategoryCard';

const CategoryCourses = () => {

    const [courses, setCourses] = useState([])

    useEffect(()=>{
        fetch('https://cybercodedev12.vercel.app/courses')
        .then(res=> res.json())
        .then(data=> {
            setCourses(data)
        })
    },[])

    return (
        <div>
            <div className=' my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10'>
                {
                    courses.map(course => <CategoryCard key={course._id} course={course}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoryCourses;