import React from "react"
import Image from "../components/image"

const Header = ({ siteTitle }) => {

    // if ( siteTitle == "Home"){
    //   const Content =  `    <h1>Restaurant</h1>
    //   <p>32 rue du Maréchale a Laville</p>`;
    // }

    if ( siteTitle === "Home"){
      return(
        <header>

          <div className="header_container">
          <div className="text_container">
            <h1 className="home_title">Restaurant</h1>
            <p>32 rue du Maréchale a Laville</p>
          </div>
          </div>
    
          <Image alt="image du restaurant" filename="home_visit.jpg" />
      </header>
      );
    }
    else if ( siteTitle === "Eat"){
      return(
        <header>
          <div className="header_container">
          <div className="text_container">
            <h1>Eat</h1>
          </div>
          </div>
    
        <Image alt="image du restaurant" filename="home_eat.jpg" />
        {/* {Content} */}
      </header>
      );
    }
    else if ( siteTitle === "Drink"){
      return(
        <header>
        
          <div className="header_container">
          <div className="text_container">
            <h1>Drink</h1>
          </div>
          </div>
    
    
        <Image alt="image du restaurant" filename="drink.jpg" />
        {/* {Content} */}
      </header>
      );
    }
  
} 





export default Header
