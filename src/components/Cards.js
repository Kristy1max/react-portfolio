import React from 'react';
import CardItem from './CardItem';
import './Cards.scss';

function Cards() {
  return (
    <div className='cards'>
      <h1>My Hobbies</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src='images/luca-bravo-O453M2Liufs-unsplash.jpg'
              text='Travelling'
              label='Adventure'
              // path='/'
            />
            <CardItem 
              src='images/luca-bravo-O453M2Liufs-unsplash.jpg'
              text='Travelling'
              label=''
              // path='/'
            />
            <CardItem 
              src='images/luca-bravo-O453M2Liufs-unsplash.jpg'
              text='Travelling'
              label=''
              // path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
