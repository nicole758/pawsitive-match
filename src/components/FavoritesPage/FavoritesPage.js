import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./FavoritesPage.scss";

function FavoritePage() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetchFavoriteDogs();
  }, []);

  const fetchFavoriteDogs = () => {
    axios
      .get('http://localhost:5050/favorite-dogs')
      .then((response) => {
        setDogs(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='favorites'>
      <h1 className='favorites-title'>Your Favorited Dogs</h1>
      {dogs.map((dog) => (
        <div className='favorites__container' key={dog.id}>
          <div className='favorites__container-left'>
          <h2 className="favorites__container-name">{dog.name}</h2>
          <h3 className="favorites__container-gender">{dog.gender}</h3>
          </div>
          <div className='favorites__container-right'>
          <img className="favorites__container-photo" src={dog.photo} alt={dog.name} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FavoritePage;

