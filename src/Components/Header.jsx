import { useState } from "react";
import { Link } from "react-router-dom";
import BurgerNav from "./Nav/BurgerNav";

const Header = () => {
    const [burgerOpen,setIsBurgerOpen] = useState(false);

    // console.log(burgerOpen);

    return(
   
     <header>  
          <div className="inner-header" >
             <div><h1>MyRandomWords</h1></div>
             <div><BurgerNav isOpen={burgerOpen} setOpen={setIsBurgerOpen}></BurgerNav></div>
          </div>
          {burgerOpen &&
          <div className="navigation">
              <div><Link to="/">Home</Link></div>
              <div><Link to="/favorites">Favorites</Link></div>
          </div>}
     </header>
    );
};

export default Header;