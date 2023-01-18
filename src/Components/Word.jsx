import React from 'react';

export const Word = ({word, isFavorite, addToFavorites, removeFromFavorites}) => {
  const handleStarClick = () => {
    if(isFavorite) {
      removeFromFavorites(word)
    } else {
      addToFavorites(word)
    }
  }
  
  return (
  <div className="wordContainer">
    <div className="word">
      {word} 
    </div>
      <div className="star">
      <button onClick={handleStarClick}>
         {isFavorite 
            ? <img  src="./assets/star_full.png" alt="star-full" style={{ width:'2em', height: '2em'}} /> 
            : <img src="./assets/star_empty.png" alt="star-empty" style={{ width:'2em', height: '2em'}} />}
         </button> 
       </div>
  </div>
)
}