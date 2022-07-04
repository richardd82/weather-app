import React, { useState } from 'react';
//import '../App.js';
import styles from '../styles/Card.module.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return <div className={styles.SearchBar} >
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
    <input 
      className={styles.TextSearch} 
      placeholder='Ciudad...' 
      value = {city}
      onChange = {e => setCity(e.target.value)}
    /> 
    <input className={styles.Button} type="submit" value="agregar" />
    </form>
  </div>
};