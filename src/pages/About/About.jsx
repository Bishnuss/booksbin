import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BooksBin</h2>
            <p className='fs-17'>Books are referred to as a man's best friend. They are very beneficial for mankind and have helped it evolve. There is a powerhouse of information and knowledge. Books offer us so many things without asking for anything in return. Books leave a deep impact on us and are responsible for uplifting our mood.</p>
           <p>BooksBin is the best choice </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
