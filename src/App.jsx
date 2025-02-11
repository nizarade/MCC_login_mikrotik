import React from "react";
import { assets } from "./assets/assets.js";
import CarouselTransition from "./CarouselTransition.jsx";

const slides = [assets.adds, assets.adds, assets.adds];

const App = () => {
  return (
    <div className="bg-[url(./assets/bg_vertical.png)]  bg-cover bg-center w-screen h-full md:bg-[url(./assets/bg_horizontal.png)] lg:h-screen overflow-hidden">
      <div className="bg-sky-900 py-2 px-2">
        <img src={assets.logo} alt="" />
      </div>

      <div className="flex flex-col items-center  justify-center md:flex-row grid-cols-2 gap-2 my-2 lg:my-24">
        <div className="lg:max-w-2xl md:max-w-lg mx-auto my-auto p-4 ">
          <CarouselTransition autoslide={true} autoSlideInterval={3000}>
            {slides.map((s) => (
              <img src={s} alt="" />
            ))}
          </CarouselTransition>
        </div>

        <div className=" flex flex-col items-center  md:w-2xl justify-center w-full mx-auto  ">
          <img className="mb-2 w-48 md:w-md  " src={assets.logo_big} alt="" />
          <div className="flex flex-col items-center py-6 bg-[#D3DAFF] w-full rounded-xl shadow-2xl">
            <p className="text-2xl font-bold my-5">MCC Hotspot Login</p>
            <input
              type="password"
              placeholder="Password"
              className=" bg-white drop-shadow-lg border-sky-900 w-3/4 py-2 px-4 rounded-4xl"
            />
            <button className=" bg-[#001A72] drop-shadow-lg rounded-4xl py-2 px-8 my-4 text-white text-lg font-semibold">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
