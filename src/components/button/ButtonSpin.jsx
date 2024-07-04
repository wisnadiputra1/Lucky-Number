import clsx from 'clsx'
import React from 'react'

const ButtonSpin = ({onClick, label}) => {
  return (
    <button onClick={onClick} className={clsx('w-28 h-28 bg-red-500 rounded-full')}>
        <p className={clsx('text-2xl font-bold')}>
            {label}
        </p>
    </button>
  )
}

export default ButtonSpin