import { useState } from 'react';
import { dataSlides } from './dataSlides';
import './App.css';
import back from "./back.png"
import forward from "./forward.png"

function Carousel() {

    // 1- слайды
  
    const [photo, setPhoto] = useState(0);
    const image = dataSlides[photo];
  
    const previousPhoto = () => {
      setPhoto ((photo => {
        photo --;
        if (photo < 0) {
          photo = dataSlides.length -1;
        }
        return photo
      }))
    }
  
    const nextPhoto = () => {
      setPhoto((photo => {
        photo ++;
        if (photo > dataSlides.length -1) {
          photo = 0;
        }
        return photo
      }))
    }
  
    // 2 - отели
   
    return (
      <div className="App">
        <div className='container'>
          <h1>Отлично отдохнули в 2022 году</h1>
        </div>
        <div className='container'>
          <button className='btn' onClick={previousPhoto}><img src={back} alt="previous"/></button>
          <img className='photo' src={image} alt='vacation'/>
          <button className='btn' onClick={nextPhoto}><img src={forward} alt="next"/></button>
        </div>
  
        
        
      </div>
    );
  }
  
  export default Carousel;