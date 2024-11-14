// src/shared/components/Sidebar.tsx
import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>Python Development Course</h2>
            <div className="progress">
                <p>1 of 25 levels completed</p>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '20%' }}></div> {/* Ajusta el ancho según el progreso */}
                </div>
            </div>
            <div className="chapters">
                <h3>Introduction to Python</h3>
                <ul>
                    <li>Starting Out</li>
                    <li>Movement with Functions</li>
                    <li>Collecting Items</li>
                    <li>Pushing Objects</li>
                    <li>Printing on Screen</li>
                    <li>Building Objects</li>
                </ul>
                <h3>Variables and Types</h3>
                <ul>
                    <li>Watering Objects</li>
                    <li>Commenting Code</li>
                    <li>Opening and Closing Commands</li>
                    <li>Number Variables</li>
                    <li>Placing Objects</li>
                    <li>String Variables</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
