import React, { useRef, useEffect } from 'react';

const GameView: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const resizeIframe = () => {
      if (iframeRef.current) {
        const containerWidth = iframeRef.current.parentElement?.offsetWidth;
        iframeRef.current.style.width = `${containerWidth}px`;
        iframeRef.current.style.height = `${containerWidth! * 0.75}px`;
      }
    };

    resizeIframe();
    window.addEventListener('resize', resizeIframe);

    return () => window.removeEventListener('resize', resizeIframe);
  }, []);

  return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <iframe
                id="unityIframe"
                src="public/WebGL Builds/index.html" // Cambia esta ruta al archivo `index.html` de Unity
                title="Unity Simulator"
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                }}
            />
        </div>
    );
};

export default GameView;
