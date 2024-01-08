'use client';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { backgroundColorState } from '@/libs/selectors/background.selector';

const Container = ({ children }: { children: React.ReactNode }) => {
  const { color } = useRecoilValue(backgroundColorState);
  
  return (
    <main
      className='flex min-h-screen flex-col items-center justify-between p-24'
      style={{
        backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      }}
    >
      {children}
    </main>
  );
};

export default Container;
