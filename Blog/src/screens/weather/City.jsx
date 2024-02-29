import React, { useState } from "react";
import "./City.css";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAutoComplName, getCityName } from "./features/city/citySlice";

const City = () => {
  const [cityName, setCityName] = useState("");
  const [showSugg, setShowSugg] = useState(false);
  const listOfSuggestion = useSelector((state) => state.city.listCity);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCityName(cityName));
  };

  return (
    <form className="city-container" onSubmit={handleSubmit}>
      <FaSearch className="city-icon" size={26} />
      <input
        className="city-input"
        type="text"
        placeholder="Найти город..."
        value={cityName}
        onChange={(e) => {
          setShowSugg(true);
          setCityName(e.target.value);
          dispatch(getAutoComplName(e.target.value));
        }}
      />
      {listOfSuggestion && showSugg && (
        <ul className="suggestions">
          {listOfSuggestion.slice(0, 5).map((item) => (
            <li
              className="sugg-item"
              key={item.id}
              onClick={(e) => {
                handleSubmit(e);
                setShowSugg(false);
              }}
            >
              {item.name}, {item.country}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default City;
