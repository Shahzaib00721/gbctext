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
    <div className=" bg-white p-4 mb-5 sm:px-4">
      <div className="max-w-6xl mx-auto md:px-4 ">
       
        


        <h1 className="text-3xl sm:text-4xl font-semibold text-[#1a0b4d] text-[36px] text-center mb-10">
          Manual Registration Forms
        </h1>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 ">
          {forms.map((form, index) => (
            <div
              key={index}
              className={`
                ${form.isDark ? 'bg-[#3d3d3d]' : 'bg-[#E9EDF6]'}
                rounded-xl p-2  text-center
                hover:-translate-y-1 hover:shadow-xl
                transition-all duration-300 cursor-pointer
                flex flex-col items-center justify-center
                min-h-[175px]
              `}
            >
             
              <div className="mb-4">
                <img 
                  src={form.image} 
                  alt={form.title}
                  className="w-8 h-8 object-contain mx-auto"
                />
              </div>

      
              <h3 className={`
                text-base font-semibold text-[17px] whitespace-pre-line leading-snug
                ${form.isDark ? 'text-white' : 'text-[#F8393B]'}
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