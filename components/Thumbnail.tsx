import React, { useState } from "react";
import { Movie } from "../typing";
import Image from "next/image";
import Modal from "../components/Modal";
import { modalState, movieState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
interface Props {
  movie: Movie;
}

function Thumbnail({ movie }: Props) {
  const [showModal, setModal] = useRecoilState(modalState);
  const [currentmovie, setCurrentMovie] = useRecoilState(movieState);
  const [showsinglemovie, setShowSingleMovie] = useState(false);
  return (
    <div
      onClick={() => {
        setCurrentMovie(movie);
        setModal(!showModal);
        setShowSingleMovie(true);
      }}
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt={movie.name || movie.original_name || movie.title}
      />
      {showsinglemovie && <Modal />}
    </div>
  );
}

export default Thumbnail;
