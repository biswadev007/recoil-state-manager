'use client'
import React, { useCallback } from 'react';
import Sketch from './ColourPicker';
import { useRecoilState } from 'recoil';
import { backgroundState } from '@/libs/atoms/backgroud.atom';
import { cardState } from '@/libs/atoms/card.atom';

const Accessiblity = () => {
  const [background, setBackground] = useRecoilState(backgroundState);
  const [cardColor, setCardColor] = useRecoilState(cardState);

  const handleChange = useCallback((color: any) => {
    setBackground({ color: color.rgb });
  }, []);

  const handleCardChange = useCallback((color: any) => {
    setCardColor({ color: color.rgb });
  }, []);
  
  return (
    <section className='w-[15%] h-32 border border-gray-400 bg-gradient-to-br from-red-200 to-red-400 fixed top-0 right-0 p-3'>
      <div className='flex gap-1 items-center'>
        <Sketch color={background.color} handleChange={handleChange} />
        <span>Background Color</span>
      </div>
      <div className='flex gap-1 mt-3 items-center'>
        <Sketch color={cardColor.color} handleChange={handleCardChange} />
        <span>Card Color</span>
      </div>
    </section>
  );
};

export default Accessiblity;
