// src/pages/HomePage/CodeEditor.tsx
import React, { useState } from 'react';

const CodeEditor: React.FC = () => {
    const [code, setCode] = useState("");

    const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCode(event.target.value);
    };

    const handleRunCode = () => {
        const iframe = document.getElementById("unityIframe") as HTMLIFrameElement;
        if (iframe && code) {
            iframe.contentWindow?.postMessage(code, "*");
        }
    };

    return (
        <div className="code-editor">
            <button className="code-button" onClick={handleRunCode}>Run Code</button>
            <button className="code-button" onClick={() => setCode("")}>Reset</button>
            <textarea
                className="code-area"
                placeholder="Write your code here..."
                value={code}
                onChange={handleCodeChange}
            />
        </div>
    );
};

export default CodeEditor;
