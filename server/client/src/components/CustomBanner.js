import React from "react";

export default function CustomBanner() {
  return (
    <div className="bg-light m-3 rounded d-flex justify-content-between align-items-center cbnr">
      <img
        src="https://github.com/Namarya/menu-items/blob/main/imgs/custompizzaslices.jpg?raw=true"
        alt="different toppings"
        className="img-fluid"
        style={{
          width: "40rem",
          height: "15rem",
          objectFit: "cover",
          borderTopLeftRadius: "0.5rem",
          borderBottomLeftRadius: "0.5rem",
        }}
      />
      <div className="p-1 d-flex flex-column gap-2 justify-content-between">
        <h1>CUSTOM PIZZA</h1>
        <p className="" style={{ maxWidth: "570px" }}>
        Embark on Pizza Perfection: Unleash Your Imagination, Craft Your Custom Pizza today, and Savor Every Bite!
        </p>
        <div
          
        >
          <button onClick={() => {
            window.location.href = "/custompizza";
          }} className="btn">START BUILDING!</button>
        </div>
      </div>
    </div>
  );
}
