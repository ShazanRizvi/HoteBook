import React from "react";
import { IconButton, Input } from "@material-tailwind/react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Counter = ({ count, setCount }) => {
  const handleplusClick = () => {
    setCount(count + 1);
  };
  const handleminusClick = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex items-center gap-3">
      <IconButton
        disabled={count === 0 ? true : false}
        variant="outlined"
        size="sm"
        ripple="light"
        className=" rounded-full"
        onClick={handleminusClick}
      >
        <FaMinus />
      </IconButton>
      <div className=" items-center justify-center w-2/6 focus:ring-0">
        <Input
          shrink={true}
          labelProps={{
            className: "hidden",
          }}
          size="sm"
          disabled={true}
          value={count}
          placeholder="0"
          className="!border !border-gray-200 ring-2 ring-transparent focus:ring-blue-800 !w-2/6"
        />
      </div>
      <IconButton
        color="blue"
        size="sm"
        variant="gradient"
        ripple="light"
        className=" rounded-full"
        onClick={handleplusClick}
      >
        <FaPlus />
      </IconButton>
    </div>
  );
};

export default Counter;
