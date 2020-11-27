import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from './axios'; //custom axios with basurl setup

function TinderCards() {
  const [people, setpeople] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const req = await axios.get('/tinder/cards');

      setpeople(req.data);
    }

    fetchData();
  }, []); //it is a hook which will only be executed once

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
    // alredyRemoved.push(nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
    // charactersState = charactersState.filter(
    //   (character) => character.name !== name
    // );
    // setCharacters(charactersState);
  };

  return (
    <div className="tindercards">
      <div className="tinderCards_cardContainer">
        {people.map((person, index) => {
        //   {console.log(person.name)}
        return (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        );
        })}
      </div>
    </div>
  );
}

export default TinderCards;
