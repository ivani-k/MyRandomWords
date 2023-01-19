const Favorites=({favorites})=> {
    return(
         <> 
         <h1 id="favorites">
           Favorites
         </h1>
         <div >
            
            { favorites.map(word =>(<ul className="favorites-words" key={word}>{word}</ul>)) }
            
        </div>
        </>
    )
}

export default Favorites;