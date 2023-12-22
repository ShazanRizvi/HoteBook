import React, { useContext, useState } from "react";

import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Typography,
} from "@material-tailwind/react";
import Counter from "./Counter";
import SearchContext from "../../context/searchContext";

export default function RoomGuestSelector() {
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  const { allCount, setAllCount } = useContext(SearchContext);
  
  const resetCounter = () => {
    setAllCount({
      adultCount: 0,
      childrenCount: 0,
      roomCount: 0,
    });
    setAdultCount(0);
    setChildrenCount(0);
    setRoomCount(0);
  };
  const handleApply = () => {
    setAllCount({
      adultCount: adultCount,
      childrenCount: childrenCount,
      roomCount: roomCount,
    });
  };
  return (
    <Popover>
      <PopoverHandler>
        <Button variant="text" className="">
          <div>
            <Typography color="blue-gray" className=" text-xs font-bold">
              Guests and Rooms
            </Typography>
            <Typography
              color="gray"
              className="font-light text-xs text-blue-gray-500"
            >
              {allCount.roomCount} Room,{" "}
              {allCount.adultCount + allCount.childrenCount} Guests
            </Typography>
          </div>
        </Button>
      </PopoverHandler>
      <PopoverContent className="z-[999] grid w-[28rem] grid-cols-2 overflow-hidden p-5">
        {/* //col1 */}
        <div className="p-4 gap-5">
          <div className="p-4 gap-5">
            <Typography color="blue-gray" className="text-base font-bold m-2">
              Adult
            </Typography>
          </div>
          <div className="p-4 gap-5">
            <Typography color="blue-gray" className="text-base font-bold m-2">
              Children
            </Typography>
          </div>
          <div className="p-4 gap-5">
            <Typography color="blue-gray" className="text-base font-bold m-2">
              Rooms
            </Typography>
          </div>

          <a href="#" className="-ml-3 inline-block">
            <Button
              size="sm"
              variant="text"
              className="flex items-center gap-x-2 capitalize"
              onClick={resetCounter}
            >
              Reset
            </Button>
          </a>
        </div>
        {/* //Col2 */}
        <div className="min-h-full p-3">
          <div className="p-4 gap-5">
            <Counter count={adultCount} setCount={setAdultCount} />
          </div>
          <div className="p-4 gap-5">
            <Counter count={childrenCount} setCount={setChildrenCount} />
          </div>
          <div className="p-4 gap-5">
            <Counter count={roomCount} setCount={setRoomCount} />
          </div>
          <a href="#" className="-ml-3 flex justify-end">
            <Button
              color="blue"
              size="sm"
              variant="filled"
              className="flex items-center gap-x-2 capitalize"
              onClick={handleApply}
            >
              Apply
            </Button>
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
}
