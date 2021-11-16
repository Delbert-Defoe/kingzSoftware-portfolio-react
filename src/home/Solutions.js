import { React, useState, useRef, useEffect } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import useWindowSize from "../hooks/useWindowSize";

export default function Solutions() {
  const [solutions, setSolutions] = useState([
    {
      id: "01",
      heading: "Web Development",
      description:
        "In the 21st century, your website is your most valuable internet tool. It is a fact that well designed websites promote trust between customer/visitor and business/organization, and improves the perceived value of a product/business. A website signifies establishment in the web-space, similar to how an office establishes a business physically. If you would like to make information related to your business or organization easily accessible or refine the way customers interact with your business, a website developed by Kingz Software is the way to go.  ",
      active: true,
    },
    {
      id: "02",
      heading: "Application Development",
      description:
        "Mobile Applications have formed an integral part of our day to day lives for some time now. The average person will spend between 4-6 hours on his/her mobile phone daily! If your business thrives on regular consumer engagement and loyalty, or you would like your business to take advantage of smart phone specific features such as notifications, then an application developed by Kingz Software is the way to go.  ",
      active: false,
    },
    {
      id: "03",
      heading: "Flyer/Poster Design",
      description:
        "Flyer and poster design is an art, as well as a science. Most people may not be aware of it, but even our untrained eyes can recognize good and bad design. Kingz Software has done the research and the practice to take care of the hard part of your poster. Just give us your message, and we will ensure that people want to pay attention to it.  ",
      active: false,
    },
    {
      id: "04",
      heading: "Video Editing",
      description:
        "Videos are supposed to leave impressions. A message is a lot more profound when it is delivered properly. Whether it be a funny message, a serious message, or a message which is encouraging someone to take an action, it should be delivered professionally. You worry about your message, let us worry about the professional part!",
      active: false,
    },
  ]);

  function switchActive(id) {
    const newSolutions = [...solutions];

    newSolutions.forEach((solution) => {
      solution.active = false;
      if (solution.id === id) {
        solution.active = true;
      }
    });

    const activeSolution = newSolutions.find((solution) => solution.id === id);
    activeSolution.active = true;

    setSolutions(newSolutions);
  }

  const [showParallel, setShowParallel] = useState(window.innerWidth > 1024);
  const [width] = useWindowSize();

  useEffect(() => {
    if (width > 1024) {
      setShowParallel(true);
    } else {
      setShowParallel(false);
    }
  }, [width]);

  return (
    <>
      <div className="min-h-full min-w-full flex px-5 lg:px-40">
        {showParallel ? (
          <Parallel solutions={solutions} switchActive={switchActive} />
        ) : (
          <Grouped solutions={solutions} />
        )}
      </div>
    </>
  );
}

function Parallel({ solutions, switchActive }) {
  const paraRef = useRef(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };
  const paraIsVisible = useIntersectionObserver(paraRef, options, false);
  return (
    <>
      <section className="flex-1 font-sans font-extrabold text-4xl">
        <ul className="">
          {solutions.map((solution) => {
            return (
              <li key={solution.id} className="mt-12">
                <Headings
                  name={solution.heading}
                  number={solution.id}
                  active={solution.active}
                  switchActive={switchActive}
                />
              </li>
            );
          })}
        </ul>
      </section>
      <section ref={paraRef} className="flex-1 grid place-items-center">
        {solutions.map((solution) => {
          if (!solution.active)
            return <div key={solution.id} className="hidden"></div>;
          return (
            <p
              key={solution.id}
              className={`text-black font-mono leading-loose max-w-prose ${
                solution.active && paraIsVisible
                  ? "animate-fade-up"
                  : "invisible"
              }`}
            >
              {solution.description}
            </p>
          );
        })}
      </section>
    </>
  );
}

function Grouped({ solutions }) {
  const targetRef = useRef(null);
  const paraRef = useRef(null);

  const options = {
    root: null,
    rootMargin: "1000px",
    threshold: 0,
  };

  const isVisible = useIntersectionObserver(targetRef, options, false);
  const paraIsVisible = useIntersectionObserver(paraRef, options, false);

  return (
    <>
      <section className="font-sans font-extrabold text-4xl ">
        <ul className="">
          {solutions.map((solution) => {
            return (
              <li key={solution.id} className="mt-12 ">
                <div
                  ref={targetRef}
                  className={`flex align-top space-x-3 cursor-pointer transition duration-300 hover:text-opacity-100 text-black text-opacity-60 ${
                    isVisible ? "animate-fade-up" : "invisible"
                  }`}
                >
                  <span className="inline-block text-lg">{solution.id}</span>
                  <h1 className="inline-block max-w-sm">{solution.heading}</h1>
                </div>
                <section
                  ref={paraRef}
                  className="flex-1 grid place-items-center pt-5"
                >
                  <p
                    key={solution.id}
                    className={`text-black font-mono font-normal leading-loose text-xs max-w-prose ${
                      paraIsVisible ? "animate-fade-up" : "invisible"
                    }`}
                  >
                    {solution.description}
                  </p>
                </section>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

function Headings(props) {
  const targetRef = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  };

  const isVisible = useIntersectionObserver(targetRef, options, false);

  let opacity = props.active ? "text-opacity-100" : "text-opacity-40";

  function handleClick() {
    props.switchActive(props.number);
  }

  return (
    <div
      ref={targetRef}
      onClick={handleClick}
      className={`flex align-top space-x-3 cursor-pointer transition duration-300 hover:text-opacity-100 text-black ${opacity} ${
        isVisible ? "animate-fade-up" : "invisible"
      }`}
    >
      <span className="inline-block text-lg">{props.number}</span>
      <h1 className="inline-block max-w-sm">{props.name}</h1>
    </div>
  );
}
