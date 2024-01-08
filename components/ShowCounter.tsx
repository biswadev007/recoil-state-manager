import React from 'react'
import { useRecoilValue } from 'recoil';
import { charCountState } from '@/libs/selectors/text.selector';

const ShowCounter = () => {
  const count = useRecoilValue(charCountState);

  return (
    <h2 className='text-2xl text-slate-300 font-bold mt-5'>{count}</h2>
  )
}

export default ShowCounter;