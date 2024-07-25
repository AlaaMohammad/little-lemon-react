import React from 'react'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio facere
          culpa hic nisi debitis impedit saepe veniam incidunt amet! Eveniet,
          harum quisquam animi veritatis culpa vitae unde possimus quia fugiat?
        </p>
        <a className="btn btn-primary" href="#">
          Reserve a Table
        </a>
      </div>
      <div className="hero-img">
        <img className="hero-img" src="./assets/img/hero.png" alt="" />
      </div>
    </section>
  );
}

export default Hero