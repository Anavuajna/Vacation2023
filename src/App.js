// import { useState } from 'react';
// import { dataSlides } from './dataSlides';
// import { dataHotels } from './dataHotels';
// import './App.css';
// import back from "./back.png"
// import forward from "./forward.png"

// function App() {

//   // 1- слайды

//   const [photo, setPhoto] = useState(0);
//   const image = dataSlides[photo];

//   const previousPhoto = () => {
//     setPhoto ((photo => {
//       photo --;
//       if (photo < 0) {
//         photo = dataSlides.length -1;
//       }
//       return photo
//     }))
//   }

//   const nextPhoto = () => {
//     setPhoto((photo => {
//       photo ++;
//       if (photo > dataSlides.length -1) {
//         photo = 0;
//       }
//       return photo
//     }))
//   }

//   // 2 - отели

//   const [hotels, setHotels] = useState(dataHotels);


//   return (
//     <div className="App">
//       <div className='container'>
//         <h1>Отлично отдохнули в 2022 году</h1>
//       </div>
//       <div className='container'>
//         <button className='btn' onClick={previousPhoto}><img src={back} alt="previous"/></button>
//         <img className='photo' src={image} alt='vacation'/>
//         <button className='btn' onClick={nextPhoto}><img src={forward} alt="next"/></button>
//       </div>

//       <div className='container'>
//         <h2>Пора подумать об очередном отпуске...</h2>
//       </div>


//       <div className='container'>
//       <h2>Выбираем из {hotels.length} отелей:</h2>
//       </div>
//       {hotels.map((hotel => {
//         const {id, name, picture, place, price} = hotel

//       const deleteHotel = (id) => {
//         let newHotels = hotels.filter(hotel => hotel.id !==id);
//         setHotels(newHotels)
//       }

//         return (
//           <div>
//             <div className='container'>
//               <h2>{id} - {name}</h2>
//             </div>
//             <div className='container' key={id}>
//               <img src={picture} className="photo-hotel" alt="hotel"/>
//             </div>
//             <div className='container'>
//               <h3>Находится: {place}</h3>
//             </div>
//             <div className='container'>
//               <h3>Стоимость: {price}</h3>
//             </div>
//             <div className='container'>
//               <button className='delete' onClick={() => deleteHotel(id)}>В другой раз</button>
//             </div>
//               <hr></hr>
//           </div>
//         )
//       }))}
//       <div className='container'>
//         <button className='deleteAll' onClick={() => setHotels([])}>⛔Отдохнем в следующем году, а в этом купим квартиру</button>
//       </div>
      
//     </div>
//   );
// }

// export default App;


import './App.css';
import Carousel from './Carousel';
import Hotels from './Hotels';


function App() {

  

  return (
    <div className="App">
      <Carousel/>
      <Hotels/>
      
    </div>
  );
}

export default App;
