import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./FavoritesPage.scss";
import back from  "../../assets/back.png";
import { Link, useParams } from 'react-router-dom';
import trash from "../../assets/trash.png";

function FavoritePage() {
  const [dogs, setDogs] = useState([]);
  const { id } = useParams();
  const [name, setName] = useState('');

  useEffect(() => {
    fetchFavoriteDogs();
    fetchName();
  }, []);

  const handleDeleteFavoriteDog = (dogId) => {
    axios
      .delete(`http://localhost:5050/favorite-dogs/${dogId}`)
      .then((response) => {
        fetchFavoriteDogs();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchFavoriteDogs = () => {
    axios
      .get(`http://localhost:5050/users/${id}/favoriteDogs`)
      .then((response) => {
        setDogs(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    
  };


  const fetchName = () => {
    axios
      .get(`http://localhost:5050/users/${id}`)
      .then((response) => {
        setName(response.data.name);
      })
      .catch((error) => {
        console.error(error);
      });
  };



  return (
    <div className='favorites'>
      <div className='favorites-flex'>
      <Link className='favorites-link' to={`/dashboard/${id}`}>
      <img className='favorites-back' src={back}></img>
      </Link>
      <h1 className='favorites-title'>{name.charAt(0).toUpperCase() + name.slice(1)}'s Favorite Dogs</h1>
      </div>
      {dogs.map((dog) => (
        <div className='favorites__container' key={dog.id}>
          <div className='favorites__container-left'>
          <img className='favorites__container-trash' src={trash} alt="Delete" onClick={() => handleDeleteFavoriteDog(dog.id)} />
          <h2 className="favorites__container-name">{dog.name}</h2>
          <h3 className="favorites__container-gender">{dog.gender}</h3>
          <button className='favorites__container-apply'>Apply Now</button>
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

