"use client";
import { MapPin } from "lucide-react";
import { Mail } from 'lucide-react';
import { Phone } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-[#E9EDF6] w-full  py-5 px-4 py-10   ">
      <div className="flex flex-col lg:flex-row justify-between   max-w-6xl mx-auto md:mx-[100px]   ">

      
        <div className="space-y-4 w-full lg:w-1/2">

        
          <div className="flex items-center gap-3">
            <img src="/img1 (3).png" className="w-[214px] h-[80px]" alt="logo" />
          
            <div className="leading-tight">
             
            </div>
          </div>

      <div className="flex items-start corsor-pointer gap-2 text-sm text-gray-700">
           <img className="cursor-pointer" src="loc.svg" alt="" />
           <div>
            <p className="text-[#4D4D4D] text-[16px] font-medium">
                 <span className="text-[16px] font-regular text-[#999999]">Adress:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
                   211-716 Gordon  Rd,<span> North York, ON, M2 3B4, Canada </span></p>
                   </div>
          </div>

       
          <div className="flex items-center gap-2 text-sm text-gray-700">
           <img className="cursor-pointer" src="mal.svg" alt="" />
            <p className="text-[#4D4D4D] text-[16px] font-medium"> <span className="text-[#999999] font-regular text-[16px] ">E-Mail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>  Admin@gblc.ca</p>
          </div>

    
          <div className="flex items-center gap-2 text-sm text-gray-700">
           <img className="cursor-pointer" src="phn.svg" alt="" />
            <p className="text-[#4D4D4D] text-[16px] font-medium"><span className="text-[#999999] font-regular text-[16px]">Phone:&nbsp;&nbsp;&nbsp;&nbsp;</span>    +1-437-317-7180</p>
          </div>

        </div>

       
        <div className="flex flex-col text-[#999999] text-semibold my-4 md:my-0 text-[16px] space-y-4 lg:w-1/5">
          <a href="#" className="hover:text-gray-700">Testing</a>
          <a href="#" className="hover:text-gray-700">Exam Preparation</a>
          <a href="#" className="hover:text-gray-700">About Us</a>
          <a href="#" className="hover:text-gray-700">Contact</a>
          <a href="#" className="hover:text-gray-700">FAQ</a>
          <a href="#" className="hover:text-gray-700">Partners</a>
          <a href="#" className="hover:text-gray-700">Resources</a>
        </div>

        
        <div className="flex self-center cursor-pointer lg:self-start gap-2">
          <img src="book.svg" alt="" />

            <img src="twi.svg" alt="" />

           <img src="insta.svg" alt="" />

        
            <img src="link.svg" alt="" />
          
        </div>

      </div>


      <div className="border-t border-gray-300 mt-10 pt-4">
        <p className="text-center text-[#4D4D4D] font-regular text-[14px] ">Privacy Policy</p>
      </div>
    </footer>
  );
}