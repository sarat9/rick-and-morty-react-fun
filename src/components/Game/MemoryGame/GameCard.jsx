import * as React from 'react';
import './GameCard.css'
export default function GameCard(props) {

  const { item, selected, handleCardClick, frontImageSrc } = props;

  return (
    <div className="flip-box" onClick={()=>handleCardClick(item.index)}>
        <div className={(selected.first == item.index || selected.second == item.index || item.matched == true)?"flip-box-inner":"flip-box-again"}>
            <div className="flip-box-front">
              <img style={{width:'100%', height:'100%'}} src={frontImageSrc} />
            </div>
            <div className="flip-box-back">
            <h2>{item.value}</h2>
            </div>
        </div>
    </div>
  );
}

GameCard.defaultProps = {
  frontImageSrc : 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Rick_and_Morty_season_3.png/250px-Rick_and_Morty_season_3.png'
}