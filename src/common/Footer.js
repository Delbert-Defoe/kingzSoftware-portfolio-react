import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" flex flex-col lg:flex-row justify-between py-10 px-5 space-y-10 lg:px-20 lg:space-y-0 text-white bg-accent2">
      <section>
        <h3 className="footer-header">Contacts</h3>
        <ul className="space-y-2">
          <li>
            <span className="mr-2">
              <FontAwesomeIcon icon={["fas", "envelope"]} />
            </span>
            kingcheezee2019@gmail.com
          </li>
          <li>
            <span className="mr-2">
              <FontAwesomeIcon icon={["fab", "whatsapp"]} />
            </span>
            +1(767)295-0272
          </li>
          <li>
            <span className="mr-2">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </span>
            @KingzSoftware767
          </li>
        </ul>
      </section>
      <section className="">
        <nav className="max-w-xs space-y-2">
          <Link className="underline block" to="/about">
            About
          </Link>
          <Link className="underline block" to="/contact">
            Contact Us
          </Link>
          <p>Designed and Developed by Delbert Defoe @Kingz Software</p>
        </nav>
      </section>
      <section>
        <h3 className="footer-header">Projects</h3>
        <nav className="underline flex flex-col">
          <Link to="#">Web/App Development</Link>
          <Link to="#">Flyers/Posters</Link>
          <Link to="#">Videos</Link>
        </nav>
      </section>
    </footer>
  );
}
