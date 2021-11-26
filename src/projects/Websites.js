import React from "react";
import projecPic1 from "../img/project1-1.PNG";
import projecPic2 from "../img/project1-2.PNG";

export default function Websites() {
  return (
    <main className="w-full min-h-screen py-20 px-5 lg:px-20 bg-white">
      <section className="">
        <div className="flex-1 py-5 lg:pt-0">
          <h1 className="font-sans font-extrabold text-3xl lg:text-5xl tracking-wider text-black">
            Project 1
          </h1>
          <h2 className="pt-5 pb-2 font-sans font-semibold text-xl lg:text-2xl text-black">
            School Project
          </h2>
          <p className="pt-2 font-mono font-light leading-loose border-t-2 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            metus lorem, aliquam id ultrices in, vestibulum malesuada leo.
            Vestibulum sed felis et lacus aliquam condimentum non interdum
            metus. Donec ipsum est, consectetur sit amet purus sed, facilisis
            mollis lacus. Sed rhoncus arcu ac nibh euismod ullamcorper.
            Suspendisse pharetra enim quis elit gravida, sed commodo diam
            sagittis. Quisque fermentum malesuada condimentum.
          </p>
        </div>
        <div className="w-full flex-1">
          <img className="w-full" src={projecPic1} />
          <img className="w-full" src={projecPic2} />
        </div>
      </section>
    </main>
  );
}
