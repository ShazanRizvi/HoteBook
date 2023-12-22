import React, { useState, useContext } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import SearchContext from "../../context/searchContext";

const DateSelector = () => {
     const {dateRange, setDateRange} = useContext(SearchContext);
//   const [value, setValue] = useState({
//     startDate: new Date(),
//     endDate: new Date().setMonth(11),
//   });

  const handleValueChange = (newValue) => {
    
    setDateRange(newValue);
  };

  return (
    <Datepicker
      separator="to"
      showFooter={true}
      showShortcuts={true}
      displayFormat={"DD/MM/YYYY"}
      placeholder="May I know your stay dates"
      value={dateRange}
      onChange={handleValueChange}
    />
  );
};
export default DateSelector;
