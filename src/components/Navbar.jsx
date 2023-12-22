import React from "react";
import {
  MobileNav,
  Typography,
  Button,
  IconButton,
  Select,
  Option,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import DrawOutlineButton from "./utils/DrawOutlineButton";
import Modal from "./utils/Modal";

export function AppNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const langOptions = ["English", "Hindi", "Spanish", "French", "German"];

  const langOptionsStr = langOptions.join(",");

  const currencyOptions = ["USD", "INR", "EUR", "GBP", "AUD"];
  const currencyOptionsStr = currencyOptions.join(",");

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  console.log(langOptionsStr);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Favorites
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Language
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Recently Viewed
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#"
          className="flex items-center"
          onClick={() => setOpenModal(!openModal)}
        >
          Locale
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="sticky top-0 z-10 h-max max-w-full rounded-none px-0 py-2 lg:px-0 lg:py-4 bg-white">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to={`/`}>
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5  font-sans text-2xl tracking-tight leading-none text-blue-gray-900 sm:text-3xl lg:text-4xl"
          >
            HotelBook
          </Typography>
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <Link to={`/login`}>
              {/* <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Log In</span>
              </Button> */}
              <DrawOutlineButton>LOG IN</DrawOutlineButton>
            </Link>
            <Link to={`/signup`}>
              {/* <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Sign in</span>
              </Button> */}
              <DrawOutlineButton>SIGN UP</DrawOutlineButton>
            </Link>
            <Modal
              isOpen={openModal}
              setIsOpen={setOpenModal}
              ModalTitle={
                <Typography variant="h5">
                  Select Language and Currency
                </Typography>
              }
              ModalContent={
                <div className="pt-5 text-left">
                  <div className="mt-5">
                    <label
                      for="email"
                      className="block mb-4 text-sm font-medium text-white"
                    >
                      Select Language
                    </label>
                    <Select
                      color="blue"
                     
                      // offset={5}
                      // labelProps={{ className: "hidden" }}
                      // placeholder="Select Language"
                      animate={{
                        mount: { y: 1 },
                        unmount: { y: 25 },
                      }}
                    >
                      {langOptions.map((lang, index) => (
                        <Option key={index}>{lang}</Option>
                      ))}
                    </Select>
                  </div>
                  <div className="mt-5">
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      Currency
                    </label>
                    <Select
                      // labelProps={{ className: "hidden" }}
                      animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                      }}
                      placeholder="Select Language"
                    >
                      {currencyOptions?.map((currency, index) => (
                        <Option key={index}>{currency}</Option>
                      ))}
                    </Select>
                  </div>
                </div>
              }
              CancleText={<Typography variant="body1">Cancel</Typography>}
              ConfirmText={<Typography variant="body1">Confirm</Typography>}
            />
          </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <Button fullWidth variant="text" size="sm" className="">
            <span>Log In</span>
          </Button>
          <Button fullWidth variant="gradient" size="sm" className="">
            <span>Sign in</span>
          </Button>
        </div>
      </MobileNav>
    </div>
  );
}
