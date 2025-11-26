"use client";
import React from 'react';

export default function First() {
  return (
    <div className="relative w-full h-[380px] px-4  sm:h-64 sm:min-h-[100px] md:h-96 lg:h-[292px] overflow-hidden">
     
      <div 
        className="absolute inset-0 bg-cover h-[325px] sm:h-[292px]  bg-center"
        style={{
          backgroundImage:  "url('/img2 (2).jpg')  ",
        }}
      >
       
        <div className="absolute inset-0 bg-black/40 "></div>
      
      </div>

     
      <div className="relative z-10 h-[350px] sm:h-65 md:h-70 max-w-6xl mx-auto sm:mx-[100px]   2xl:px-5      flex flex-col justify-center">
       
        <div className="mb-2 sm:mb-2">
          <p className="text-gray-300 text-[14px] sm:text-[14px] font-semibold">
            Home / <span className="font-normal text-white ">TCF Canada Test</span>
          </p>
        </div>
     
       
        <h1 className="text-white text-[29px] sm:text-4xl md:text-4xl lg:text-3xl font-semibold mb-6 sm:mb-5 md:mb-7 tracking-wide">
          TCF CANADA TEST
        </h1>

     
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center md:justify-start sm:gap-4">
          <button className="bg-[#F8393B] hover:bg-red-700 cursor-pointer h-[43px] w-[163px] text-white text-md font-semibold leading-[100%]  rounded-[6px] transition-all duration-300 shadow-lg hover:shadow-xl text-md  ">
            Book Now
          </button>
          <button className="bg-[#F8393B] hover:bg-red-700 w-[260px] cursor-pointer h-[43px] text-white  leading-[100%] font-semibold  rounded-[6px] transition-all duration-300 shadow-lg hover:shadow-xl  text-md">
            Prepare For The Exam
          </button>
        </div>
      </div>
    </div>
  );
}