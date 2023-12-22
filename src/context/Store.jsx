import React, { useEffect, useState } from "react";
import HotelContext from "./hotelContext";
import axios from "axios";

const Store = ({ children }) => {
  //Search hotels by desination
  const [hotels, setHotels] = useState([]);
  const [domainList, setDomainList] = useState({});
  const [cities, setCities] = useState([]);

  const getHotelsbyDestination = () => {
    const options = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/meta/getCurrency",

      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_API_URL,
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setHotels(response?.data);
        console.log(response?.data);
        console.log(hotels);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  //API call for getting cities
  const country = "india";
  useEffect(() => {
    const options = {
      method: "POST",
      url: "https://countriesnow.space/api/v0.1/countries/cities",
      headers: {
        "content-type": "application/json",
      },
      data: {
        country: `${country}`,
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setCities(response?.data?.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [country]);

  //Req to get Domain List
  // const getDomainList = (Destination) => {
  //   const options = {
  //     method: "GET",
  //     url: "https://hotels-com-provider.p.rapidapi.com/v2/regions",
  //     params: { query: `${Destination}`,domain:"IN", locale: "en_IN" },

  //     headers: {
  //       "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
  //       "X-RapidAPI-Host": import.meta.env.VITE_API_URL,
  //     },
  //   };
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       setDomainList(response?.data);
  //      console.log("response",response?.data);
  //       console.log("State",domainList);

  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };
  return (
    <HotelContext.Provider
      value={{ getHotelsbyDestination, hotels, domainList, cities }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export default Store;
