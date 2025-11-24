"use client";
import React from 'react';
import { Download } from 'lucide-react';

export default function RegistrationForms() {
  const forms = [
    {
      title: 'Registration Form',
      image: 'pic23.svg',
      isDark: true
    },
    {
      title: "Formulaire\nD'inscription De",
      image: '/pic22.svg',
      isDark: false
    },
    {
      title: 'Cancellation & Refund\nRequest Form',
      image: '/pic21.svg',
      isDark: false
    },
    {
      title: 'Cancellation, Refund\n& Transfer Policy',
      image: '/pic20.svg',
      isDark: false
    },
    {
      title: 'Test Date Transfer\nRequest Form',
      image: '/pic19.svg',
      isDark: false
    }
  ];

  return (
    <div className=" bg-white p-4 mb-10 sm:px-4">
      <div className="max-w-7xl mx-auto">
       
        <div className="flex justify-center mb-10">
          <button className="bg-[#1a0b4d] text-white px-8 py-3 text-[18px] rounded-lg font-semibold hover:bg-[#2a1b5d] transition-colors duration-300">
            View More
          </button>
        </div>


        <h1 className="text-3xl sm:text-4xl font-semibold text-[#1a0b4d] text-[36px] text-center mb-10">
          Manual Registration Forms
        </h1>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 ">
          {forms.map((form, index) => (
            <div
              key={index}
              className={`
                ${form.isDark ? 'bg-[#3d3d3d]' : 'bg-[#E9EDF6]'}
                rounded-xl p-4  text-center
                hover:-translate-y-1 hover:shadow-xl
                transition-all duration-300 cursor-pointer
                flex flex-col items-center justify-center
                min-h-[140px]
              `}
            >
             
              <div className="mb-4">
                <img 
                  src={form.image} 
                  alt={form.title}
                  className="w-12 h-12 object-contain mx-auto"
                />
              </div>

      
              <h3 className={`
                text-base font-semibold text-[18px] whitespace-pre-line leading-snug
                ${form.isDark ? 'text-white' : 'text-red-600'}
                ${index === 0 ? 'mb-9' : 'mb-3'}
              `}>
                {form.title}
              </h3>

           
              
               <a href="#"
                className={`
                  flex flex-col items-center gap-1 text-sm font-medium
                  hover:opacity-80 transition-opacity duration-300
                  ${form.isDark ? 'text-white' : 'text-[#1a0b4d]'}
                `}
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}