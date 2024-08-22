import React from "react";
import { CarouselItems } from "../component/carousel.jsx";
import { NavBar } from "../component/navbar.jsx";

export function Home() {
  return (
    <>
      <div
        className="container-fluid px-3 vh-100"
        style={{
          backgroundImage: `url("https://cdnb.artstation.com/p/assets/images/images/009/789/613/4k/vadim-sadovski-x11.jpg?1520912148")`,
        }}
      >
        <div className="container px-2 ">
          <NavBar />
          <CarouselItems />
        </div>
      </div>
    </>
  );
}
