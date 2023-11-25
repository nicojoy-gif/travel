import React from "react";
import girl from "../Assets/visit.jpg";
import { FaLeaf } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaVectorSquare } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa";
import three from "../Assets/thr.jpg";
function Book() {
  return (
    <div className="container text-start mx-auto  my-5 lg:h-5/6 flex justify-center items-center  h-full">
      <section className="container lg:w-5/6 w-full mx-auto grid my-5 items-center lg:grid-cols-2 justify-items-center grid-cols-1">
        <div className=" mx-5 lg:mx-0">
          <div className="my-3">
            <p className="font-semibold text-gray-600 ">Easy and Fast</p>
            <h1 className="font-bold text-4xl py-2 md:w-4/6 w-full">
              Book Your Next Trip In 3 Easy Steps
            </h1>
          </div>
          <div className="my-5 text-start text-gray-600 text-sm">
            <div className="flex">
              <div>
                <div className="h-10 w-10 bg-yellow-500 rounded-xl flex items-center justify-center">
                  <FaVectorSquare color="white" size={16} />
                </div>
              </div>
              <div className="px-3 ">
                <p className="font-bold">Choose Destination</p>
                <p className="w-4/8">
                  Lorem ipsum dolor sit amet, consecteur adipiscing elit. Urna,
                  tortot tempus
                </p>
              </div>
            </div>
          </div>
          <div className="my-5 text-start text-gray-600 text-sm">
            <div className="flex">
              <div>
                <div className="h-10 w-10 bg-lime-500 rounded-xl flex justify-center items-center ">
                  <FaMoneyCheck color="white" size={16} />
                </div>
              </div>
              <div className="px-3 ">
                <p className="font-bold">Make Payment</p>
                <p className="w-4/8">
                  Lorem ipsum dolor sit amet, consecteur adipiscing elit. Urna,
                  tortot tempus
                </p>
              </div>
            </div>
          </div>
          <div className="my-5 text-start text-gray-600 text-sm">
            <div className="flex">
              <div>
                <div className="h-10 w-10 bg-sky-500 rounded-xl flex justify-center items-center ">
                  <FaCar size={16} color="white" />
                </div>
              </div>
              <div className="px-3 ">
                <p className="font-bold">Reach Airport on Selected Date</p>
                <p className="w-4/8">
                  Lorem ipsum dolor sit amet, consecteur adipiscing elit. Urna,
                  tortot tempus
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="shadow-gradient-to-r from-sky-100 to-sky-50">
            <div className="h-80 lg:w-72 shadow-lg rounded-xl">
              <div className="m-3">
                <div className="py-1">
                  <img
                    src={girl}
                    alt="girl"
                    className="rounded-xl h-36 my-3 w-full "
                  />
                </div>
                <h2 className="font-semibold pb-2">Trip To Greece</h2>
                <p className="text-gray-400 font-medium">
                  14-29 June| by Robbin John
                </p>
                <div className="flex my-3 space-x-4">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <FaLeaf color="gray" />
                  </div>
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <FaMap color="gray" />
                  </div>
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <FaLocationArrow color="gray" />
                  </div>
                </div>
                <div className="flex items-center my-3 justify-between">
                  <div className="flex items-center">
                    <FaBuilding color="grey" />
                    <p className="text-gray-400 px-3">24 people going</p>
                  </div>
                  <FaHeart color="grey" size={24} />
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="h-28 shadow-lg  bg-white z-50 rounded-lg absolute bottom-16 -right-36">
            <div className="flex m-2 ">
              <div className="h-12 w-12">
                <img
                  src={three}
                  alt="rome"
                  className="h-12 w-12 rounded-full"
                />
              </div>
              <div className="px-3">
                <h3 className="text-gray-500 text-sm ">Ongoing</h3>
                <p className="font-semibold">Trip to rome</p>
                <p>
                  <span className="text-gray-400  pr-1">40%</span>
                  <span className="font-semibold">completed</span>
                </p>
                <input
                  type="range"
                  className=" bg-gray-200 h-2 rounded-lg overflow-hidden outline-none"
                  style={{
                    "::-webkit-slider-thumb": { display: "none" }, // Hide the thumb for Webkit/Blink based browsers
                    "::-moz-range-thumb": { display: "none" }, // Hide the thumb for Firefox
                    "::-ms-thumb": { display: "none" }, // Hide the thumb for IE/Edge
                    "--range-track-color": "purple",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Book;
