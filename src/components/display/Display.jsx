import clsx from 'clsx'
import React, { useState, useEffect } from 'react'
import ButtonSpin from '../button/ButtonSpin'
import ButtonBet from '../button/ButtonBet'
import { Info, X } from 'lucide-react'
import History from '../history/History'

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
    infoHandler,
    cancel,
    historyHandler
}) => {

  const [history, setHistory] = useState([])
  const [isHistory, setIsHistory] = useState(false)


  useEffect(() => {
    if(win !== 0){
        setHistory([...history, win])
    }else return
  }, [win])

  console.log(win)
  console.log(plus)

  return (
    <div className={clsx('w-full h-screen')}>
        <div className={clsx('grid grid-cols-3 mx-3')}>
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
        {
            bet !== 0 &&
        <div onClick={cancel} className='text-red-500 flex justify-center mt-10'>
            <X id='cancel'/>
            <label htmlFor="cancel">Cancel Bet</label>
        </div>
        }
        <div className={clsx('absolute bottom-28 left-[37%]')}>
            <ButtonSpin label={'SPIN'} onClick={spinHandler}/>
        </div>
        <div className='fixed bottom-1 p-2' onClick={infoHandler}>
            <Info />
        </div>
        <div className='fixed bottom-3 right-1' onClick={() => setIsHistory(true)}>
            <span className='p-1 bg-sky-200 rounded-md'>Win History</span>
        </div>
        {
            isHistory ?
            <History history={history} historyHandler={() => setIsHistory(false)} />
            : null
        }
    </div>
  )
}

export default Display