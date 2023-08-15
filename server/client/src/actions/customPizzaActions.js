import axios from "axios";

export const savePizza = (size, toppings, _id) => {
  var pizza = {
    toppings: toppings,
    size: size,
    _id: _id,
  };

  localStorage.setItem("custom pizza", JSON.stringify(pizza));

  return axios.post("/api/custompizza/savecustompizza", { pizza });
};
