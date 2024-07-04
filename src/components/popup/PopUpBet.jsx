import clsx from 'clsx'
import { X } from 'lucide-react'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import parse from 'html-react-parser'

const PopUpBet = ({className, close, text, image, title}) => {
  return (
    <div className={twMerge(clsx('w-[250px] h-[200px] bg-white p-2', 'absolute left-[20%] top-[30%]', className))}>
        <div className={clsx('flex justify-between px-3')}>
            <span></span>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <X onClick={close} />
        </div>
        <div className='flex flex-col justify-center items-center mt-2'>
          {
            image ? <img src={image} className='w-[100px]' /> : null
          }
            <p>
              {parse(text)}
            </p>
        </div>
    </div>
  )
}

export default PopUpBet