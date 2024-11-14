// src/pages/TheoryPracticePage.tsx
import React, { useState } from 'react';
import Navbar from '../shared/components/Navbar';
import Sidebar from '../shared/components/Sidebar';
import CourseInfo from '../shared/components/CourseInfo';
import CodeEditor from '../shared/components/CodeEditor';
import GameView from '../shared/components/GameView';
import './TheoryPracticePage.css';

const TheoryPracticePage: React.FC = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };
    return (
        <div className="theory-practice-container">
            <Navbar onToggleSidebar={toggleSidebar} />
            <div className="main-content">
                {isSidebarVisible && <Sidebar />}
                <div className="content">
                    <div className="left-column">
                        <CourseInfo />
                        <CodeEditor />
                    </div>
                    <GameView />
                </div>
            </div>
        </div>
    );
};

export default TheoryPracticePage;
