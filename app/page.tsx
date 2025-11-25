"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

import Firstbar from './Components/Firstbar';
import Secondbar from './Components/Secondbar'
import Three from './Components/Three'
import Four from './Components/Four'
import Five from './Components/Five'
import Six from './Components/Six'
import Seven from './Components/Seven'
import Eight from './Components/Eight'
import Nine from './Components/Nine'

 



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('EN');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white  shadow-md sticky  top-0 z-50">
      <div className="max-w-6xl mx-auto px-4  sm:px-3 ">
        <nav className="flex items-center justify-baseline gap-8   pb-7">
        
          <a href="#" className="flex  items-center gap-3">
            <div className=" h-28 flex items-center justify-center ">
              <img className='h-[70px] w-[200px]' src="img1 (3).png" alt="" />
            </div>
          </a>

         
          <ul className="hidden lg:flex --font-inter font-semibold  items-center gap-7">
            <li>
              <a href="#" className="text-[#333333] font-semibold hover:text-[#200164] transition-colors relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#200164] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#" className="text-[#333333] font-semibold hover:text-[#200164] transition-colors relative group">
                Testing ▾
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#200164] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#" className="text-[#333333] font-semibold hover:text-[#200164] transition-colors relative group">
                Exam Preparation ▾
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#200164] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#" className="text-[#333333] font-semibold hover:text-[#200164] transition-colors relative group">
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-p[#200164] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#" className="text-[#333333] font-semibold hover:text-[#200164] transition-colors relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#200164] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#" className="text-[#333333] font-semibold hover:text-[#200164] transition-colors relative group">
                FAQ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#200164] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-2 md:gap-10">
          
            <div className="flex bg-slate-100 rounded-full shadow-xl p-1 gap-1">
              <button
                onClick={() => setActiveLang('EN')}
                className={`px-3 py-1.5 rounded-full text-[18px] font-bold transition-all duration-300 ${
                  activeLang === 'EN'
                    ? 'bg-[#200164] text-white shadow-md'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setActiveLang('FR')}
                className={`px-3 py-1.5 rounded-full text-[18px] font-bold transition-all duration-300 ${
                  activeLang === 'FR'
                    ? 'bg-[#200164] text-white shadow-5xl'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                FR
              </button>
            </div>

          
            <button className="hidden sm:block text-[18px] px-6 py-2 border-2 border-[#F8393B] text-[#F8393B] font-semibold rounded-[6px] hover:bg-[#F8393B] hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              Sign In
            </button>

           
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-blue-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

     
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="py-4 space-y-3 border-t border-slate-200">
            <li>
              
              <a href="#" className="block py-2 text-slate-700 font-medium hover:text-purple-700 hover:bg-slate-50 px-4 rounded-lg transition-colors">
                Home
              </a>
          
            </li>
            <li>
              <a href="#" className="block py-2 text-slate-700 font-medium hover:text-purple-700 hover:bg-slate-50 px-4 rounded-lg transition-colors">
                Testing ▾
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-slate-700 font-medium hover:text-purple-700 hover:bg-slate-50 px-4 rounded-lg transition-colors">
                Exam Preparation ▾
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-slate-700 font-medium hover:text-purple-700 hover:bg-slate-50 px-4 rounded-lg transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-slate-700 font-medium hover:text-purple-700 hover:bg-slate-50 px-4 rounded-lg transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-slate-700 font-medium hover:text-purple-700 hover:bg-slate-50 px-4 rounded-lg transition-colors">
                FAQ
              </a>
            </li>
            <li className="pt-2">
              <button className="w-full px-6 py-2.5 border-2 border-purple-700 text-purple-700 font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition-all duration-300">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </div>

<Firstbar/>

<Secondbar/>

<Three/>


<Four/>

<Five/>

<Six/>

<Seven/>
<Eight/>
<Nine/>

    </header>
  );
}