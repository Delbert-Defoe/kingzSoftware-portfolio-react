import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function Packages() {
  return (
    <main className="grid grid-cols-1 gap-5 lg:grid-cols-2 pt-20 pb-5 px-5 lg:px-20 min-h-screen bg-white">
      <Package />
      <Package />
    </main>
  );
}

function Package() {
  const targetRef = useRef(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  const isVisible = useIntersectionObserver(targetRef, options, false);

  return (
    <section
      ref={targetRef}
      className={` border-4 border-black border-solid ${
        isVisible ? "animate-fade-up" : "invisible"
      } `}
    >
      <div className="">
        <div className="mb-5 p-5 ">
          <h1 className="mb-5 font-sans font-extrabold text-4xl text-black">
            Package
          </h1>
          <p className="mb-5 max-w-prose font-mono  text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            excepturi deleniti consequatur perspiciatis explicabo vel quas,
          </p>
          <ul className="font-mono text-black list-disc list-inside">
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
          </ul>
        </div>
        <figure
          className={`group relative h-80 w-full text-white font-sans cursor-pointer bg-bgimg bg-cover bg-center`}
        >
          <div className="absolute -bottom-0 -right-0  px-5 py-2 bg-accent">
            <h2 className="font-extrabold text-center z-30 text-xl">
              Starting from:
            </h2>
            <h3 className="font-extrabold text-center z-30 text-3xl lg:text-4xl">
              $1000ec
            </h3>
          </div>
        </figure>
      </div>
    </section>
  );
}
