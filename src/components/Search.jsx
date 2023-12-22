import React from "react";
import { Button } from "@material-tailwind/react";
import { FiSearch } from "react-icons/fi";
import { Input, Typography } from "@material-tailwind/react";
import DateSelector from "./utils/DatePicker";
import SelectDestination from "./utils/SelectDestination";
import RoomGuestSelector from "./utils/RoomguestSelector";
import { useContext } from "react";
import SearchStore from "../context/SearchStore";
import { TypeAnimation } from "react-type-animation";
import HotelContext from "../context/hotelContext";
import SearchContext from "../context/searchContext";

const Search = () => {
  const { getHotelsbyDestination } = useContext(HotelContext);
  const { selectedDestination, allCount,dateRange } =
    useContext(SearchContext);
  const handleSearchHotel = () => {
    //  getHotelsbyDestination();
    console.log(allCount);
    console.log(dateRange);
    console.log(selectedDestination);
  };
  return (
    <div className="md:flex mt-5 p-3 gap-2 md:shadow-[20px_10px_30px_-10px_#888888] md:rounded-xl">
      <div className=" flex items-center">
        <FiSearch />
      </div>

      <div className="w-full">
        <Typography color="blue-gray" className="text-xs font-bold">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Destination",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Hotels",
              1000,
              "Landmarks",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </Typography>

        <SelectDestination />
      </div>
      <div className="w-full">
        <Typography color="blue-gray" className="text-xs font-bold">
          Check in - Check out
        </Typography>
        <DateSelector />
      </div>
      <div className="md:w-1/2">
        <RoomGuestSelector />
      </div>

      <div className="md:flex sm:w-full md:w-1/2 items-center px-4 justify-end">
        <Button
          size="lg"
          className="rounded-full sm:w-full"
          color="blue"
          onClick={handleSearchHotel}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Search;
