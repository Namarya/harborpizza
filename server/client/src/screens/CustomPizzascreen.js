import React, { useState } from "react";
import Topping from "../components/Topping";
import { v4 as uuidv4 } from "uuid";
import { savePizza } from "../actions/customPizzaActions";
import AddToCartBtn from "../components/AddToCartBtn";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";
export default function CustomPizzascreen() {
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [pizzaSize, setPizzaSize] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);
  const dispatch = useDispatch();

  const handleAddPizza = async (size, toppings) => {
    try {
      const response = await savePizza(size, toppings);
      console.log("Custom pizza saved:", response.data);
    } catch (error) {
      console.error("Error saving custom pizza:", error.message);
    }
  };
  const addtocart = () => {
    const pizza = {
      name: "CUSTOM PIZZA",
      _id: uuidv4(),
      image:
      "https://github.com/Namarya/menu-items/blob/main/imgs/custompizzaslices.png?raw=true",
      prices: [
        {
          "small (10 inches)": `${Number(4.69 + (.8 * selectedToppings.length)).toFixed(2)}`,
          "large (14 inches)": `${Number(6.99 + selectedToppings.length).toFixed(2)}`,
          "extra large (16 inches)": `${Number(7.99 + (2 * selectedToppings.length)).toFixed(2)}`
        }
      ],
    };
    var size;
    if(pizzaSize === "Small"){
      size = "small (10 inches)"
    }
    if(pizzaSize === "Large"){
      size = "large (14 inches)"
    }
    if(pizzaSize === "Extra Large"){
      size = "extra large (16 inches)"
    }
    dispatch(addToCart(pizza, 1, size));

  };
  const toppings = [
    "Pepperoni",
    "Extra Cheese",
    "Italian Sausage",
    "Bacon",
    "Ham",
    "Chicken",
    "Mushroom",
    "Black Olives",
    "Onions",
    "Green Bell Pepper",
    "Jalapeño",
    "Pineapple",
  ];
  const pizzaSides = ["Left", "Right", "Whole"];

  function changeSize(size) {
    setPizzaSize(size);
  }

  const handleToppingSideChange = (topping, side) => {
    setSelectedToppings((prevToppings) => {
      const updatedToppings = [...prevToppings];
      const index = updatedToppings.findIndex(
        (toppingWithSide) => toppingWithSide.topping === topping
      );

      if (index !== -1) {
        const existingSide = updatedToppings[index].side;
        if (existingSide === side) {
          updatedToppings.splice(index, 1);
        } else {
          updatedToppings[index].side = side;
        }
      } else {
        updatedToppings.push({ topping, side, id: uuidv4() });
      }
      console.log(updatedToppings);
      return updatedToppings;
    });
  };
  const isSelectedSide = (topping, side) => {
    return selectedToppings.some(
      (toppingWithSide) =>
        toppingWithSide.topping === topping && toppingWithSide.side === side
    );
  };

  const handleClick = (buttonId) => {
    switch (buttonId) {
      case 1:
        changeSize("Small");
        break;
      case 2:
        changeSize("Large");
        break;
      case 3:
        changeSize("Extra Large");
        break;
      default:
        changeSize(null);
    }
    setSelectedButton(buttonId);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ marginTop: "4rem", marginBottom: ".5rem" }}
    >
      <div className="container d-flex flex-wrap m-0 p-0 justify-content-evenly">
        <div
          className="toppings bg-white rounded-3"
          style={{ width: "40rem", boxShadow: "0px 0px 20px 1px #333" }}
        >
          {toppings.map((topping) => (
            <div
              key={topping}
              className="topping d-flex justify-content-between p-3 border-bottom border-dark"
              style={{}}
            >
              <div style={{}}>
                <Topping topping={topping} />
              </div>
              <div
                className="side-selections d-flex justify-content-between align-items-center"
                style={{ width: "20rem" }}
              >
                {/* Left */}
                <div
                  className={` ${
                    isSelectedSide(topping, pizzaSides[0])
                      ? "selected-side"
                      : ""
                  }`}
                  onClick={() =>
                    handleToppingSideChange(topping, pizzaSides[0])
                  }
                >
                  <svg
                    width="25"
                    height="50"
                    viewBox="0 0 25 50"
                    fill={
                      isSelectedSide(topping, pizzaSides[0])
                        ? "#A72222"
                        : "none"
                    }
                  >
                    <g>
                      <circle
                        cx="25"
                        cy="25"
                        r="21.5"
                        stroke="#A72222"
                        strokeWidth="5"
                      />
                      <rect x="20" y="2" width="5" height="45" fill="#A72222" />
                    </g>
                  </svg>
                  <p className="p-0 m-0">{pizzaSides[0]}</p>
                </div>

                {/* Right */}
                <div
                  className={`right-side ${
                    isSelectedSide(topping, pizzaSides[1])
                      ? "selected-side"
                      : ""
                  }`}
                  onClick={() =>
                    handleToppingSideChange(topping, pizzaSides[1])
                  }
                >
                  <svg
                    width="25"
                    height="50"
                    viewBox="0 0 25 50"
                    fill={
                      isSelectedSide(topping, pizzaSides[1])
                        ? "#A72222"
                        : "none"
                    }
                  >
                    <g>
                      <circle
                        cy="25"
                        r="21.5"
                        stroke="#A72222"
                        strokeWidth="5"
                      />
                      <rect y="2" width="5" height="45" fill="#A72222" />
                    </g>
                  </svg>
                  <p className="p-0 m-0">{pizzaSides[1]}</p>
                </div>

                {/* Whole */}
                <div
                  className={`whole-side ${
                    isSelectedSide(topping, pizzaSides[2])
                      ? "selected-side"
                      : ""
                  }`}
                  onClick={() =>
                    handleToppingSideChange(topping, pizzaSides[2])
                  }
                >
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill={
                      isSelectedSide(topping, pizzaSides[2])
                        ? "#A72222"
                        : "none"
                    }
                  >
                    <g>
                      <circle
                        cx="25"
                        cy="25"
                        r="21.5"
                        stroke="#A72222"
                        strokeWidth="5"
                      />
                    </g>
                  </svg>
                  <p className="p-0 m-0">{pizzaSides[2]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="complete-pizza p-3  bg-light rounded-3"
          style={{ boxShadow: "0px 0px 20px 1px #333" }}
        >
          <div
            className="size-selection rounded-3 "
            style={{ color: "#fff", backgroundColor: "#111" }}
          >
            <h1 className="m-0">SELECT YOUR SIZE</h1>
            <div
              className="w-100"
              style={{ height: "2px", backgroundColor: "#FFF" }}
            ></div>
            <div className="size-btns">
              <button
                className={`btn m-3 ${selectedButton === 1 ? "selected" : ""}`}
                onClick={() => handleClick(1)}
              >
                Small
              </button>
              <button
                className={`btn m-3 ${selectedButton === 2 ? "selected" : ""}`}
                onClick={() => handleClick(2)}
              >
                Large
              </button>
              <button
                className={`btn m-3 ${selectedButton === 3 ? "selected" : ""}`}
                onClick={() => handleClick(3)}
              >
                Extra Large
              </button>
            </div>
          </div>
          <div className="selected-toppings rounded-3 mt-1">
            <h1 className="m-0">TOPPINGS LIST</h1>
            <div
              className="w-100"
              style={{ height: "2px", backgroundColor: "#FFF" }}
            ></div>
            {selectedToppings.length === 0 ? (
              <p>No toppings selected.</p>
            ) : (
              <div className="">
                {selectedToppings.map((toppingWithSide) => (
                  <li
                    className="list-unstyled text-start mb-1 d-flex w-100 justify-content-between bg-gradient rounded p-1"
                    style={{ backgroundColor: "#ddd" }}
                    key={toppingWithSide.id}
                  >
                    {`${toppingWithSide.topping}`}
                    {toppingWithSide.side === "Whole" && (
                      <div className="svg-topping">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="#A72222"
                        >
                          <g>
                            <circle
                              cx="12.5"
                              cy="12.5"
                              r="10.75"
                              stroke="#A72222"
                              strokeWidth="2.5"
                            />
                          </g>
                        </svg>
                      </div>
                    )}
                    {toppingWithSide.side === "Left" && (
                      <div className="svg-topping">
                        <svg
                          width="12.5"
                          height="25"
                          viewBox="0 0 12.5 25"
                          fill="#A72222"
                        >
                          <g>
                            <circle
                              cx="12.5"
                              cy="12.5"
                              r="10.75"
                              stroke="#A72222"
                              strokeWidth="2.5"
                            />
                            <rect
                              x="10"
                              y="1"
                              width="2.5"
                              height="22.5"
                              fill="#A72222"
                            />
                          </g>
                        </svg>
                      </div>
                    )}
                    {toppingWithSide.side === "Right" && (
                      <div className="svg-topping">
                        <svg
                          width="12.5"
                          height="25"
                          viewBox="0 0 12.5 25"
                          fill="#A72222"
                        >
                          <g>
                            <circle
                              cx="0"
                              cy="12.5"
                              r="10.75"
                              stroke="#A72222"
                              strokeWidth="2.5"
                            />
                            <rect
                              y="1"
                              width="2.5"
                              height="22.5"
                              fill="#A72222"
                            />
                          </g>
                        </svg>
                      </div>
                    )}
                  </li>
                ))}
              </div>
            )}
          </div>
          <div
            onClick={() => {
              addtocart();
              handleAddPizza(pizzaSize, selectedToppings);
            }}
          >
            <AddToCartBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
