'use client';
import React from 'react'
import { useRecoilState } from 'recoil';

import { textState } from '@/libs/atoms/text.atom';
import ShowCounter from './ShowCounter';

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText((e.target as HTMLInputElement).value);
  }

  return (
    <div className='bg-gradient-to-tr w-1/3 p-4 from-[#292d3e] to-[#18191a] border border-slate-400 rounded-lg'>
      <input value={text} onChange={handleChange} className='h-9 w-full focus-visible:outline-none px-1 text-slate-800' />
      <ShowCounter />
    </div>
  )
}

export default TextInput;