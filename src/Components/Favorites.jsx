const Favorites=({favorites})=> {
    return(
         <> 
         <div id="favorites">
           Favorites
         </div>
         <div>
            <p>
                { favorites.map(word =>(<li key={word}>{word}</li>)) }
            </p>
        </div>
        </>
    )
}

export default Favorites;