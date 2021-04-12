import React from 'react';
import './Subject.css';

const Subject = (props) => {
    console.log(props.course);
    return (
        <div className="subject">
            <div>
                <img src={props.course.['pictures']} alt=""/>

            </div>
            <div>
               <h2> Course-Title {props.course.['course-title']}</h2>
               <p>{props.course.['words']}</p>
               <p>By {props.course.['first_name']} {props.course.['last_name']}</p>
               <h4>{props.course.['price']}</h4>
               <button className="button"onClick={()=>props.buyCourse(props.course)}>Enrole Now</button>

            </div>
            
        </div>
    );
};

export default Subject;