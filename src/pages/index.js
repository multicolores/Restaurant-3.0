import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />

    <div className="visit_page">
        {/* <section className="header_section">
        <Image alt="Gatsby in Space" filename="drink.jpg" />

         <div className="text_container">
          <h1>Visit</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, praesentium non! Corrupti, officiis.</p>
            <a href="/visit#visit">Have a look</a>  
         </div>
      
        </section> */}

        <div className="container" id="visit">
        <section className="menu">
                <h2>Our menu</h2>
                <div className="images_container">

                    <div>
                    <Link to="/eat">
                      <Image alt="Gatsby in Space" filename="viande.jpg" />
                    </Link>
                        <h2>Eat</h2>
                    </div>
                    <div>
                      <Link to="/drink">
                        <Image alt="Gatsby in Space" filename="drink.jpg" />
                      </Link>
                        <h2>Drink</h2>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="text">
                    <h4>Our story</h4>
                    <h2>About us</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit placeat explicabo incidunt repudiandae impedit ducimus, maiores doloribus alias dolorem aspernatur in adipisci commodi ipsa. Sit.</p>
                </div>
                <div className="images_div">
                    <div>
                        <Image alt="Gatsby in Space" filename="cafe.jpg" />
                    </div>
                    <div>
                        <Image alt="Gatsby in Space" filename="chef.jpg" />
                    </div>
                </div>
            </section>

            <section className="chef">
                <div className="image_container">
                  <Image alt="Gatsby in Space" filename="produit.jpg"/>
                </div>
                <div className="text">
                    <h4>product</h4>
                    <h2>Our chef's product</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio est quidem nemo aut qui repellendus quo ipsam illum deserunt itaque.</p>
                </div>
            </section>

            
        </div>
    </div>

  </Layout>
)

export default IndexPage
