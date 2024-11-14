// src/pages/HomePage/CourseInfo.tsx
import React from 'react';
//import './HomePage.css';

const CourseInfo: React.FC = () => {
    return (
        <div className="course-info">
            <h2>Python Development Course</h2>
            <h3>Chapter 1 &gt; Level 1</h3>
            <p>Introduction to Python</p>
            <p>Starting Out</p>
            <p>Use the Code Editor below and add the line:</p>
            <code>player.move_forward()</code>
            <p>to make your way to the exit. Press the Run button to execute your code.</p>
        </div>
    );
};

export default CourseInfo;
