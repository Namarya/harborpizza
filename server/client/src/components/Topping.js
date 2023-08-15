import React from "react";
import pepperoniImg from "../imgs/pepperoni-slices.png";
import hamImg from "../imgs/ham.png";
import sausageImg from "../imgs/sausage-peices.png";
import chickenImg from "../imgs/shredded-chicken.png";
import baconImg from "../imgs/bacon-bits.png";
import mushroomImg from "../imgs/mushrooms.png";
import oliveImg from "../imgs/olives.png";
import bellPepperImg from "../imgs/green-bell-pepper.png";
import onionImg from "../imgs/Red-onions-sliced.png";
import pineappleImg from "../imgs/Pineapple.png";
import jalapenoImg from "../imgs/jalapeno.png";
import cheeseImg from "../imgs/mozzarella-cheese.png";

const toppingImg = {
  Pepperoni: pepperoniImg,
  Ham: hamImg,
  "Italian Sausage": sausageImg,
  Chicken: chickenImg,
  Bacon: baconImg,
  Mushroom: mushroomImg,
  "Black Olives": oliveImg,
  Onions: onionImg,
  "Green Bell Pepper": bellPepperImg,
  Pineapple: pineappleImg,
  Jalapeño: jalapenoImg,
  "Extra Cheese": cheeseImg,
};

export default function Topping({ topping }) {
  const selectedToppingImg = toppingImg[topping];

  return (
    <div>
      <div>
        <h1>{topping}</h1>
        {selectedToppingImg && (
          <img
            src={selectedToppingImg}
            alt={topping}
            className="img-fluid"
            style={{
              width: "7rem",
              height: "5rem",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
        )}
      </div>
    </div>
  );
}
