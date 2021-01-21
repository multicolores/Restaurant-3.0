import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import svg from "../images/pattern.svg"


const Drink = () => (
  <Layout>
    <SEO title="Drink" />

    <div className="eat_page">
        <section className="header_section">
        <Image alt="Gatsby in Space" filename="drink.jpg" />
         <div className="text_container">
          <h1>Our Drinks</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, praesentium non! Corrupti, officiis.</p>
            <a href="#drinks">Have a look</a>  
         </div>
      
        </section>

        <div className="container" id="drinks">

    <section className="right">

        <div className="text_container">
          <h4>Drink</h4>
          <h2>Cocktails</h2>
          <div className="articles">
            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$7</span>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  

            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$12</span>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>  

            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$8</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
            
            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$12</span>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>

              <div className="item">
              <span>name</span>
              <div> </div>
              <span>$8</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
            
          </div>

        </div>

        <div className="img_container">
          <div className="img">
          <Image alt="Gatsby in Space" filename="mojito.jpg" />
          </div>
        </div>
    </section>

    <section className="left">
    <div className="img_container">
          <img src={svg} alt="" className="svg"/>
          <div className="img">
          <Image alt="Gatsby in Space" filename="wine.jpg" />
          </div>
        </div>
    <div className="text_container">
          <h4>Drink</h4>
          <h2>Wines</h2>
          <div className="articles">
            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$7</span>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  

            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$12</span>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>  

            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$8</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
            
            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$12</span>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>

              <div className="item">
              <span>name</span>
              <div> </div>
              <span>$8</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
            
          </div>

        </div>
    </section>

    <section className="right">

        <div className="text_container">
          <h4>Drink</h4>
          <h2>Beers</h2>
          <div className="articles">
            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$7</span>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  

            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$12</span>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>  

            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$8</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
            
            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$12</span>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>

              <div className="item">
              <span>name</span>
              <div> </div>
              <span>$8</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
            
          </div>

        </div>

        <div className="img_container">
          <img src={svg} alt="" className="svg"/>
          <div className="img">
          <Image alt="Gatsby in Space" filename="beer.jpg" />
          </div>
        </div>
    </section>
</div>
    </div>
  </Layout>
)

export default Drink
