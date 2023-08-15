import axios from "axios";

export const savePizza = (size, toppings) => {
  var pizza = {
    toppings: toppings,
    size: size,
  };

  localStorage.setItem("custom pizza", JSON.stringify(pizza));

  return axios.post("/api/custompizza/savecustompizza", { pizza });
};
