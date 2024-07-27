import React, { useState } from "react";
import { Movie } from "../typing";
import Image from "next/image";
import Modal from "../components/Modal";
import { modalState, movieState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import { DocumentData } from "firebase/firestore";
interface Props {
  movie: Movie | DocumentData;
  className: string | null;
}

function Thumbnail({ movie, className }: Props) {
  const [showModal, setModal] = useRecoilState(modalState);
  const [currentmovie, setCurrentMovie] = useRecoilState(movieState);
  const [showsinglemovie, setShowSingleMovie] = useState(false);
  console.log(className);
  return (
    <div
      onClick={() => {
        setCurrentMovie(movie);
        setModal(!showModal);
        setShowSingleMovie(true);
      }}
      className={`relative h-28 cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105 ${className}`}
    >
      <Image
        unoptimized={true}
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
