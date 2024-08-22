import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export function CarouselItems() {
  const { store, actions } = useContext(Context);
  const cardsPerSlide = 5;
  const numberOfSlides = Math.ceil(store.characters.length / cardsPerSlide);
  let slideConstructInterval = [0, cardsPerSlide];
  let dummyIterator = ["dummy"];

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
          <div className="card">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${value.uid}.jpg`}
              className="card-img-top img-thumbnail"
              alt="Character Image"
            />
            <div className="card-body">
              <h5 className="card-title">Name</h5>
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
    let subset = store.planets.slice(
      slideConstructInterval[0],
      slideConstructInterval[1]
    );
    const cardsInSlide = subset.map((value, key) => {
      return (
        <div className="col">
          <div className="card">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${value.uid}.jpg`}
              className="card-img-top img-thumbnail"
              alt="Planet Image"
            />
            <div className="card-body">
              <h5 className="card-title">Name</h5>
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
    let subset = store.vehicles.slice(
      slideConstructInterval[0],
      slideConstructInterval[1]
    );
    const cardsInSlide = subset.map((value, key) => {
      return (
        <div className="col">
          <div className="card">
            <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${value.uid}.jpg`}
              className="card-img-top img-thumbnail"
              alt="Vehicle Image"
            />
            <div className="card-body">
              <h5 className="card-title">Name</h5>
            </div>
          </div>
        </div>
      );
    });
    return cardsInSlide;
  };
  return carouselEnsamble();
}

/* 
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active d-flex justify-content-center">
        

          <div className="row row-cols-1 row-cols-md-5 rows-cols-lg-5 g-4">
            <div className="col">
              <div className="card">
                <img
                  src="https://starwars-visualguide.com/assets/img/characters/35.jpg"
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Name</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://starwars-visualguide.com/assets/img/characters/58.jpg"
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Name</h5>
                  <p className="card-text">Gender: XX</p>
                  <p className="card-text">Hair Color: XX</p>
                  <p className="card-text">Eye-Color: XX</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://starwars-visualguide.com/assets/img/characters/10.jpg"
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Name</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://starwars-visualguide.com/assets/img/characters/10.jpg"
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Name</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://starwars-visualguide.com/assets/img/characters/58.jpg"
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Name</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item d-flex justify-content-center">
          <div className="row row-cols-1 row-cols-md-5 rows-cols-lg-5 g-4">
            <div className="col">
              <div className="card">
                <img
                  src="https://starwars-visualguide.com/assets/img/characters/20.jpg"
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Name</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://starwars-visualguide.com/assets/img/characters/20.jpg"
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Name</h5>
                  <p className="card-text">Gender: XX</p>
                  <p className="card-text">Hair Color: XX</p>
                  <p className="card-text">Eye-Color: XX</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://starwars-visualguide.com/assets/img/characters/20.jpg"
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Name</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://starwars-visualguide.com/assets/img/characters/35.jpg"
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Name</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://starwars-visualguide.com/assets/img/characters/35.jpg"
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Name</h5>
                </div>
              </div>
            </div>
          </div>
        </div>     
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
 */
