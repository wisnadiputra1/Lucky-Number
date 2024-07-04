import clsx from 'clsx'
import React from 'react'
import ButtonSpin from '../button/ButtonSpin'
import ButtonBet from '../button/ButtonBet'
import { Info } from 'lucide-react'

const Display = ({
    balance,
    display ,
    display2 ,
    guess, 
    spinHandler, 
    betHandler, 
    betHandler2, 
    betHandler3, 
    bet, 
    win, 
    plus, 
    infoHandler
}) => {


  return (
    <div className={clsx('w-full h-screen', 'border border-gray-300')}>
        <div className={clsx('grid grid-cols-3 border mx-3')}>
            <span></span>

            <div>
            <h1 className=''>LUCKY NUMBER</h1>
            </div>

            <div className={clsx('flex justify-end')}>
            <span>${balance}</span>
            </div>
        </div>
        <div className={clsx('flex bg-sky-300')}>
            <div className={clsx('w-1/2 flex justify-center items-center bg-sky-500', 'rounded-r-full')}>
                <h1 className={clsx('text-7xl text-white')}>
                    {display}|{display2}
                </h1>
            </div>
            <div className={clsx('w-full h-1/2 flex justify-center items-cente')}>
                
                <h1 className={clsx('text-8xl')}>
                    {guess}
                </h1>
            </div>
        </div>
        <div className='py-14 flex justify-center'>
            <p className={clsx('text-3xl text-green-500')}><span className={clsx('')}>$</span>{bet}</p>
        </div>
        {
            plus ? <p className={clsx('text-xl text-green-500 absolute z-30 bottom-[450px]')}>+${win}</p> : null
        }
        <div className={clsx('flex justify-around border-t pt-4 mt-8')}>
            <ButtonBet label={'BET'} onClick={betHandler} />
            <ButtonBet label={'BET $5'} onClick={betHandler2} />
            <ButtonBet label={'BET $10'} onClick={betHandler3} />
        </div>
        <div className={clsx('fixed bottom-24 left-[36%]')}>
            <ButtonSpin label={'SPIN'} onClick={spinHandler}/>
        </div>
        <div className='fixed bottom-0 p-2' onClick={infoHandler}>
            <Info />
        </div>
    </div>
  )
}

export default Display