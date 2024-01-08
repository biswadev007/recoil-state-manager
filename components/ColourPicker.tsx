'use client';
import React, { useState, ChangeEvent } from 'react';
import reactCSS from 'reactcss';
import { SketchPicker, Color, ColorResult } from 'react-color';

const Sketch: React.FC<{
  color: { r: string, g: string, b: string, a: string };
  handleChange: (color: ColorResult, event: ChangeEvent<HTMLInputElement>)=> void;
}> = ({ color, handleChange }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const styles = reactCSS({
    default: {
      color: {
        width: '14px',
        height: '14px',
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      },
      swatch: {
        padding: '2px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };


  return (
    <div>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};

export default Sketch;
