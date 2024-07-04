import { Fragment, useEffect, useState } from 'react'
import './App.css'
import Display from './components/display/Display'
import PopUpBet from './components/popup/PopUpBet'
import clsx from 'clsx'

import SpinSound from './assets/sound/spin.wav'
import WindSound from './assets/sound/win.wav'
import OpssSound from './assets/sound/opss.wav'
import JackpotSound from './assets/sound/jackpot.wav'
import GameOver from './assets/sound/music.mp3'

import Opss from './assets/image/awkward.png'
import Low from './assets/image/low.png'
import Die from './assets/image/tombstone.png'

function App() {
  const [randomNum, setrandomNum] = useState(0)
  const [displayNumber1, setDisplayNumber1] = useState(Math.floor(Math.random() * 10) + 1)
  const [displayNumber2, setDisplayNumber2] = useState(Math.floor(Math.random() * 10) + 1)
  const [betAmount, setbetAmount] = useState(0)
  const [amountBalance, setAmountBalance] = useState(200)
  const [popup, setpopup] = useState(false)
  const [lowBalance, setLowBalance] = useState(false)
  const [gameOver, setgameOver] = useState(false)
  const [winAmount, setWinAmount] = useState(0)
  const [plus, setPlus] = useState(false)
  const [isInfo, setIsInfo] = useState(false)

  const win = new Audio(WindSound)
  const opss = new Audio(OpssSound)
  const jackpot = new Audio(JackpotSound)
  const over = new Audio(GameOver)
  
  useEffect(() => {
    if(amountBalance <= 0){
      over.play()
      setgameOver(true)
    }

    if (randomNum === displayNumber1 || randomNum == displayNumber2) {
      console.log('You Win!!');
      let WinTemp = 0
      if(displayNumber1 === displayNumber2){
        jackpot.play()
        WinTemp = betAmount * 4
        setWinAmount(win)
      }else{
        WinTemp = betAmount * 2
        setWinAmount(win)
        win.play()

      }
      setPlus(true)
      setWinAmount(WinTemp)
      setTimeout(() => {
        setWinAmount(0)
      }, 3000)
      setAmountBalance(prevBalance => prevBalance + WinTemp);
      
      setTimeout(() => {
        const randomDisplayNumber1 = Math.floor(Math.random() * 10) + 1;
        const randomDisplayNumber2 = Math.floor(Math.random() * 10) + 1;
        setDisplayNumber1(randomDisplayNumber1)
        setDisplayNumber2(randomDisplayNumber2)
        setPlus(false)
      }, 3000);
      setTimeout(() => {
        setbetAmount(0)
      }, 100)
    }else{
      if(betAmount !== 0){
        console.log('You Lose !!')
        setTimeout(() => {
          setbetAmount(0)
        }, 100)
      }else if(amountBalance !== 0){
        setAmountBalance(prevBalance =>prevBalance - betAmount)
      }else return
    }
  }, [randomNum]);

  const spin = new Audio(SpinSound)

  const getRandomNumber = () => {
    if(betAmount !== 0){
      const randomNum = Math.floor(Math.random() * 10) + 1
      setrandomNum(randomNum)
      spin.play()
    }else{
      opss.play()
      setpopup(true)
    }
  }
  const setBet = () => {
    if(amountBalance <= 0){
      setLowBalance(true)
    }else{
      setbetAmount(betAmount +1)
      setAmountBalance(amountBalance -1)
    }
  }

  const setBetFiveDollar = () => {
    if(amountBalance <= 0){
      setLowBalance(true)
    }else{
      setbetAmount(betAmount +5)
      setAmountBalance(amountBalance -5)
    }
  }

  const setBetTenDollar = () => {
    if(amountBalance <= 0){
      opss.play()
      setLowBalance(true)
    }else{
      setbetAmount(betAmount +10)
      setAmountBalance(amountBalance -10)
    }
  }

  const handleClosePopUp = () => {
    setpopup(false)
  }

  const handleClosePopUpLow = () => {
    setLowBalance(false)
  }

  const handleClosePopUpOver = () => {
    setgameOver(false)
    setAmountBalance(prevBalance => prevBalance + 200)
    over.pause()
  }
  
  return (
    <Fragment>
      <div>
        {
          popup && <div className={clsx('fixed z-30 w-full h-screen', 'bg-black bg-opacity-50')}>
            <PopUpBet className={''} close={handleClosePopUp} text={'You must place bet first!!'} image={Opss} title={'OPSS!!!'} />
          </div>
        }
        {
          lowBalance && <div className={clsx('fixed z-30 w-full h-screen', 'bg-black bg-opacity-50')}>
          <PopUpBet className={''} close={handleClosePopUpLow} text={'No enough balance!!'} image={Low} title={'OH NO!!'} />
          </div>
        }
        {
          gameOver && <div className={clsx('fixed z-30 w-full h-screen', 'bg-black bg-opacity-50')}>
          <PopUpBet className={''} close={handleClosePopUpOver} text={'The fact is, that gambling can make you die!!'} image={Die} title={'GAME OVER!!'} />
          </div>
        }
        {
          isInfo && <div className={clsx('fixed z-30 w-full h-screen', 'bg-black bg-opacity-50')}>
          <PopUpBet className={'h-[400px] top-[15%]'} close={() => setIsInfo(false)} text={`This is rule and how to play the game! 
              <br />
              <br />
              1.Place bet
              <br />
              2.Spin
              <br />
              3.If one of the two white number the same as the black in the right, thats mean you win.
              <br />
              4.If the white number same, your reward will be x2.
              <br />
              <br />
              creator "Wisna"`} image={''} title={'How to Play Game!!'} />
          </div>
        }
        <Display 
        balance={amountBalance} 
        display={displayNumber1} 
        display2={displayNumber2} 
        guess={randomNum} 
        spinHandler={getRandomNumber} 
        betHandler={setBet} 
        betHandler2={setBetFiveDollar} 
        betHandler3={setBetTenDollar}
        bet={betAmount}
        win={winAmount}
        plus={plus}
        infoHandler={() => setIsInfo(true)}
        />
      </div>
    </Fragment>
  )
}

export default App
