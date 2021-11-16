import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver.js";
import portrait from "../img/20201031_114829.jpg";

export default function About() {
  const techCards = [
    {
      id: "01",
      title: "HTML/CSS",
      category: "Language",
      description:
        "The basic building blocks of any website. Kingz Software is able to mark up HTML and CSS either on its own (vanilla) or in a framework like react.",
    },
    {
      id: "02",
      title: "JavaScript",
      category: "Language",
      description:
        "JavaScript is one of the most popular languages used today. Kingz Software is able to use JavaScript either on its own (vanilla) or in a framework like react.",
    },
    {
      id: "03",
      title: "Dart",
      category: "Language",
      description:
        "Dart is a lightweight, quick programming language developed by google. Kingz Software uses dart to develop Flutter applications. ",
    },
    {
      id: "04",
      title: "Java",
      category: "Language",
      description:
        "Java is a high-level, object-oriented programming language used as a backend in many applications. Kingz software has a sound knowledge of Java.",
    },
    {
      id: "05",
      title: "C++",
      category: "Language",
      description:
        "C++ is a general-purpose programming language with a wide range of applications. Kingz software is knowledgeable in C++",
    },
    {
      id: "06",
      title: "React",
      category: "Framework",
      description:
        "React is a JavaScript framework/library used to make robust interactive websites. This website was developed using React. ",
    },
    {
      id: "07",
      title: "Flutter",
      category: "Framework",
      description:
        "Flutter is a cross-platform framework for mobile, web and embedded systems. Kingz Software has over a year and half of experience developing in flutter.",
    },
    {
      id: "08",
      title: "Tailwind",
      category: "Framework",
      description:
        "Tailwind is a CSS framework which provides utility classes for a consistent look and feel. This website was styled with tailwind",
    },
    {
      id: "09",
      title: "Sass",
      category: "Framework",
      description:
        "Sass is a CSS framework which allows for cleaner, more developer friendly CSS. Kingz software has experience using Sass.",
    },
    {
      id: "10",
      title: "Firebase",
      category: "Platform",
      description:
        "Firebase is a platform which offers services like a NoSQL database (FireStore), hosting, cloud functions and many other useful utilities",
    },
  ];

  const titleRef = useRef(null);
  const paraRef = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  const titleVisible = useIntersectionObserver(titleRef, options, false);
  const paraVisible = useIntersectionObserver(paraRef, options, false);

  return (
    <main className="pt-36 min-h-screen w-full bg-white ">
      <h1
        ref={titleRef}
        className={`pl-5 lg:pl-20 mb-5 text-5xl lg:text-7xl text-black font-sans font-extrabold ${
          titleVisible ? "animate-fade-up" : "invisible"
        }`}
      >
        About Us
      </h1>
      <div className="lg:flex px-5 lg:px-20 w-full">
        <div
          ref={paraRef}
          className="px-5 py-12 lg:px-10 lg:py-24 w-full lg:w-1/2 bg-black"
        >
          <p
            className={`max-w-prose text-white leading-loose ${
              paraVisible ? "animate-fade-up" : "invisible"
            }`}
          >
            Kingz Software's vision is a modern technological experience for all
            Dominicans and West Indians at large. Through innovative designs
            that follow modern design trends, Kingz Software wishes to ensure
            that the software solutions your businesses implement, are
            comparable on a global stage. By extension, Kingz Software also aims
            to ensure that the digital footprint of the companies we work with
            are memorable, and achieve the desired effects of getting more
            consumer engagement, attracting more customers, and communicating
            the business' values to its customers effectively.
          </p>
        </div>
        <div className="relative h-80 w-full lg:h-auto lg:w-1/2 border-8 border-solid border-black ">
          <img
            src={portrait}
            alt="portrait"
            className="absolute h-full w-full object-cover object-top animate-fade-in z-0"
          />
          <h2 className="absolute -bottom-0 -right-2 px-5 py-5 font-sans font-extrabold text-white animate-fade-in bg-accent z-20">
            Founder - Delbert Defoe
          </h2>
        </div>
      </div>
      <div className="pt-24 px-5 mb-10 mx-5 lg:mx-20 bg-black">
        <h2 className="py-5 font-mono text-2xl text-center text-white">
          What technologies do we use/offer?
        </h2>
        <section className="tech-section border-none">
          {techCards
            .filter((card) => card.category === "Language")
            .map((card) => {
              return (
                <TechCard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                />
              );
            })}
        </section>
        <section className="tech-section">
          {techCards
            .filter((card) => card.category === "Framework")
            .map((card) => {
              return (
                <TechCard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                />
              );
            })}
        </section>
        <section className="tech-section">
          {techCards
            .filter((card) => card.category === "Platform")
            .map((card) => {
              return (
                <TechCard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                />
              );
            })}
        </section>
      </div>
    </main>
  );
}

function TechCard(props) {
  const cardRef = useRef(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  };

  const isVisible = useIntersectionObserver(cardRef, options, false);

  return (
    <div
      ref={cardRef}
      className={`w-full px-8 py-12 bg-white shadow-lg hover:shadow-xl ${
        isVisible ? "animate-fade-up" : "invisible"
      }`}
    >
      <h2 className="font-sans font-extrabold text-center text-2xl mb-8">
        {props.title}
      </h2>
      <p className="font-mono">{props.description}</p>
    </div>
  );
}
