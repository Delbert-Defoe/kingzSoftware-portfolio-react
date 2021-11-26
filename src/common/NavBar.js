import { useLocation } from "react-router";
import React, { useState, useEffect, useRef } from "react";
import "./navBar.css";
import useWindowSize from "../hooks/useWindowSize";

import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const navBarRef = useRef(null);

  function handleShowNavLinks() {
    setShowNavLinks(!showNavLinks);
  }

  const [width] = useWindowSize();
  const location = useLocation();

  useEffect(() => {
    setShowNavLinks(false);
  }, [location]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (showNavLinks && navBarRef.current.contains(event.target)) {
        setShowNavLinks(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <header
      ref={navBarRef}
      className={`container fixed min-w-full py-5 px-5 lg:px-20 bg-white lg:bg-opacity-0 dark:bg-white dark:shadow-md font-mono lg:flex justify-between  items-center z-50 animate-fade-in`}
    >
      <div className="flex flex-grow-0 justify-between content-center">
        <Link
          className="text-2xl font-sans font-extrabold dark:text-black text-black"
          to="/"
        >
          Kingz Software
        </Link>
        <div onClick={handleShowNavLinks}>
          <FontAwesomeIcon
            icon={["fas", "bars"]}
            className="text-2xl lg:hidden"
          />
        </div>
      </div>
      <nav
        className={`py-10 lg:py-0 lg:text-white font-medium sm:text-black   ${
          !showNavLinks && width < 1024 ? "hidden" : "flex flex-col"
        } content-center space-y-10 lg:flex-row lg:space-x-20 lg:space-y-0 text-xs 
        `}
      >
        <div>
          <Link
            className="bg-accent text-white py-4 px-4 text-sm hover:opacity-70 transition-opacity duration-200"
            to="/contact-us"
          >
            Contact Us
          </Link>
        </div>
        <NavLink
          exact
          to="/"
          className="link text-black lg:text-white dark:text-black"
          activeClassName="link-active"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="link text-black lg:text-white dark:text-black"
          activeClassName="link-active"
        >
          About
        </NavLink>
        <div className="group relative">
          <NavLink
            to="/projects"
            className="link  text-black lg:text-white dark:text-black"
            activeClassName="link-active"
          >
            Projects
          </NavLink>

          <nav className="absolute flex-col hidden lg:group-hover:flex hover:flex -left-5 w-32 bg-white shadow-xl">
            <Link to="/projects/web-development" className="sub-link">
              Websites
            </Link>
            <Link to="/projects/app-development" className="sub-link">
              Mobile Apps
            </Link>
            <Link to="/projects/flyers" className="sub-link">
              Flyers
            </Link>
            <Link to="/projects/videos" className="sub-link">
              Videos
            </Link>
          </nav>
        </div>
        <NavLink
          to="/packages"
          className="link text-black lg:text-white dark:text-black"
          activeClassName="link-active"
        >
          Packages
        </NavLink>
      </nav>
    </header>
  );
}
