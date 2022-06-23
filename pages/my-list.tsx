import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import useList from "../hooks/useList";
import useAuth from "../hooks/useAuth";
import Image from "next/image";
import Thumbnail from "../components/Thumbnail";
import { Movie } from "../typing";
function myList() {
  const { user } = useAuth();
  const list = useList(user?.uid);

  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="max-w-8xl mx-auto pt-24 pb-12 transition-all md:px-10">
        <h1 className="px-2 text-lg font-semibold">My List</h1>
        <div className="flex w-full flex-wrap justify-between px-2 md:justify-start">
          {list.length > 0 &&
            list.map((movie) => {
              return (
                <Thumbnail
                  movie={movie}
                  className="mt-5 min-w-[calc(100%/2.04)] md:mr-2"
                />
              );
            })}
        </div>
      </main>
    </div>
  );
}

export default myList;
