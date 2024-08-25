import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

export function NavBar() {
  const { store, actions } = useContext(Context);

  /*  setInterval(() => {
    console.log("liked", test);
    //console.log("subset", subset);
  }, 10000); */
  const buildNavbar = () => {
    return (
      <ul className="nav nav-pills py-md-5 py-3 opacity-100">
        <li>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png"
            alt=""
            style={{ maxWidth: "100px", height: "auto" }}
          />
        </li>
        <li className="nav-item dropdown ms-auto  rounded-3 btn-primary">
          <a
            className="nav-link  text-light fs-5"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Favorites
          </a>
          <ul className="dropdown-menu">{buildLikes}</ul>
        </li>
      </ul>
    );
  };

  const buildLikes = store.liked.map((value, key) => {
    return (
      <li>
        <a className="dropdown-item" href="#">
          {value.name}
        </a>
      </li>
    );
  });

  return buildNavbar();
}
