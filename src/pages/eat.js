import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"

import svg from "../images/pattern.svg"


const Eat = () => (
  <Layout>
    <SEO title="Eat" />

    <div className="eat_page">
       <Header siteTitle="Eat"/>
        

        <div className="container" id="food">

    <section >

        <div className="text_container">
          <h4>Food</h4>
          <h2>Entrances</h2>
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
            <Image alt="Gatsby in Space" filename="viande.jpg" />
          </div>
        </div>
    </section>

    <section className="left">
    <div className="img_container">
          <img src={svg} alt="" className="svg"/>
          <div className="img">
            <Image alt="Gatsby in Space" filename="entree2.jpg" />
          </div>
        </div>
    <div className="text_container">
          <h4>Food</h4>
          <h2>Dishs</h2>
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
          <h4>Food</h4>
          <h2>Desserts</h2>
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
             <Image alt="Gatsby in Space" filename="dessert.jpg" />
          </div>
        </div>
    </section>
</div>
    </div>
  </Layout>
)

export default Eat
