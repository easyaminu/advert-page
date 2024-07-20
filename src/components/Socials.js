import React from 'react';
import LOGO1 from '../assets/logo1.png';
import LOGO2 from '../assets/logo2.png';
import LOGO3 from '../assets/logo3.png';
import LOGO4 from '../assets/logo4.png';

const datas = [
  {
    img: LOGO1,
    text: 'Follow us on facebook'
  },
  {
    img: LOGO2,
    text: 'Follow us on facebook'
  },
  {
    img: LOGO3,
    text: 'Follow us on facebook'
  },
  {
    img: LOGO4,
    text: 'Follow us on facebook'
  }
]



const Socials = () => {
  return (
    <div>{
      datas.map((data) => {
        <img src={data.img} />
        // <h1>{data.text}</h1>
      } )
      }</div>
  )
}

export default Socials