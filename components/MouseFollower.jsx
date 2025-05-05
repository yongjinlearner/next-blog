'use client'
import React from 'react';
import useHoverMouse from '@/actions/hoverMouse'; // Update path as needed

const MouseFollower = () => {
  const { x, y } = useHoverMouse();

  return (
    <div
      className="fixed pointer-events-none z-200"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: '300px', // Increase size for a smoother gradient
        height: '300px',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(125, 161, 125, 0.47) 0%, rgba(255, 255, 255, 0) 50%)',
        borderRadius: '50%',
      }}
    />
  );
};

export default MouseFollower;