import React from "react";
import { useState, useEffect } from "react";
import "./style.scss";

import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
function Home() {

  const [data, setData] = useState([]);
  const [searchInp, setSearchInp] = useState("");
  const [filterdata, setFilterdata] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((api) => setData(api));
  }, []);

  function handleInput(e) {
    setSearchInp(e.target.value);
  }

  function handleFilter(region) {
    setFilterdata(region);
  }

  return (
    <div className="homePage">
      <Navbar/>
      <div className="container">
        <div className="inpFil">
          <div className="input">
            <i class="fa-solid fa-magnifying-glass fa-fw"></i>
            <input
              type="text"
              placeholder="Search for a country…"
              value={searchInp}
              onChange={handleInput}
            />
          </div>
          <div className="filter">
            Filter by region
            <div className="select">
              <li onClick={() => handleFilter("")}>All</li>
              <li onClick={() => handleFilter("Africa")}>Africa</li>
              <li onClick={() => handleFilter("America")}>America</li>
              <li onClick={() => handleFilter("Asia")}>Asia</li>
              <li onClick={() => handleFilter("Europe")}>Europe</li>
              <li onClick={() => handleFilter("Oceania")}>Oceania</li>
            </div>
          </div>
        </div>
        <div className="cards">
          {data
            .filter((item) =>
              item.name.common.toLowerCase().includes(searchInp.toLowerCase())
            )
            .filter((item) => item.region.includes(filterdata))
            .map((item) => (

              <Link to={"/details/name/" + item.name.common} key={item.name.common}>
                <div className="card" key={item.id}>
                  <img src={item.flags.png} alt="" />
                  <div className="info">
                    <h2>{item.name.common}</h2>
                    <p>Population: {item.population}</p>
                    <p>Region: {item.region}</p>
                    <p>Capital: {item.capital}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
