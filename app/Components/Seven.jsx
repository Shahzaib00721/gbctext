"use client";
import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CoursesSection() {
  const [favorites, setFavorites] = useState([false, false, false]);
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileCardIndex, setMobileCardIndex] = useState(0);
  const totalPages = 4;

  const toggleFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const courses = [
    {
      title: 'MCV4U: Calculus and Vectors',
      description: 'This course builds on students\' previous experience with functions and their developing understanding of rates of change.',
      cta: 'Enroll Now',
      ctaColor: 'text-red-500',
      showPrice: false
    },
    {
      title: 'MCV4U: Calculus and Vectors',
      description: 'This course builds on students\' previous experience with functions and their developing understanding of rates of change.',
      cta: 'Learn More',
      ctaColor: 'text-[#200164]',
      showPrice: false
    },
    {
      title: 'MCV4U: Calculus and Vectors',
      description: 'This course builds on students\' previous experience with functions and their developing understanding of rates of change.',
      cta: null,
      ctaColor: '',
      showPrice: true
    }
  ];

  return (
    <div className="bg-white pt-4 px-4 sm:px-4">
      <div className="max-w-6xl mx-auto md:px-4">
   
        <h1 className="text-[28px] md:text-[36px] font-semibold text-[#200164] text-center mb-4 md:mb-7">
          Prepare for The Exam
        </h1>

        {/* Desktop View - 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition-transform"
            >
              <div className="relative">
                <img
                  src="/home1.jpg"
                  alt="Study space"
                  className="w-full h-52 object-cover"
                />
              </div>

              <div className="px-5 pb-2 pt-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#F2DEDF] text-[#F8393B] text-[14px] font-semibold px-3 py-1 rounded uppercase tracking-wide">
                    Beginner
                  </span>
                  <button
                    onClick={() => toggleFavorite(index)}
                    className="transition-colors duration-200"
                    aria-label="Add to favorites"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites[index]
                          ? 'fill-red-500 text-red-500'
                          : 'text-[#999999]'
                      }`}
                    />
                  </button>
                </div>

                <h2 className="text-[22px] font-semibold text-[#333333] mb-1">
                  {course.title}
                </h2>

                <p className="text-[#333333] text-[16px] font-regular mb-5">
                  {course.description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    {course.showPrice ? (
                      <span className="text-[36px] font-bold text-[#333333]">
                        500$
                      </span>
                    ) : (
                      <button
                        className={`flex items-center text-[18px] mt-3 gap-2 font-medium hover:gap-3 transition-all duration-300 ${course.ctaColor}`}
                      >
                        {course.cta}
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="flex items-center mt-3 gap-1">
                    <span className="text-[#FEA333] font-semibold text-[14px]">
                      4.2
                    </span>
                    <div className="flex text-yellow-400 text-xl">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-[#B3B3B3] text-[14px] font-regular">(142)</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Single card */}
        <div className="md:hidden mb-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm mx-auto">
            <div className="relative">
              <img
                src="/home1.jpg"
                alt="Study space"
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="px-5 pb-5 pt-5">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-[#F2DEDF] text-[#F8393B] text-[13px] font-semibold px-3 py-1 rounded uppercase tracking-wide">
                  Beginner
                </span>
                <button
                  onClick={() => toggleFavorite(mobileCardIndex)}
                  className="transition-colors duration-200"
                  aria-label="Add to favorites"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites[mobileCardIndex]
                        ? 'fill-red-500 text-red-500'
                        : 'text-[#999999]'
                    }`}
                  />
                </button>
              </div>

              <h2 className="text-[20px] font-semibold text-[#333333] mb-2">
                {courses[mobileCardIndex].title}
              </h2>

              <p className="text-[#666666] text-[14px] leading-relaxed mb-5">
                {courses[mobileCardIndex].description}
              </p>

              <div className="flex items-center justify-center gap-1 mb-5">
                <span className="text-[#FEA333] font-semibold text-[14px]">
                  4.2
                </span>
                <div className="flex text-yellow-400 text-lg">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-[#B3B3B3] text-[14px]">(142)</span>
              </div>

              <button
                className="flex items-center justify-center text-[16px] gap-2 font-medium text-[#200164] mx-auto hover:gap-3 transition-all duration-300"
              >
                {courses[mobileCardIndex].cta || 'Learn More'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Pagination - Desktop */}
        <div className="hidden md:flex items-center justify-center gap-2 mb-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-9 h-9 rounded-full font-medium transition-colors duration-200 ${
                  currentPage === page
                    ? 'bg-[#200164] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Pagination - Mobile */}
        <div className="md:hidden">
          <div className="flex items-center justify-center gap-2 mb-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-9 h-9 rounded-full font-medium transition-colors duration-200 ${
                    currentPage === page
                      ? 'bg-[#200164] text-white'
                      : 'bg-white text-gray-600 border border-gray-200'
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* View More Button */}
          <div className="flex justify-center">
            <button className="bg-[#200164] text-white px-12 py-3 rounded-lg font-semibold text-[16px] hover:bg-[#180048] transition-colors duration-300 shadow-md">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}