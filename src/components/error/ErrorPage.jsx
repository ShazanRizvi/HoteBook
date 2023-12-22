import React from "react";
import { useRouteError } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { AppNavbar } from "../Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-red-500 md:text-5xl lg:text-6xl dark:text-white">
          Oops! Its not you its us!{" "}😔
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Sorry! An unexpected error occurred
        </p>
        <p className="mb-8 text-base font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          {error.statusText || error.message}
        </p>
      </div>
    </section>
  
  
  );
};

export default ErrorPage;
