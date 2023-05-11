import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);


  useEffect(() =>{
      const url = 'https://api.petfinder.com/v2/oauth2/token';
      const clientId = '7mqJ45O7ipnWKmeS6pgLL2kis53LyQNeQyP3jPRlebVsbfU2pL';
      const clientSecret = 'zMnfVlcqocwKAIcI98kEPizSgZ7oq9tpDLeEUFRB';
      const data = {
        grant_type: 'client_credentials',
        client_id: clientId ,
        client_secret: clientSecret
      }
      axios.post(url, data)
      .then(response => {
        console.log(response.data.access_token)
        fetchDog(response.data.access_token);
      })

  },[]);

  function fetchDog(accessToken) {
    const url = 'https://api.petfinder.com/v2/animals';

    axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        type: "Dog"
      },
    })
      .then(response => {
        setData(response.data.animals);
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <div>
      <h1>Animals:</h1>
      <ul>
        {data
          .filter(dog => dog.photos[0] != null) 
          .map(filteredDog => (
            <li key={filteredDog.id}>
              <h2>{filteredDog.name}</h2>
              <p>Sex: {filteredDog.gender}</p>
              <p>Age: {filteredDog.age}</p>
              <p>Description: {filteredDog.description}</p>
              <p>Tags: {filteredDog.tags}</p> 
                <img src={filteredDog.photos[0].small} alt={`Photo of ${filteredDog.name}`} />
            </li>
          ))}
      </ul>

    </div>
  );
}

export default App;
