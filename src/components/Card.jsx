import React from 'react';
import styles from '../styles/Card.module.css';
export default function Card({max, min, name, img, onClose}) {
  //console.log(arr)
  return <div className={styles.Card}>
    <button className={styles.Btn} onClick={onClose}>X</button>
    <h3>Max</h3>
    <p>{max} °C</p>
    <h3>Min</h3>
    <p>{min} °C</p>
    <img src={img} alt=""/>
    <h2>{name}</h2>
  </div>
  };
