import React, { useRef, useState, useEffect } from "react";
import { Movie } from "../typing";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Thumbnail from "./Thumbnail";

type Props = {
  title: string;
  movies: Movie[];
};

function Row({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setisMoved] = useState(false);

  const handleClick = (type: string) => {
    setisMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      console.log(scrollLeft, clientWidth);
      const scrollTo =
        type === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      if (scrollTo < 0) setisMoved(false);

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="text-[#e5e5e] w-56 cursor-pointer text-sm font-semibold transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          onClick={() => handleClick("left")}
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && "hidden"
          }`}
        />
        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          onClick={() => handleClick("right")}
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
        />
      </div>
    </div>
  );
}

export default Row;
