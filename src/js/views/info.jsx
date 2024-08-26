import React, { useContext, useEffect, useState } from "react";
import { NavBar } from "../component/navbar.jsx";
import { DataItem } from "../component/dataItem.jsx";

export function Info() {
  return (
    <>
      <div
        className="container-fluid px-3 pb-lg-3"
        style={{
          backgroundImage: `url("https://cdnb.artstation.com/p/assets/images/images/009/789/613/4k/vadim-sadovski-x11.jpg?1520912148")`,
          minHeight: "100vh",
        }}
      >
        <div className="container px-2">
          <NavBar />
          <DataItem isLoading="isLoading" />
        </div>
      </div>
    </>
  );
}
