import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section>
        <div className='section'>
        <div className='hero-text'>
            <h1>Unlock your business <br/> potentail with facebook and  <br/> instagram advertising</h1>
            <p>Let handle it for you</p>
            <button>Start Now</button>
        </div>
        <div  className='hero-img'>
            <img src='/images/img3.png' alt='' />
        </div>
        </div>
    </section>
  )
}

export default Hero