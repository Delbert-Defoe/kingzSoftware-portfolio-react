import React, { useRef } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import appdevpic from "../img/pexels-christina-morillo-1181244.jpg";
import webdevpic from "../img/pexels-negative-space-160107.jpg";
import flyerpic from "../img/pexels-tranmautritam-326501.jpg";
import videopic from "../img/pexels-cottonbro-5054208.jpg";

export default function Projects() {
  const { url } = useRouteMatch();

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:px-20 gap-5 pt-24 px-5 pb-10 min-h-screen bg-white">
      <Category
        bg={webdevpic}
        heading="Web Development Projects"
        path={`${url}/web-development`}
      />
      <Category
        bg={appdevpic}
        heading="App Development Projects"
        path={`${url}/app-development`}
      />
      <Category bg={flyerpic} heading="Flyers" path={`${url}/flyers`} />
      <Category bg={videopic} heading="Videos" path={`${url}/videos`} />
    </main>
  );
}

function Category(props) {
  const targetRef = useRef(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const targetVisible = useIntersectionObserver(targetRef, options, false);

  return (
    <article
      ref={targetRef}
      className={`group relative h-80 flex-col justify-center items-center space-y-10 ${
        targetVisible ? "animate-fade-up flex" : "invisible"
      } cursor-pointer`}
    >
      <img
        src={props.bg}
        alt="Category"
        className="absolute object-cover h-full w-full opacity-60 z-0"
      />
      <h2 className="max-w-xs font-sans font-extrabold text-center text-3xl z-20">
        {props.heading}
      </h2>
      <Link
        to={props.path}
        className="py-4 px-10 font-mono  text-white bg-accent  lg:bg-opacity-50 group-hover:bg-opacity-100 transition-colors duration-300 ease-out z-20"
      >
        View
      </Link>
    </article>
  );
}
