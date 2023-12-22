import React, { useState } from "react";
import SearchContext from "./searchContext";

const SearchStore = ({ children }) => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  const [allCount, setAllCount] = useState({
    adultCount: 0,
    childrenCount: 0,
    roomCount: 0,
  });


  return (
    <SearchContext.Provider
      value={{
        selectedDestination,
        setSelectedDestination,
        allCount,
        setAllCount,
        dateRange,
        setDateRange,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchStore;
