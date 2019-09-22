import React from "react";
import InputField from "../../atoms/input-field";
import Image from "../../atoms/image";
import search_icon from "../../../assets/icons/search.svg";
import "./SearchBox-style.scss";

const SearchBox = props => {
  const { setCity, getWeatherData, handleKeyDown } = props;
  return (
    <>
      <div className="search" id="horizontal">
        <InputField
          type="text"
          onChange={setCity}
          placeholder="Search A City..."
          className="search_input search_input--text"
          handleKeyDown={handleKeyDown}
        />
        <Image
          image={search_icon}
          className="search_icon"
          onClick={getWeatherData}
        />
      </div>
    </>
  );
};

export default SearchBox;
