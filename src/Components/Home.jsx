import { Word } from "./Word";

const MY_LIST_OF_WORDS = ["predator", "cotton", "referee", "passive", "receipt", "matrix", "topple", "protest", "capital", "city", "sunny", "reactjs"];

const Home = ({addWordToFavorites, removeWordFromFavorites, favorites})=> {
    const wordsElements = MY_LIST_OF_WORDS.map(word =>
        (<Word key={word} word={word} 
          addToFavorites={addWordToFavorites}
          removeFromFavorites={removeWordFromFavorites}
          isFavorite={favorites.includes(word)}/>))
          
   return( 
        <div>{wordsElements}</div>
   )
}

export default Home;