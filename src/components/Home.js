// HomeScreen.js

import React from "react";
import Navbar from "./Nav";
import hero from "../Assets/result.png";
import plane from "../Assets/air.png";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
const HomeScreen = () => {
  return (
    <div className=" bg-gradient-to-r from-pink-50 to-pink-50 lg:h-screen w-full  h-full">
      <Navbar />
      <div className="flex justify-center mt-10 items-center">
        {/* Grid Container */}
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-4 p-4 container mx-auto">
          {/* First Grid: Image */}

          {/* Second Grid: Text */}
          <div className=" text-start w-full lg:w-3/4 ">
            <p className="text-green-600 py-3 uppercase font-bold font-lg">
              Best destinations around the world
            </p>
            <h2 className="text-6xl text-sky-950 font-[800] mb-2 font-serif">
              Travel, <span>enjoy and live a new and full life</span>
            </h2>
            <p className="text-slate-600 w-full  lg:w-5/6 leading-6 pr-0 font-semibold text-sm">
              Built Wicket longer admire do barton vanity itself to do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell that
              west hard for the.
            </p>
            <div className="flex items-center my-5">
              <Link>
                <button className="bg-amber-500 text-white px-5 py-3 rounded-lg font-medium">
                  Find out more
                </button>
              </Link>
              <div className="flex">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-lime-600 rounded-full flex justify-center items-center shadow-lg shadow-lime-200 mx-5">
                    {" "}
                    <FaPlay color="white" size={10} />
                  </div>

                  <p className="text-gray-600 pr-5 font-semibold t">
                    {" "}
                    Play Demo
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative  ">
            <img
              src={hero}
              alt="Placeholder"
              className="rounded-lg transform  mix-blend-multiply w-full"
            />
            <div>
              <img
                src={plane}
                className="absolute  mix-blend-multiply  top-24 h-24 w-24"
              />
            </div>
            <div>
              <img
                src={plane}
                className="absolute  mix-blend-multiply  -top-5 h-16 right-6 w-16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
