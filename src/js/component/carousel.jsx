import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { any } from "prop-types";

export function CarouselItems() {
  const { store, actions } = useContext(Context);
  const cardsPerSlide = 5;
  const numberOfSlides = Math.ceil(store.characters.length / cardsPerSlide);
  let slideConstructInterval = [0, cardsPerSlide];

  useEffect(() => {
    actions.loadSomeData();
    /*  setInterval(() => {

      console.log(store.characters);
      
    }, 2000); */
  }, []);

  const carouselSlide = () => {
    let slides = [];
    

    
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
              alt="..."
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
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      {carouselSlide()}
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
  );
}





<div className="carousel-inner">
            <div
              className={`carousel-item ${
                index == 0 ? "active" : ""
              } d-flex justify-content-center`}
            >
              <div className="row row-cols-1 row-cols-md-5 rows-cols-lg-5 g-4">
                {carouselCards()}
              </div>
            </div>
          </div>









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
