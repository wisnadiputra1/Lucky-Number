import React from 'react'
import clsx from 'clsx'


const ButtonBet = ({onClick, label}) => {
    return (
      <button onClick={onClick} className={clsx('w-[100px] h-10 bg-blue-500 rounded-md')}>
          <p className={clsx('text-2xl font-bold')}>
              {label}
          </p>
      </button>
    )
  }

export default ButtonBet