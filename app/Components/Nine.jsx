"use client";
import { MapPin } from "lucide-react";
import { Mail } from 'lucide-react';
import { Phone } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-[#E9EDF6] w-full py-5 px-6   ">
      <div className="flex flex-col md:flex-row justify-between gap-8 2xl:px-30 container mx-auto md:gap-30">

      
        <div className="space-y-4 w-full md:w-1/1">

        
          <div className="flex items-center gap-3">
            <img src="/img1 (3).png" className="w-[214px] h-[80px]" alt="logo" />
          
            <div className="leading-tight">
             
            </div>
          </div>

      
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <svg width="18" height="18" fill="#333" viewBox="0 0 24 24">
   <MapPin className="w-12 h-10 text-[#999999]"/>
            </svg>
            <p className="text-[#4D4D4D] text-[16px] font-medium"> <span className="text-[16px] font-regular text-[#999999]">Adress: </span>   211-716 Gordon Baker Rd, North York, ON, M2H 3B4, Canada</p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <svg width="18" height="18" fill="#333" viewBox="0 0 24 24">
               <Mail size={24} color="#999999" />
            </svg>
            <p className="text-[#4D4D4D] text-[16px] font-medium"> <span className="text-[#999999] font-regular text-[16px] ">E-Mail: </span>  Admin@gblc.ca</p>
          </div>

    
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <svg width="18" height="18" fill="#333" viewBox="0 0 24 24">
     <Phone size={24} color="#999999" />
            </svg>
            <p className="text-[#4D4D4D] text-[16px] font-medium"><span className="text-[#999999] font-regular text-[16px]">Phone: </span>    +1-437-317-7180</p>
          </div>

        </div>

       
        <div className="flex flex-col text-[#999999] text-semibold text-[16px] space-y-4 md:w-1/3">
          <a href="#" className="hover:text-gray-700">Testing</a>
          <a href="#" className="hover:text-gray-700">Exam Preparation</a>
          <a href="#" className="hover:text-gray-700">About Us</a>
          <a href="#" className="hover:text-gray-700">Contact</a>
          <a href="#" className="hover:text-gray-700">FAQ</a>
          <a href="#" className="hover:text-gray-700">Partners</a>
          <a href="#" className="hover:text-gray-700">Resources</a>
        </div>

        
        <div className="flex self-center md:self-start gap-2">
          <div className="bg-[#35238D] p-3 rounded-full cursor-pointer">
            <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
              <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 4.8 3.4 8.8 7.9 9.8v-6.9H7.6v-2.9h2.3V9.8c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .1 2.3.1v2.6H14c-1.3 0-1.7.8-1.7 1.6v2h2.9l-.5 2.9h-2.4v6.9C18.6 20.8 22 16.8 22 12z"/>
            </svg>
          </div>

          <div className="bg-[#35238D] p-3 rounded-full cursor-pointer">
            <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
              <path d="M21.5 6.5c-.8.4-1.7.7-2.6.8a4.4 4.4 0 0 0 1.9-2.5 8.7 8.7 0 0 1-2.8 1.1 4.3 4.3 0 0 0-7.4 3c0 .3 0 .6.1.9a12.2 12.2 0 0 1-8.8-4.5 4.3 4.3 0 0 0 1.3 5.7 4.2 4.2 0 0 1-2-.6v.1a4.3 4.3 0 0 0 3.4 4.2 4.2 4.2 0 0 1-2 .1 4.3 4.3 0 0 0 4 3 8.7 8.7 0 0 1-5.3 1.8c-.3 0-.7 0-1-.1a12.3 12.3 0 0 0 18.8-10.4v-.6c.7-.5 1.5-1.3 2-2.2z"/>
            </svg>
          </div>

          <div className="bg-[#35238D] p-3 rounded-full cursor-pointer">
            <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
              <path d="M12 2.2c-5.4 0-9.8 4.3-9.8 9.8 0 4.9 3.6 8.9 8.3 9.7v-6.9H8.6v-2.8h1.9V9.7c0-1.9 1.2-3 2.9-3 .8 0 1.6.1 1.8.1v2.4h-1.3c-1 0-1.3.7-1.3 1.4v1.9h2.7l-.5 2.8h-2.2v6.9c4.7-.8 8.3-4.8 8.3-9.7-.1-5.5-4.5-9.9-9.8-9.9z"/>
            </svg>
          </div>

          <div className="bg-[#35238D] p-3 rounded-full cursor-pointer">
            <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
              <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9.2 14H7.3V10h2.5v7zm-1.3-8.1c-.8 0-1.4-.6-1.4-1.4S7.7 6 8.5 6c.8 0 1.4.6 1.4 1.4s-.6 1.5-1.4 1.5zm10.5 8.1h-2.5v-3.4c0-.8 0-1.9-1.1-1.9s-1.3.9-1.3 1.9V17h-2.5v-7h2.4v1h.1c.4-.8 1.5-1.6 3-1.6 3.2 0 3.7 2.1 3.7 4.7V17z"/>
            </svg>
          </div>
        </div>

      </div>


      <div className="border-t border-gray-300 mt-10 pt-4">
        <p className="text-center text-[#4D4D4D] font-regular text-[14px] ">Privacy Policy</p>
      </div>
    </footer>
  );
}
