import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useEffect } from "react";
import "./home.css";
import InfoCards from "./InfoCards";
import Solutions from "./Solutions";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { Link } from "react-router-dom";
import bgImage from "../img/text-editor.jpg";

export default function Home({ changeNavBar }) {
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const section2visible = useIntersectionObserver(section2Ref, options, true);
  const section3visible = useIntersectionObserver(section3Ref, options, true);

  useEffect(() => {
    if (section2visible || section3visible) {
      changeNavBar(false);
    } else {
      changeNavBar(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section2visible, section3visible]);

  return (
    <>
      <section className="min-h-screen w-full lg:flex">
        <section className="banner grid place-content-center min-h-screen w-full lg:w-1/2 bg-white">
          <h1 className="ml-5 lg:ml-20 w-2/3 font-sans font-extrabold text-6xl leading-tight sm:text-8xl special:text-7xl">
            Let us get your digital footprint right.
          </h1>
        </section>
        <section className="w-1/2  min-h-screen bg-black  lg:grid place-content-center hidden">
          <a href="#info-section">
            <div className="animate-bounce bg-white w-32 h-32 rounded-full grid place-content-center cursor-pointer">
              <FontAwesomeIcon icon="arrow-down" className="text-8xl" />
            </div>
          </a>
        </section>
      </section>
      <section
        ref={section2Ref}
        className=" flex flex-col  min-w-screen pb-16 relative"
        id="info-section"
      >
        <img
          src={bgImage}
          alt="Programming text editor"
          className="h-full w-full object-cover absolute z-0 opacity-20"
        ></img>
        <h1 className="text-white text-center mx-auto py-12 text-2xl font-mono z-20">
          What do we do?
        </h1>
        <InfoCards />
        <div className="mt-16 self-center z-20">
          <Link
            className="hover:text-white text-white transition-all duration-200 font-mono border-accent border-2 hover:bg-accent py-4 px-8 relative mb-16"
            to="#"
          >
            View Projects
          </Link>
        </div>
      </section>
      <section ref={section3Ref} className="min-w-full bg-white pb-24">
        <div className="solution-banner"></div>
        <h1 className="text-black text-center ml-auto mr-auto pt-16 pb-1 lg:pb-6 text-2xl font-mono">
          Are we the right solution for you?
        </h1>
        <Solutions />
      </section>
    </>
  );
}
