// components/DynamicIframe.tsx
import React, { useEffect, useState } from 'react';

const DynamicIframe: React.FC = () => {
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    const updateIframeSrc = () => {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      if (darkModeMediaQuery.matches) {
        setIframeSrc('https://my.spline.design/retrofuturismbganimation-70525e6537ee974c12ca59b71dc02db8/');
      } else {
        setIframeSrc('https://my.spline.design/abstractgradientbackground-67763e4a5d21a7ce6695cadc6e6cf678/'); 
      } // Add a comma here
    };

    // Set initial iframe src
    updateIframeSrc();

    // Listen for changes in the prefers-color-scheme media query
    const darkModeListener = (e: MediaQueryListEvent) => updateIframeSrc();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', darkModeListener);

    // Cleanup listener on component unmount
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', darkModeListener);
    };
  }, []);

  return (
    <iframe id="backgroundIframe" src={iframeSrc} width='100%' height='100%'></iframe>
  );
};

export default DynamicIframe;
