import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export function CarouselItems() {
  const { store, actions } = useContext(Context);
  const cardsPerSlide = 5;
  const numberOfSlides = Math.ceil(store.characters.length / cardsPerSlide);
  const [itemsDetails, setItemsDetails] = useState({
    people: {},
  });

  let slideConstructInterval = [0, cardsPerSlide];
  let dummyIterator = ["dummy"];

  async function getDetails(type, id) {
    if (!(id in itemsDetails)) {
      const info = await loadSpecificData(type, id);
      const newItemsDetails = { ...itemsDetails };
      newItemsDetails[type][id] = info;
      setItemsDetails(newItemsDetails);
    }
    return console.log(itemsDetails[type][id]);
  }

  const loadSpecificData = async (type, id) => {
    const URL = "https://www.swapi.tech/api/" + type + "/" + id;
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data.result;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  useEffect(() => {
    actions.loadSomeData("people", "characters");
    actions.loadSomeData("planets", "planets");
    actions.loadSomeData("vehicles", "vehicles");

    /*  setInterval(() => {  
        console.log(store.characters);        
      }, 2000); */
  }, []);

  const carouselEnsamble = () => {
    return (
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade  mb-lg-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">{carouselSlides()}</div>
        <button
          className="carousel-control-prev"
          style={{ maxHeight: "350px" }}
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          style={{ maxHeight: "350px" }}
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  };

  const carouselSlides = () => {
    let stage = [];
    for (let index = 0; index < numberOfSlides; index++) {
      const buildingSlide = dummyIterator.map((value, key) => {
        return (
          <div
            className={`carousel-item ${
              index == 0 ? "active" : ""
            } d-flex justify-content-center`}
          >
            <div className="row row-cols-1 row-cols-md-5 rows-cols-lg-5 g-4">
              {carouselCards()}
            </div>
          </div>
        );
      });
      stage = [...stage, buildingSlide];
      slideConstructInterval[0] = slideConstructInterval[0] + cardsPerSlide;
      slideConstructInterval[1] = slideConstructInterval[1] + cardsPerSlide;
    }
    return stage;
  };

  const carouselCards = () => {
    let subset = store.characters.slice(
      slideConstructInterval[0],
      slideConstructInterval[1]
    );
    const cardsInSlide = subset.map((value, key) => {
      return (
        <div className="col">
          <div className="card bg-transparent border border-light border-3 h-100">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${value.uid}.jpg`}
              className="card-img-top img-thumbnail"
              alt="Character Image"
            />
            <div className="card-body">
              <div className="p-0 m-0 text-light">
                <button
                  className="btn btn-dark d-flex w-100"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapseExample${value.uid}`}
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  id={value.uid}
                  onClick={(e) => {
                    getDetails("people", e.target.id);
                  }}
                >
                  <h5 className="card-title me-auto">{value.name}</h5>
                  <span className="dropdown-toggle"></span>
                </button>
                <div
                  className="collapse bg-transparent text-light"
                  id={`collapseExample${value.uid}`}
                >
                  <div className="card card-body bg-transparent text-light">
                    <p className="py-0 my-0">
                      Gender :{" "}
                      {itemsDetails["people"][value.uid] === undefined
                        ? ""
                        : itemsDetails["people"][value.uid].properties.gender}
                    </p>
                    <p className="py-0 my-0">
                      {" "}
                      Hair Color:{" "}
                      {itemsDetails["people"][value.uid] === undefined
                        ? ""
                        : itemsDetails["people"][value.uid].properties
                            .hair_color}
                    </p>
                    <p className="py-0 my-0">
                      Eye-Color:{" "}
                      {itemsDetails["people"][value.uid] === undefined
                        ? ""
                        : itemsDetails["people"][value.uid].properties
                            .eye_color}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <button
                      type="button"
                      className={`btn  fw-bold border-3 border-primary btn-dark mt-md-2`}
                      onMouseEnter={(e) => {
                        e.stopPropagation;
                        e.target.classList.value =
                          "btn  fw-bold border-3 border-primary btn-light mt-md-2 ";
                        console.log(e);
                      }}
                      onMouseLeave={(e) => {
                        e.stopPropagation;
                        e.target.classList.value =
                          "btn  fw-bold border-3 border-primary btn-dark mt-md-2 ";
                      }}
                    >
                      <Link
                        to={`/info/people/${value.uid}`}
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        Learn more!
                      </Link>
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark  border-3 border-primary  mt-md-2 ms-auto"
                      id={value.uid}
                      onMouseEnter={(e) => {
                        e.stopPropagation;
                        e.target.classList.value =
                          "btn  fw-bold border-3 border-primary btn-light mt-md-2 ";
                      }}
                      onMouseLeave={(e) => {
                        e.stopPropagation;
                        e.target.classList.value =
                          "btn  fw-bold border-3 border-primary btn-dark mt-md-2 ";
                      }}
                      onClick={(e) => {
                        actions.saveLikedCards(
                          e.target.id,
                          "people",
                          itemsDetails["people"][value.uid].properties.name
                        );
                      }}
                    >
                      <i className="fa-regular fa-heart" id={value.uid} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return cardsInSlide;
  };
  return carouselEnsamble();
}

/* Carousel Planets */

export function CarouselPlanets() {
  const { store, actions } = useContext(Context);
  const cardsPerSlide = 5;
  const numberOfSlides = Math.ceil(store.planets.length / cardsPerSlide);
  let slideConstructInterval = [0, cardsPerSlide];
  let dummyIterator = ["dummy"];

  const [itemsDetails, setItemsDetails] = useState({
    planets: {},
  });
  async function getDetails(type, id) {
    if (!(id in itemsDetails)) {
      const info = await loadSpecificData(type, id);
      const newItemsDetails = { ...itemsDetails };
      newItemsDetails[type][id] = info;
      setItemsDetails(newItemsDetails);
    }
    return console.log(itemsDetails[type][id]);
  }

  const loadSpecificData = async (type, id) => {
    const URL = "https://www.swapi.tech/api/" + type + "/" + id;
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data.result;
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const carouselEnsamble = () => {
    return (
      <div
        id="carouselExampleFade-Planets"
        className="carousel slide carousel-fade mb-lg-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">{carouselSlides()}</div>
        <button
          className="carousel-control-prev"
          style={{ maxHeight: "250px" }}
          type="button"
          data-bs-target="#carouselExampleFade-Planets"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          style={{ maxHeight: "250px" }}
          type="button"
          data-bs-target="#carouselExampleFade-Planets"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  };

  const carouselSlides = () => {
    let stage = [];
    for (let index = 0; index < numberOfSlides; index++) {
      const buildingSlide = dummyIterator.map((value, key) => {
        return (
          <div
            className={`carousel-item ${
              index == 0 ? "active" : ""
            } d-flex justify-content-center`}
          >
            <div className="row row-cols-1 row-cols-md-5 rows-cols-lg-5 g-4">
              {carouselCards()}
            </div>
          </div>
        );
      });
      stage = [...stage, buildingSlide];
      slideConstructInterval[0] = slideConstructInterval[0] + cardsPerSlide;
      slideConstructInterval[1] = slideConstructInterval[1] + cardsPerSlide;
    }
    return stage;
  };

  const carouselCards = () => {
    const addDefaultImg = (ev) => {
      ev.target.src = "https://i.postimg.cc/bNhMznBH/4043.png";
    };
    let subset = store.planets.slice(
      slideConstructInterval[0],
      slideConstructInterval[1]
    );
    //console.log(subset);
    const cardsInSlide = subset.map((value, key) => {
      return (
        <div className="col">
          <div className="card bg-transparent border border-light border-3 h-100">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${value.uid}.jpg`}
              onError={addDefaultImg}
              className="card-img-top img-fluid"
              alt="Planet Image"
            />
            <div className="card-body">
              <div className="p-0 m-0 text-light">
                <button
                  className="btn btn-dark d-flex w-100"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapseExamplePlanets${value.uid}`}
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  id={value.uid}
                  onClick={(e) => {
                    getDetails("planets", e.target.id);
                  }}
                >
                  <h5 className="card-title me-auto">{value.name}</h5>
                  <span className="dropdown-toggle"></span>
                </button>
                <div
                  className="collapse bg-transparent text-light"
                  id={`collapseExamplePlanets${value.uid}`}
                >
                  <div className="card card-body bg-transparent text-light">
                    <p className="py-0 my-0">
                      Climate:{" "}
                      {itemsDetails["planets"][value.uid] === undefined
                        ? ""
                        : itemsDetails["planets"][value.uid].properties.climate}
                    </p>
                    <p className="py-0 my-0">
                      {" "}
                      Gravity:{" "}
                      {itemsDetails["planets"][value.uid] === undefined
                        ? ""
                        : itemsDetails["planets"][value.uid].properties.gravity}
                    </p>
                    <p className="py-0 my-0">
                      Diameter:{" "}
                      {itemsDetails["planets"][value.uid] === undefined
                        ? ""
                        : itemsDetails["planets"][value.uid].properties
                            .diameter}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <button
                      type="button"
                      className={`btn  fw-bold border-3 border-primary btn-dark mt-md-2`}
                      onMouseEnter={(e) => {
                        e.stopPropagation;
                        e.target.classList.value =
                          "btn  fw-bold border-3 border-primary btn-light mt-md-2 ";
                        console.log(e);
                      }}
                      onMouseLeave={(e) => {
                        e.stopPropagation;
                        e.target.classList.value =
                          "btn  fw-bold border-3 border-primary btn-dark mt-md-2 ";
                      }}
                    >
                      <Link
                        to={`/info/planets/${value.uid}`}
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        Learn more!
                      </Link>
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark  border-3 border-primary  mt-md-2 ms-auto"
                      id={value.uid}
                      onMouseEnter={(e) => {
                        e.stopPropagation;
                        e.target.classList.value =
                          "btn  fw-bold border-3 border-primary btn-light mt-md-2 ";
                      }}
                      onMouseLeave={(e) => {
                        e.stopPropagation;
                        e.target.classList.value =
                          "btn  fw-bold border-3 border-primary btn-dark mt-md-2 ";
                      }}
                      onClick={(e) => {
                        actions.saveLikedCards(
                          e.target.id,
                          "planets",
                          itemsDetails["planets"][value.uid].properties.name
                        );
                        console.log(store.liked);
                      }}
                    >
                      <i className="fa-regular fa-heart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return cardsInSlide;
  };
  return carouselEnsamble();
}

/* Carousel Vehicles */

export function CarouselVehicles() {
  const { store, actions } = useContext(Context);
  const cardsPerSlide = 5;
  const numberOfSlides = Math.ceil(store.vehicles.length / cardsPerSlide);
  let slideConstructInterval = [0, cardsPerSlide];
  let dummyIterator = ["dummy"];

  const [itemsDetails, setItemsDetails] = useState({
    vehicles: {},
  });
  async function getDetails(type, id) {
    if (!(id in itemsDetails)) {
      const info = await loadSpecificData(type, id);
      const newItemsDetails = { ...itemsDetails };
      newItemsDetails[type][id] = info;
      setItemsDetails(newItemsDetails);
    }
    return console.log(itemsDetails[type][id]);
  }

  const loadSpecificData = async (type, id) => {
    const URL = "https://www.swapi.tech/api/" + type + "/" + id;
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data.result;
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const carouselEnsamble = () => {
    return (
      <div
        id="carouselExampleFade-Vehicles"
        className="carousel slide carousel-fade mb-lg-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">{carouselSlides()}</div>
        <button
          className="carousel-control-prev"
          style={{ maxHeight: "180px" }}
          type="button"
          data-bs-target="#carouselExampleFade-Vehicles"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          style={{ maxHeight: "180px" }}
          type="button"
          data-bs-target="#carouselExampleFade-Vehicles"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  };

  const carouselSlides = () => {
    let stage = [];
    for (let index = 0; index < numberOfSlides; index++) {
      const buildingSlide = dummyIterator.map((value, key) => {
        return (
          <div
            className={`carousel-item ${
              index == 0 ? "active" : ""
            } d-flex justify-content-center`}
          >
            <div className="row row-cols-1 row-cols-md-5 rows-cols-lg-5 g-4">
              {carouselCards()}
            </div>
          </div>
        );
      });
      stage = [...stage, buildingSlide];
      slideConstructInterval[0] = slideConstructInterval[0] + cardsPerSlide;
      slideConstructInterval[1] = slideConstructInterval[1] + cardsPerSlide;
    }
    return stage;
  };

  const carouselCards = () => {
    const addDefaultImg = (ev) => {
      ev.target.src = "https://i.postimg.cc/gJbyvVRg/4047.png";
    };
    let subset = store.vehicles.slice(
      slideConstructInterval[0],
      slideConstructInterval[1]
    );
    const cardsInSlide = subset.map((value, key) => {
      return (
        <div className="col">
          <div className="card bg-transparent border border-light border-3 h-100">
            <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${value.uid}.jpg`}
              onError={addDefaultImg}
              className="card-img-top img-fluid"
              alt="Vehicle Image"
            />
            <div className="card-body">
              <div className="p-0 m-0 text-light">
                <button
                  className="btn btn-dark d-flex w-100"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapseExampleVehicles${value.uid}`}
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  id={value.uid}
                  onClick={(e) => {
                    getDetails("vehicles", e.target.id);
                  }}
                >
                  <h5 className="card-title me-auto">{value.name}</h5>
                  <span className="dropdown-toggle"></span>
                </button>
                <div
                  className="collapse bg-transparent text-light"
                  id={`collapseExampleVehicles${value.uid}`}
                >
                  <div className="card card-body bg-transparent text-light">
                    <p className="py-0 my-0">
                      Crew :{" "}
                      {itemsDetails["vehicles"][value.uid] === undefined
                        ? ""
                        : itemsDetails["vehicles"][value.uid].properties.crew}
                    </p>
                    <p className="py-0 my-0">
                      {" "}
                      Model:{" "}
                      {itemsDetails["vehicles"][value.uid] === undefined
                        ? ""
                        : itemsDetails["vehicles"][value.uid].properties.model}
                    </p>
                    <p className="py-0 my-0">
                      Class:{" "}
                      {itemsDetails["vehicles"][value.uid] === undefined
                        ? ""
                        : itemsDetails["vehicles"][value.uid].properties
                            .vehicle_class}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <button
                      type="button"
                      className={`btn  fw-bold border-3 border-primary btn-dark mt-md-2`}
                      onMouseEnter={(e) => {
                        e.stopPropagation;
                        e.target.classList.value =
                          "btn  fw-bold border-3 border-primary btn-light mt-md-2 ";
                        console.log(e);
                      }}
                      onMouseLeave={(e) => {
                        e.stopPropagation;
                        e.target.classList.value =
                          "btn  fw-bold border-3 border-primary btn-dark mt-md-2 ";
                      }}
                    >
                      <Link
                        to={`/info/vehicles/${value.uid}`}
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        Learn more!
                      </Link>
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark  border-3 border-primary  mt-md-2 ms-auto"
                      id={value.uid}
                      onMouseEnter={(e) => {
                        e.stopPropagation;
                        e.target.classList.value =
                          "btn  fw-bold border-3 border-primary btn-light mt-md-2 ";
                      }}
                      onMouseLeave={(e) => {
                        e.stopPropagation;
                        e.target.classList.value =
                          "btn  fw-bold border-3 border-primary btn-dark mt-md-2 ";
                      }}
                      onClick={(e) => {
                        actions.saveLikedCards(
                          e.target.id,
                          "vehicles",
                          itemsDetails["vehicles"][value.uid].properties.name
                        );
                        console.log(store.liked);
                      }}
                    >
                      <i className="fa-regular fa-heart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return cardsInSlide;
  };
  return carouselEnsamble();
}
