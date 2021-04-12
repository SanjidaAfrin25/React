import React, { useState } from 'react';
import fakedata from '../../fakedata.json';
import Cart from '../Cart/Cart';
import Subject from '../Subject/Subject';
import './Course.css';

const Course = () => {
    const [courses,setCourse]=useState(fakedata);
    const[price,setPrice]=useState([]);
    
      
      const buyCourse=(course)=>{
          console.log('add',course);
          
    const newPrice=[...price,course];
    setPrice(newPrice);
      }
    return (
        <div className="course-container">
            <div className="course-name">
            
                {
                    courses.map(cs=><Subject buyCourse={buyCourse} course={cs}></Subject>)
                }
        
            </div>
            <div className="price-container">
            < Cart cart={price}></Cart>
            </div>

            </div>
            
            
        
    );
};

export default Course;