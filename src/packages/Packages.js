import React from "react";
import { Link } from "react-router-dom";
import appdevpic from "../img/pexels-cottonbro-5054208.jpg";

export default function Packages() {
  return (
    <main className="pt-20 min-h-screen bg-white  z-0">
      <article
        className={`group relative h-80 flex-col justify-center items-center space-y-10 cursor-pointer z-0`}
      >
        <img
          src={appdevpic}
          alt="Category"
          className="absolute object-cover h-full w-full opacity-60 z-10"
        />
        <h2 className="max-w-xs font-sans font-extrabold text-center text-3xl z-20">
          HEY
        </h2>
        <Link
          to="#"
          className="py-4 px-10 font-mono  text-white bg-accent  lg:bg-opacity-50 group-hover:bg-opacity-100 transition-colors duration-300 ease-out z-20"
        >
          View
        </Link>
      </article>
    </main>
  );
}
