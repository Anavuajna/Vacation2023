import { useState } from 'react';
import { dataHotels } from './dataHotels';
import './App.css';


function Hotels() {

  const [hotels, setHotels] = useState(dataHotels);

  return (
<div>
      <div className='container'>
        <h2>Пора подумать об очередном отпуске...</h2>
      </div>

      <div className='container'>
      <h2>Выбираем из {hotels.length} отелей:</h2>
      </div>
      {hotels.map((hotel => {
        const {id, name, picture, place, price} = hotel

      const deleteHotel = (id) => {
        let newHotels = hotels.filter(hotel => hotel.id !==id);
        setHotels(newHotels)
      }

        return (
          <div>
            <div className='container'>
              <h2>{id} - {name}</h2>
            </div>
            <div className='container' key={id}>
              <img src={picture} className="photo-hotel" alt="hotel"/>
            </div>
            <div className='container'>
              <h3>Находится: {place}</h3>
            </div>
            <div className='container'>
              <h3>Стоимость: {price}</h3>
            </div>
            <div className='container'>
              <button className='delete' onClick={() => deleteHotel(id)}>В другой раз</button>
            </div>
              <hr></hr>
          </div>
        )
      }))}
      <div className='container'>
        <button className='deleteAll' onClick={() => setHotels([])}>⛔Отдохнем в следующем году, а в этом купим квартиру</button>
      </div>
      
    </div>
  );
}

export default Hotels;
