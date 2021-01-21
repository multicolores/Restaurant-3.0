import { Link } from "gatsby"
import React from "react"
import Image from "../components/image"

const Header = ({ siteTitle }) => {

    // if ( siteTitle == "Home"){
    //   const Content =  `    <h1>Restaurant</h1>
    //   <p>32 rue du Maréchale a Laville</p>`;
    // }
  return(
    <header>
    <nav>
      <div className="nav_container">
        <div className="logo">
          <Link to="/" >
            logo
          </Link>
        </div>
        <div className="links">
          <Link to="/eat">Eat</Link>
          <Link to="/drink">Visit</Link>
          <Link to="/eat">About</Link>
        </div>
      </div>
    </nav>
    <div className="header_container">
    <div className="text_container">
      <h1>Restaurant</h1>
      <p>32 rue du Maréchale a Laville</p>
    </div>
    </div>


    <Image alt="image du restaurant" filename="home_visit.jpg" />
    {/* {Content} */}
  </header>
  )
} 





export default Header
