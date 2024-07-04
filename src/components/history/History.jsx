import { X } from 'lucide-react'
import React from 'react'
import clsx from 'clsx'

const History = ({history, historyHandler}) => {
  return (
    <div className={clsx('w-full h-[250px]', 'z-10 fixed bottom-0 p-3 bg-gray-50 border-t')}>
        <div className='grid grid-cols-3'>
            <span></span>
            <div>
                <h1>WIN History</h1>
            </div>
            <div className='flex justify-end' onClick={historyHandler}>
                <X />
            </div>
        </div>
        <div>
            {
                history.length !== 0 ? 
                    history.map((item, idx) => {
                        return(
                            <p key={idx} className='text-xl text-green-500'>
                                +${item}
                            </p>
                        )
                    })
                : null
            }
        </div>
    </div>
  )
}

export default History