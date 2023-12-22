import React, { useState } from "react";
import Select from "react-select";
import { useContext } from "react";
import SearchContext from "../../context/searchContext";
import hotelContext from "../../context/hotelContext";

const SelectDestination = () => {
  const { selectedDestination,setSelectedDestination } = useContext(SearchContext);
  const {cities} = useContext(hotelContext);
  
  
  // const colourOptions = [
  //   { value: "ocean", label: "Delhi" },
  //   { value: "blue", label: "Jaipur" },
  //   { value: "purple", label: "Mumbai" },
  //   { value: "red", label: "Ranchi" },
  //   { value: "orange", label: "Lucknow" },
  // ];

  const CityOptions = cities.map((city) => ({ value: city, label: city }));
  


  const handleChange = (selectedDestination) => {
    setSelectedDestination(selectedDestination);
    console.log(`Option selected:`, selectedDestination);
   
  }

  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  return (
    <>
      <Select
        styles={{
          control: (base, state) => ({
            ...base,
            border: state.isFocused ? 0 : 0,
            boxShadow: state.isFocused ? "0 0 0 1px #2563EB" : 0,
            borderColor: state.isFocused ? "#2563EB" : "#E5E7EB",
            "&:hover": {
              borderColor: state.isFocused ? "#2563EB" : "#E5E7EB",
            },
          }),
        }}
        className="basic-single"
        classNamePrefix="select"
        defaultValue={colourOptions[0]}
        onChange={handleChange}
        isClearable={isClearable}
        isSearchable={isSearchable}
        value={colourOptions.value}
        name="Destination"
        placeholder="Where are you going?"
        options={CityOptions}
      />
    </>
  );
};

export default SelectDestination;
