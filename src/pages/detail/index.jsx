import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./style.scss";
function Detail() {
  const { name } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/" + name)
      .then((res) => res.json())
      .then((api) => setData(api));
  }, [name]);
  return (
    <>
      <Navbar />
      <div className="back">
        <Link to="/" className="back-link">
          <span>Back</span>
        </Link>
      </div>
      <div className="detailCards">
        {data.map((item) => (
          <div className="detailCard">
            <div className="img">
              <img src={item.flags.png} alt="" />
            </div>
            <div className="info">
              <h2>{item.name.common}</h2>
              <p>
                <span>Native name: </span>
                {item.name.official}
              </p>
              <p>
                <span>Population: </span>
                {item.population}
              </p>
              <p>
                <span>Region: </span>
                {item.region}
              </p>
              <p>
                <span>Sub region:</span> {item.subregion}
              </p>
              <p>
                <span>Capital:</span> {item.capital}
              </p>
              <p>
                <span>Top Level Domain:</span> {item.tld}
              </p>
              <p>
                <span>Border Countries:</span> {item.borders}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Detail;
