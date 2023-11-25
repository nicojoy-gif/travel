import React, { useState } from "react";
import axon from "../Assets/axon.png";
import jet from "../Assets/jetstar.png";
import exp from "../Assets/exp.png";
import qua from "../Assets/qua.png";
import ail from "../Assets/ali.png";
import sam from "../Assets/sam.jpg";
import chris from "../Assets/chris.jpg";
import jap from "../Assets/darshan-patel-QJEVpydulGs-unsplash.jpg";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function Test() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cardsData = [
    {
      image: sam,
      text: '"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."',
      name: "Mike Taylor",
      location: "Lahore, Pakistan",
    },
    {
      image: chris,
      text: '"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."',
      name: "Chris Thomas",
      location: "Lahore, Pakistan",
    },
    {
      image: jap,
      text: '"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."',
      name: "Mike Taylor",
      location: "Lahore, Pakistan",
    },
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === cardsData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? cardsData.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className=" lg:h-screen h-full py-12 ">
      <section className="grid   grid-cols-1 py-12 container mx-auto lg:grid-cols-2 gap-6 items-center justify-center justify-items-center">
        <div className="text-start">
          <h2 className="uppercase text-gray-600 font-semibold">
            Testimonials
          </h2>
          <h2 className="font-bold text-5xl lg:text-6xl">
            What People Say <br />
            About Us.
          </h2>
          <div className="flex my-10 mx-2">
            {cardsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full bg-gray-500 mr-5 ${
                  index === currentSlide ? "bg-gray-900" : ""
                }`}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center mx-12 justify-items-center  items-center">
          <div className="relative flex justify-items-center mx-auto justify-center items-center">
            <div className="h-48 relative  text-start text-slate-600 z-50 rounded-lg shadow-xl px-5 py-3">
              <div className="absolute -top-9 left-0 rounded-full h-12 w-12">
                <img
                  src={cardsData[currentSlide].image}
                  alt="Profile"
                  className="rounded-full h-full w-full"
                />
              </div>
              <p>{cardsData[currentSlide].text}</p>
              <div className="py-5">
                <p className="font-bold">{cardsData[currentSlide].name}</p>
                <p>{cardsData[currentSlide].location}</p>
              </div>
            </div>
            {currentSlide !== cardsData.length - 1 && (
              <div className="absolute -bottom-16  w-96 left-5 lg:left-10 h-24 lg:h-24 bg-white opacity-80 rounded-lg shadow-md">
                <div className="opacity-80 mx-5 text-start text-slate-600 flex items-baseline justify-items-end flex-col align-baseline justify-end">
                  <p className="pt-9">{cardsData[currentSlide + 1].name}</p>
                  <p>{cardsData[currentSlide + 1].location}</p>
                </div>
              </div>
            )}

            <div className="flex flex-col space-y-6 mx-5 w-full">
              <button onClick={goToPrevSlide}>
                <FaChevronUp size={12} color="gray" />
              </button>
              <button onClick={goToNextSlide}>
                <FaChevronDown size={12} color="gray" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center py-10 container mx-auto justify-center lg:space-x-20 space-x-10">
        <div className="lg:w-32 w-72 h-10">
          <img src={axon} alt="axon" className="w-48 " />
        </div>
        <div className="lg:w-32 w-72 h-10">
          <img src={jet} alt="jet" className="w-48" />
        </div>
        <div className="lg:w-32 w-72 h-10">
          <img src={exp} alt="exp" className="w-48" />
        </div>
        <div className="lg:w-32 w-72 h-10">
          <img src={qua} alt="qua" className="w-48" />
        </div>
        <div className="lg:w-32 w-72 h-10">
          <img src={ail} alt="ail" className="w-48" />
        </div>
      </section>
    </div>
  );
}

export default Test;
