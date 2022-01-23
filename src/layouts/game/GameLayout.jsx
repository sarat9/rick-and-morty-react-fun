import React, { useEffect, useCallback, useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import { useSelector, useDispatch } from 'react-redux'
import { getAllEpisodes, applyEpisodesFilter } from './../../actions/episodesAction'
import { debounce } from "lodash";
import useTimer from './../../hooks/useTimer'
import GameCard from '../../components/Game/MemoryGame/GameCard'
import PageLoading from '../../components/Loading/PageLoading'
import Button from '@mui/material/Button';
import ErrorBoundry from '../../components/ErrorBoundry/ErrorBoundry'

let  cardList = [1,2,3,4,5,6,7,8]
cardList = [...cardList, ...cardList]
let shuffleArray = (array)=>{
  for(let i = array.length - 1; i>0; i--){
      let j = Math.floor(Math.random() * (i+1))
      let [a,b] = [array[i],array[j]]
      array[i] = b;
      array[j] = a;
  }
return JSON.parse(JSON.stringify(array))
}

cardList = shuffleArray(cardList)
cardList = cardList.map((val, index)=>{
  return {
    index : index,
    value : val,
    matched : false
  }
})

function GameLayout(props) {


    let [selected, setSelected] = useState({
      first: null, second : null
    })
    
    const [cards, setCards] = useState(JSON.parse(JSON.stringify(cardList)))
    const [timer, isTimerRunning, toggleTimer, resetTimer] = useTimer(0);
    const [pendingFlips, setPendingFlips] = useState(cardList.length/2);

    const checkMatch = (index) => {
      let {first, second} = selected
      if((cards[first].value == cards[second].value)&&(cards[second].value == cards[index].value)){
        cards[first].matched = true
        cards[second].matched = true
        setPendingFlips(pendingFlips-1)
      }
      setSelected({first: null, second : null})
      setCards([...cards])
    }

    const startGame = (e) => {
      e.preventDefault()
      resetTimer()
      toggleTimer()
      setSelected({first: null, second : null})
      setPendingFlips(cardList.length/2)
      setCards([...JSON.parse(JSON.stringify(cardList))])
    }

    const handleCardClick = (index) => {
      if(isTimerRunning){
        if(cards[index].matched === false){
          if(selected.first==null){
            setSelected({...selected, 'first':index})
          } else if(selected.second==null){
            selected.second = index
            setSelected({...selected})
            setTimeout(()=>{
              checkMatch(index)
            }, 1000)
          }
        }
      }else{
        console.log('Please click on start the game to start the timer')
      }
    }

    useEffect(()=>{
      if(pendingFlips <= 0){
        toggleTimer()
        alert('Game Ended')
      }
    },[pendingFlips])

  return (
    <div className='game-layout-page'>
      <ErrorBoundry>
      <div style={{display:'flex'}}>
        <div style={{width: '60%'}}>
        <Grid container spacing={1}>
            {cards&&cards.map(item=>{
              return <> 
                <Grid key={item.index} item xs={3} md={3}>
                    <GameCard 
                      selected = {selected}
                      item = {item}
                      handleCardClick = {handleCardClick}
                    />
                </Grid>
              </>
            })}
          </Grid>
        </div>
        <div style={{width:'40%', padding: '25px', background: '#d4f5e9'}}>
          <h1>Memory Game</h1>
          <span>Memory game tests your visual memory. Flip the cards and see how fast you can complete the game and how good is your memory power.</span>
          <h6>{'Timer in hh:mm:ss'}</h6>
          <div style={{textAlign: 'center'}}>
            <h2 style={{fontSize:'32px'}}>{timer}</h2>
            <Button 
              style={{fontSize:'32px'}}
              onClick={startGame} 
              disabled={isTimerRunning} variant="contained">
                Start Game
            </Button>
          </div>
          <p>You just need {pendingFlips} correct moves more! You are doing Great!</p>
        </div>
      </div>
      </ErrorBoundry>
    </div>
  )
}

export default GameLayout