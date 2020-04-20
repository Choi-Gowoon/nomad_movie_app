import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://i.ytimg.com/vi/iJzBe08Rtb8/hqdefault.jpg",
    rating: 4.5
  },
  {
    id: 2,
    name: "Kimbab",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Vegetable_gimbap.jpg/1200px-Vegetable_gimbap.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Samgiopsal",
    image: "https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG",
    rating: 4.4
  },
]

function Food({ name, picture, rating }) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}></img>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}></Food>)}
    </div >
  );
}

export default App;
