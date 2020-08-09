import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import datebase from "../../firebase";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const unsubscribe = datebase
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      // clean up function
      unsubscribe();
    };
  }, []);
  return (
    <div>
      <div className="tinderCards__cardContaner">
        {people.map((person) => (
          <TinderCard className="swipe" key={person.name}>
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
              preventSwipe={["up", "down"]}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
