import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CoursesSection() {
  const [favorites, setFavorites] = useState([false, false, false]);
  const [currentPage, setCurrentPage] = useState(1);
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
      description: 'This course builds on students\' previous  with functions and their developing understanding of rates of change.',
      cta: 'Enroll Now',
      ctaColor: 'text-red-500',
      showPrice: false
    },
    {
      title: 'MCV4U: Calculus and Vectors',
      description: 'This course builds on students\' previous  with functions and their developing understanding of rates of change.',
      cta: 'Learn More',
      ctaColor: 'text-[#200164]',
      showPrice: false
    },
    {
      title: 'MCV4U: Calculus and Vectors',
      description: 'This course builds on students\' previous  with functions and their developing understanding of rates of change.',
      cta: null,
      ctaColor: '',
      showPrice: true
    }
  ];

  return (
    <div className=" bg-gray-50 py-8 px-4 sm:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-[36px] md:text-[36px] font-semibold text-[#200164] text-center mb-10">
          Prepare For The Exam
        </h1>

        {/* Courses Grid - Mobile: 1 column, MD+: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition-transform"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src="/home1.jpg"
                  alt="Study space"
                  className="w-full h-59 object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="px-5 pb-2 pt-5 ">
                {/* Badge and Heart */}
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

                {/* Title */}
                <h2 className="text-[22px] font-semibold text-[#333333] mb-1">
                  {course.title}
                </h2>

                {/* Description */}
                <p className="text-[#333333] text-[16px] font-regular mb-5">
                  {course.description}
                </p>

                {/* Footer: CTA/Price and Rating */}
                <div className="flex items-center justify-between">
                  {/* CTA or Price */}
                  <div>
                    {course.showPrice ? (
                      <span className="text-[36px] font-bold text-[#333333]">
                        500$
                      </span>
                    ) : (
                      <button
                        className={`flex items-center text-[18px] mt-3   gap-2 font-medium hover:gap-3 transition-all duration-300 ${course.ctaColor}`}
                      >
                        {course.cta}
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mt-3 gap-1">
                    <span className="text-[#FEA333] font-semibold text-[14px]">
                      4.2
                    </span>
                    <div className="flex text-yellow-400 text-xl">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-[#B3B3B3] text-[14px] font-regular ">(142)</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Page Numbers */}
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

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}