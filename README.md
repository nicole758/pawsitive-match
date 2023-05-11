import React from 'react'
import TinderCard from 'react-tinder-card'
import { useState, useEffect } from 'react'
import "./AnimalCard.scss"
import axios from 'axios'
import undo from "../../assets/undo.png";

function AnimalCard() {
    const [data, setData] = useState([]);
    const [swipedCards, setSwipedCards] = useState([]);
    const [lastSwipedCard, setLastSwipedCard] = useState([]);

    useEffect(() => {
        const url = "https://api.petfinder.com/v2/oauth2/token";
        const clientId = "7mqJ45O7ipnWKmeS6pgLL2kis53LyQNeQyP3jPRlebVsbfU2pL";
        const clientSecret = "zMnfVlcqocwKAIcI98kEPizSgZ7oq9tpDLeEUFRB";
        const data = {
            grant_type: "client_credentials",
            client_id: clientId,
            client_secret: clientSecret,
        };
        axios
            .post(url, data)
            .then((response) => {
                console.log(response.data.access_token);
                fetchDog(response.data.access_token);
            });
    }, []);

    function fetchDog(accessToken) {
        const url = "https://api.petfinder.com/v2/animals";

        axios
            .get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                params: {
                    type: "Dog",
                    limit: 100,
                },
            })
            .then((response) => {
                setData(response.data.animals);
            })
            .catch((err) => {
                console.error(err);
            });
    }
//     function handleSwipe(direction, dog) {
//         if (direction === "right") {
//             setSwipedCards((prevSwipedCards) => [...prevSwipedCards, dog]);
//         }
//     }

// function handleUndo() {
//     if (swipedCards.length > 0) {
//         const lastDog = swipedCards[swipedCards.length - 1];
//         setLastSwipedCard(lastDog);
//         setSwipedCards((prevSwipedCards) => prevSwipedCards.slice(0, -1));
//     }
// }


    return (
        <div className="card">
            {([data])
                .filter((dog) => dog.photos[0] != null)
                .map((filteredDog) => (
                    <TinderCard
                        className="card-swipe"
                        key={filteredDog.id}
                        preventSwipe={["up", "down"]}
                        // onSwipe={(direction) => handleSwipe(direction, filteredDog)}
                    >
                        <div
                            className="card-picture"
                            style={{ backgroundImage: `url(${filteredDog.photos[0].large})` }}
                        >
                            <div className="card-desc">
                                <button className="undo-button">
                                {/* onClick={handleUndo} */}
                                    <img className="card-desc-undo" src={undo}></img>
                                </button>
                                <h2 className="card-desc-dogName">{filteredDog.name}</h2>
                                <p className="card-desc-info">Sex: {filteredDog.gender}</p>
                                <p className="card-desc-info">Age: {filteredDog.age}</p>
                                <p className="card-desc-info">Description: {filteredDog.description}</p>
                                <p className="card-desc-info">Tags: {filteredDog.tags}</p>
                            </div>
                        </div>
                    </TinderCard>
                ))}
        </div>
    );
}


export default AnimalCard;