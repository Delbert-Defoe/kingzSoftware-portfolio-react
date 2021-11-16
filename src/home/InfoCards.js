import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useRef } from "react";
import { Link } from "react-router-dom";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function InfoCards() {
  return (
    <div className="px-5 py-19 md:px-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:flex justify-between  text-black z-10">
      <Card
        title="Web/App Development"
        info="We develop beautiful websites and cross-platform mobile applications at affordable rates. We can get your business on the web, Android, and IOS in no time!"
      />
      <Card
        title="Flyer Design"
        info="We design flyers for any application. Events, business advertisements, infographics, etc. We can turn your message into pixels!"
      />
      <Card
        title="Video Editing"
        info="We can edit your videos! If you need a few videos compiled, or a promotional video produced, we have you covered!"
      />
    </div>
  );
}

function Card({ title, info }) {
  const articleRef = useRef(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  };

  const isVisble = useIntersectionObserver(articleRef, options, false);

  return (
    <article
      ref={articleRef}
      className={`flex flex-col justify-between py-12 px-8 lg:max-w-xs bg-white ${
        isVisble ? "animate-fade-up" : "invisible"
      }`}
    >
      <h2 className="font-sans font-extrabold text-center text-2xl mb-10">
        {title}
      </h2>
      <p className="mb-12 font-mono">{info}</p>
      <div className="  min-w-1/2 self-end transition-colors">
        <Link
          className="hover:animate-pulse transition-color hover:text-accent font-sans font-bold w-full text-right cursor-pointer hover:underline"
          to="#"
        >
          Learn More
          <span className="ml-3">
            <FontAwesomeIcon icon={["fas", "arrow-right"]} />
          </span>
        </Link>
      </div>
    </article>
  );
}
