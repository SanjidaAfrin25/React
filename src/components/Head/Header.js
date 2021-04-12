import React from 'react';
import logo from '../../istockphoto-1059510566-1024x1024.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
        <img src={logo} alt=""/>
        <nav>
            <a href="/course categories"> course categories</a>
           <a href="/course types"> course types</a>
           <a href="/course for jobs"> course for jobs </a>
            <a href="http//:online-course.com"> sign in</a></nav>
        </div>
    );
};

export default Header;