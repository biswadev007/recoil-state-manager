'use client';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { textState } from '@/libs/atoms/text.atom';
import { cardColorState } from '@/libs/selectors/card.selector';
import ShowCounter from './ShowCounter';

const TextInput = () => {
  const { color } = useRecoilValue(cardColorState);
  const [text, setText] = useRecoilState(textState);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText((e.target as HTMLInputElement).value);
  };

  return (
    <div
      className={`w-1/3 p-4 border border-slate-400 rounded-lg`}
      style={{
        backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      }}
    >
      <input
        value={text}
        onChange={handleChange}
        className='h-9 w-full focus-visible:outline-none px-1 text-slate-800'
      />
      <ShowCounter />
    </div>
  );
};

export default TextInput;
