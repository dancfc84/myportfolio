
import React from "react"
import styles from "./Portfolio.module.css"

function Portfolio() {


  return (
    <section className={styles.portfolio_section}>
      <div className={styles.portfolio_title}>
        <h1 className={styles.portfolio_title}>Portfolio</h1>
      </div>
      <div className={styles.portfolio_container} >
        <a href="https://b00k-exchange.netlify.app/">
          <div className={styles.card}>
            <img src="https://res.cloudinary.com/dlguuhqej/image/upload/v1662138049/Portfolio/bookxchange_rb93rl.png" alt="Avatar"></img>
            <div className={styles.container}>
              <h4><b>Book Exchange</b></h4>
              <p className={styles.paragraph_card}>A fully responsive book exchange site, I built a full stack application with CRUD functionality using React, Flask, Python, postgreSQL, CSS and HTML. </p>
            </div>
          </div>
        </a>
        <a href="https://htrees.netlify.app/">
          <div className={styles.card}>
            <img src="https://res.cloudinary.com/dlguuhqej/image/upload/v1662138048/Portfolio/htrees_ox8xfh.png" alt="Avatar"></img>
            <div className={styles.container}>
              <h4><b>HackerTrees</b></h4>
              <p>A job search site aimed at developers, a full-stack MERN application, it was built using React, Express.js, JavaScript, CSS and HTML. </p>
            </div>
          </div>
        </a>
        <a href="https://fish-watch.netlify.app/">
          <div className={styles.card}>
            <img src="https://res.cloudinary.com/dlguuhqej/image/upload/v1662138049/Portfolio/fishwatch_wdqfqw.png" alt="Avatar"></img>
            <div className={styles.container}>
              <h4><b>Fish Watch</b></h4>
              <p>We built a React application which monitors fish stocks in the Atlantic Ocean using an external API. </p>
            </div>
          </div>
        </a>
        <a href="https://dancfc84.github.io/Project_1/">
          <div className={styles.card}>
            <img src="https://res.cloudinary.com/dlguuhqej/image/upload/v1662138053/Portfolio/tetris_hgcpm6.png" alt="Avatar"></img>
            <div className={styles.container}>
              <h4><b>Tetris</b></h4>
              <p>I had one week to build a grid-based game using JavaScript, HTML and CSS. I wanted to challenge myself, so I chose Tetris. This project helped me deepen my knowledge of JavaScript.</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Portfolio
