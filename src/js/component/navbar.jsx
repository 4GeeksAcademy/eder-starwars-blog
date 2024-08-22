import React from "react";

export function NavBar() {
  return (
    <ul className="nav nav-pills py-md-5 py-3 opacity-100">
      <li>
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png"
          alt=""
          style={{ maxWidth: "100px", height: "auto" }}
        />
      </li>
      <li className="nav-item dropdown ms-auto">
        <a
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-expanded="false"
        >
          Active
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}
