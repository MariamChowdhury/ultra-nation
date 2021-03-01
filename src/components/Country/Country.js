import React from "react";

const Country = (props) => {
  // console.log(props);
  const { name, population, region, flag } = props.country;
  const flagStyle = {
    height: "50px",
  };
  const countryStyle = { 
    border: "2px solid green",
    margin: "5px",
    padding: "5px",
  };
  const addCountry=props.addCountry;
  
  return (
    <div style={countryStyle}>
      <img style={flagStyle} src={flag} alt="" />
      <h3>This is {name}</h3>
      <p>Population: {population}</p>
      <p>
        <small>Region: {region}</small>
      </p>
      <button onClick={() =>addCountry(props.country)}>
        Add Country
      </button>
    </div>
  );
};

export default Country;
