// src/pages/HomePage/CodeEditor.tsx
import React from 'react';
//import './HomePage.css';

const CodeEditor: React.FC = () => {
    return (
        <div className="code-editor">
            <button className="code-button">Run Code</button>
            <button className="code-button">Reset</button>
            <textarea className="code-area" placeholder="Write your code here..."></textarea>
        </div>
    );
};

export default CodeEditor;
