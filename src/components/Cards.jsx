import React from 'react';
import './Card';
import Card from './Card';
import '../App.js';
import styles from '../styles/Card.module.css';
export default function Cards({cities, onClose}) {
  
  if(cities){
    console.log(cities)
    return (
    <div className={styles.Cards}>
      {
        cities.map(cities => 
          <Card           
            max={cities.max} 
            min={cities.min} 
            name={cities.name} 
            img={cities.img} 
            onClose={()=> onClose(cities.id)} 
            key={cities.id}
            id={cities.id}
          />          
        )        
      }
    </div>
    )
  }
  else{
    return (
      <div>Sin Ciudades</div>
    )
  }
};