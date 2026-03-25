import React, { useEffect, useRef } from 'react';
import webGLFluidSimulation from 'webgl-fluid';
import './FluidCanvas.css';

const FluidCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      webGLFluidSimulation(canvasRef.current, {
        IMMEDIATE: false, 
        TRIGGER: 'hover',
        DENSITY_DISSIPATION: 3,
        VELOCITY_DISSIPATION: 1.5,
        PRESSURE: 0.1,
        PRESSURE_ITERATIONS: 10, // Reduced from 20 for performance
        CURL: 15,
        SPLAT_RADIUS: 0.5,
        SPLAT_FORCE: 6000,
        SHADING: true,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 10,
        PAUSED: false,
        BACK_COLOR: { r: 0, g: 0, b: 0 },
        TRANSPARENT: false,
        BLOOM: false,
        SUNRAYS: false, // Disabled for major performance boost
      });
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    let lastEvent = null;
    let frameRequested = false;

    const forwardEvent = (e) => {
      lastEvent = e;
      if (!frameRequested) {
        frameRequested = true;
        requestAnimationFrame(() => {
          if (lastEvent && canvas) {
            const clone = new MouseEvent(lastEvent.type, {
              clientX: lastEvent.clientX,
              clientY: lastEvent.clientY,
              movementX: lastEvent.movementX,
              movementY: lastEvent.movementY,
              bubbles: false,
              cancelable: false
            });
            canvas.dispatchEvent(clone);
          }
          frameRequested = false;
        });
      }
    };

    window.addEventListener('mousemove', forwardEvent);
    window.addEventListener('mousedown', forwardEvent);
    window.addEventListener('mouseup', forwardEvent);
    window.addEventListener('touchmove', (e) => {
       if(e.touches.length > 0) {
          const touch = e.touches[0];
          const clone = new MouseEvent('mousemove', {
             clientX: touch.clientX,
             clientY: touch.clientY,
             bubbles: false
          });
          canvas.dispatchEvent(clone);
       }
    });

    return () => {
      window.removeEventListener('mousemove', forwardEvent);
      window.removeEventListener('mousedown', forwardEvent);
      window.removeEventListener('mouseup', forwardEvent);
    };
  }, []);

  return <canvas ref={canvasRef} className="fluid-canvas" />;
};

export default FluidCanvas;
