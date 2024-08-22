import React from "react";
import {
  CarouselItems,
  CarouselPlanets,
  CarouselVehicles,
} from "../component/carousel.jsx";
import { NavBar } from "../component/navbar.jsx";

export function Home() {
  return (
    <>
      <div
        className="container-fluid px-3 pb-lg-3"
        style={{
          backgroundImage: `url("https://cdnb.artstation.com/p/assets/images/images/009/789/613/4k/vadim-sadovski-x11.jpg?1520912148")`,
          height: "auto",
        }}
      >
        <div className="container px-2">
          <NavBar />
          <CarouselItems />
          <CarouselPlanets />
          <CarouselVehicles />
        </div>
      </div>
    </>
  );
}
