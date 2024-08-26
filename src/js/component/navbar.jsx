import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png"
              alt=""
              style={{ maxWidth: "100px", height: "auto" }}
            />
          </Link>
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
          <ul className="dropdown-menu m-0 p-0">{buildLikes}</ul>
        </li>
      </ul>
    );
  };

  const buildLikes = store.liked.map((value, key) => {
    return (
      <li>
        <div className="row d-flex mx-0 px-0 text-center align-items-center">
          <button type="button" className="btn btn-light col -8">
            <Link
              to={`/info/${value.type}/${value.id}`}
              style={{ textDecoration: "none" }}
            >
              {value.name}
            </Link>
          </button>
          <i
            className="fa-solid fa-trash-can ms-auto col-4 lh-base"
            id={value.key}
            onClick={(e) => actions.deleteLikedCards(e.target.id)}
          ></i>
        </div>
      </li>
    );
  });

  return buildNavbar();
}
