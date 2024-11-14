// src/shared/components/UnitySimulator.tsx
import React, { useRef, useEffect } from 'react';

const UnitySimulator: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const resizeIframe = () => {
      if (iframeRef.current) {
        const containerWidth = iframeRef.current.parentElement?.offsetWidth;
        iframeRef.current.style.width = `${containerWidth}px`;
        iframeRef.current.style.height = `${containerWidth! * 0.75}px`; // Ajusta el aspecto de 4:3 o 16:9 según tus necesidades
      }
    };

    // Llama a resizeIframe al montar y en cada cambio de tamaño de la ventana
    resizeIframe();
    window.addEventListener('resize', resizeIframe);

    return () => {
      window.removeEventListener('resize', resizeIframe);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <iframe
        ref={iframeRef}
        src={`${process.env.PUBLIC_URL}/unity-simulator/index.html`}
        title="Unity Simulator"
        style={{
          border: 'none',
        }}
      />
    </div>
  );
};

export default UnitySimulator;
