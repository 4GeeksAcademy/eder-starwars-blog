import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";

export function DataItem() {
  const [isLoading, setIsLoading] = useState(false);
  const [itemDetails, setItemDetails] = useState(undefined);
  const params = useParams();
  const test = useRef([]);

  useEffect(() => {
    const loadSpecificData = async () => {
      const URL = "https://www.swapi.tech/api/" + params.type + "/" + params.id;
      setIsLoading(true);
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setItemDetails(data.result);
        test.current = data;
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSpecificData();
    /*  setInterval(() => {
      console.log(itemDetails);
    }, 2000); */
  }, []);

  if (isLoading) {
    <div>We are loading..... traffic, right?</div>;
  }

  if (params.type == "people") {
    return (
      <div className="container">
        <div
          className="card mb-3 bg-transparent" /* style={{ maxWidth: "1040px" }} */
        >
          <div className="row g-0 ">
            <div className="col-md-12 col-lg-4 d-flex justify-content-center justify-content-md-center justify-content-lg-start">
              <img
                src={`https://starwars-visualguide.com/assets/img/${
                  params.type == "people" ? "characters" : params.type
                }/${params.id}.jpg`}
                className="img-fluid rounded rounded-3 border border-light border-5 "
                alt="..."
              />
            </div>
            <div className="col-md-12 col-lg-8 ps-md-2 ps-lg-4">
              <div className="card-body text-center text-light ps-lg-4 ms-lg-4 ps-md-2 ms-md-2 h-100 d-flex flex-column  justify-content-center">
                <h5 className="card-title display-3 fw-bold mb-lg-3">
                  {itemDetails == undefined ? "" : itemDetails.properties.name}
                </h5>
                <div className="d-flex 2 mt-lg-3">
                  <p
                    className="card-text fs-5 pt-lg-3"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Consectetur sapiente optio sint error corporis officia
                    temporibus blanditiis ex, excepturi possimus asperiores rem.
                    A rerum in dolores suscipit odio? Maiores, sit quibusdam
                    tenetur, numquam nulla voluptas impedit neque delectus non
                    obcaecati perferendis cumque iure est ipsum consectetur
                    rerum, maxime soluta repellat.
                  </p>
                </div>
                <p className="card-text mt-md-5">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0 my-lg-5">
          <hr className="border border-danger border-3 opacity-100 " />
        </div>
        <div className="container-fluid">
          <div className="row row-cols-3 row-cols-md-6 text-danger text-center fw-bold">
            <div className="col">
              <h3>Name</h3>
              <p>
                {itemDetails == undefined ? "" : itemDetails.properties.name}
              </p>
            </div>
            <div className="col">
              <h3>Birth Year</h3>
              <p>
                {itemDetails == undefined
                  ? ""
                  : itemDetails.properties.birth_year}
              </p>
            </div>
            <div className="col">
              <h3>Gender</h3>
              <p>
                {itemDetails == undefined ? "" : itemDetails.properties.gender}
              </p>
            </div>
            <div className="col">
              <h3>Height</h3>
              <p>
                {itemDetails == undefined ? "" : itemDetails.properties.height}
              </p>
            </div>
            <div className="col">
              <h3>Skin Color</h3>
              <p>
                {itemDetails == undefined
                  ? ""
                  : itemDetails.properties.skin_color}
              </p>
            </div>
            <div className="col">
              <h3>Eye Color</h3>
              <p>
                {itemDetails == undefined
                  ? ""
                  : itemDetails.properties.eye_color}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (params.type == "vehicles") {
    return (
      <div className="container">
        <div
          className="card mb-3 bg-transparent" /* style={{ maxWidth: "1040px" }} */
        >
          <div className="row g-0 ">
            <div className="col-md-12 col-lg-4 d-flex justify-content-center justify-content-md-center justify-content-lg-start">
              <img
                src={`https://starwars-visualguide.com/assets/img/${
                  params.type == "people" ? "characters" : params.type
                }/${params.id}.jpg`}
                className=" rounded rounded-3 border border-light border-5 img-fluid"
                alt="..."
              />
            </div>
            <div className="col-md-12 col-lg-8 ps-md-2 ps-lg-4">
              <div className="card-body text-center text-light ps-lg-4 ms-lg-4 ps-md-2 ms-md-2 h-100 d-flex flex-column  justify-content-center">
                <h5 className="card-title display-3 fw-bold mb-lg-3">
                  {itemDetails == undefined ? "" : itemDetails.properties.name}
                </h5>
                <div className="d-flex 2 mt-lg-3">
                  <p
                    className="card-text fs-5 pt-lg-3"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Consectetur sapiente optio sint error corporis officia
                    temporibus blanditiis ex, excepturi possimus asperiores rem.
                    A rerum in dolores suscipit odio? Maiores, sit quibusdam
                    tenetur, numquam nulla voluptas impedit neque delectus non
                    obcaecati perferendis cumque iure est ipsum consectetur
                    rerum, maxime soluta repellat.
                  </p>
                </div>
                <p className="card-text mt-md-5">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0 my-lg-5">
          <hr className="border border-danger border-3 opacity-100 " />
        </div>
        <div className="container-fluid">
          <div className="row row-cols-3 row-cols-md-6 text-danger text-center fw-bold">
            <div className="col">
              <h3>Name</h3>
              <p>
                {itemDetails == undefined ? "" : itemDetails.properties.name}
              </p>
            </div>
            <div className="col">
              <h3>Class</h3>
              <p>
                {itemDetails == undefined
                  ? ""
                  : itemDetails.properties.vehicle_class}
              </p>
            </div>
            <div className="col">
              <h3>Model</h3>
              <p>
                {itemDetails == undefined ? "" : itemDetails.properties.model}
              </p>
            </div>
            <div className="col">
              <h3>Cost</h3>
              <p>
                {itemDetails == undefined
                  ? ""
                  : itemDetails.properties.cost_in_credits}
              </p>
            </div>
            <div className="col">
              <h3>Crew</h3>
              <p>
                {itemDetails == undefined ? "" : itemDetails.properties.crew}
              </p>
            </div>
            <div className="col">
              <h3>Max Speed</h3>
              <p>
                {itemDetails == undefined
                  ? ""
                  : itemDetails.properties.max_atmosphering_speed}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (params.type == "planets") {
    return (
      <div className="container">
        <div
          className="card mb-3 bg-transparent" /* style={{ maxWidth: "1040px" }} */
        >
          <div className="row g-0 ">
            <div className="col-md-12 col-lg-4 d-flex justify-content-center justify-content-md-center justify-content-lg-start">
              <img
                src={`https://starwars-visualguide.com/assets/img/${
                  params.type == "people" ? "characters" : params.type
                }/${params.id}.jpg`}
                className="img-fluid rounded rounded-3 border border-light border-5 "
                alt="..."
              />
            </div>
            <div className="col-md-12 col-lg-8 ps-md-2 ps-lg-4">
              <div className="card-body text-center text-light ps-lg-4 ms-lg-4 ps-md-2 ms-md-2 h-100 d-flex flex-column  justify-content-center">
                <h5 className="card-title display-3 fw-bold mb-lg-3">
                  {itemDetails == undefined ? "" : itemDetails.properties.name}
                </h5>
                <div className="d-flex 2 mt-lg-3">
                  <p
                    className="card-text fs-5 pt-lg-3"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Consectetur sapiente optio sint error corporis officia
                    temporibus blanditiis ex, excepturi possimus asperiores rem.
                    A rerum in dolores suscipit odio? Maiores, sit quibusdam
                    tenetur, numquam nulla voluptas impedit neque delectus non
                    obcaecati perferendis cumque iure est ipsum consectetur
                    rerum, maxime soluta repellat.
                  </p>
                </div>
                <p className="card-text mt-md-5">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0 my-lg-5">
          <hr className="border border-danger border-3 opacity-100 " />
        </div>
        <div className="container-fluid">
          <div className="row row-cols-3 row-cols-md-6 text-danger text-center fw-bold">
            <div className="col">
              <h3>Name</h3>
              <p>
                {itemDetails == undefined ? "" : itemDetails.properties.name}
              </p>
            </div>
            <div className="col">
              <h3>Climate</h3>
              <p>
                {itemDetails == undefined ? "" : itemDetails.properties.climate}
              </p>
            </div>
            <div className="col">
              <h3>Gravity</h3>
              <p>
                {itemDetails == undefined ? "" : itemDetails.properties.gravity}
              </p>
            </div>
            <div className="col">
              <h3>Diameter</h3>
              <p>
                {itemDetails == undefined
                  ? ""
                  : itemDetails.properties.diameter}
              </p>
            </div>
            <div className="col">
              <h3>Rotation Period</h3>
              <p>
                {itemDetails == undefined
                  ? ""
                  : itemDetails.properties.rotation_period}
              </p>
            </div>
            <div className="col">
              <h3>Population</h3>
              <p>
                {itemDetails == undefined
                  ? ""
                  : itemDetails.properties.population}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
