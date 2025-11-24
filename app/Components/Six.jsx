"use client";
import { useState, useEffect } from 'react';

export default function UpcomingTests() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const testsPerPage = 3; // Desktop: 3 cards, Mobile: 1 card

  const tests = [
    {
      id: 1,
      image: "/home.jpg",
      title: "IELTS on computer",
      time: "13:30 - 16:00",
      date: "03 Jun 2024",
      deadline: "April 23, 2024",
      location: "Toronto",
      type: "Computer Based",
      description: "The TFI™ test is used regardless by language learners of all levels, regardless of occupation or background, as a fair and objective measure of French proficiency for academic and business institutions.",
      price: "500$"
    },
    {
      id: 2,
      image: "/home.jpg",
      title: "IELTS on computer",
      time: "13:30 - 16:00",
      date: "03 Jun 2024",
      deadline: "April 23, 2024",
      location: "Toronto",
      type: "Computer Based",
      description: "The TFI™ test is used by regardless language learners of all levels, regardless of occupation or background, as a fair and objective measure of French proficiency for academic and business institutions.",
      price: "500$"
    },
    {
      id: 3,
      image: "/home.jpg",
      title: "IELTS on computer",
      time: "13:30 - 16:00",
      date: "03 Jun 2024",
      deadline: "April 23, 2024",
      location: "Toronto",
      type: "Computer Based",
      description: "The TFI™ test is used by regardless language learners of all levels, regardless of occupation or background, as a fair and objective measure of French proficiency for academic and business institutions.",
      price: "500$"
    },
    {
      id: 4,
      image: "/home.jpg",
      title: "TOEFL Test",
      time: "09:00 - 12:00",
      date: "10 Jun 2024",
      deadline: "May 01, 2024",
      location: "Vancouver",
      type: "Computer Based",
      description: "The TOEFL test measures your ability to use and understand English at the university level and evaluates how well you combine your skills.",
      price: "450$"
    }
  ];

  // Detect if mobile for responsive pagination
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Pagination calculation
  const itemsPerPage = isMobile ? 1 : testsPerPage;
  const totalPages = Math.ceil(tests.length / itemsPerPage);
  const indexOfLastTest = currentPage * itemsPerPage;
  const indexOfFirstTest = indexOfLastTest - itemsPerPage;
  const currentTests = tests.slice(indexOfFirstTest, indexOfLastTest);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevPage = () => currentPage > 1 && handlePageChange(currentPage - 1);
  const handleNextPage = () => currentPage < totalPages && handlePageChange(currentPage + 1);

  return (
    <div className="w-full bg-white  py-8 px-4">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-center text-[36px] sm:text-[40px] font-semibold text-[#1a1a4e] mb-10 sm:mb-5">
          Upcoming Tests
        </h2>

        {/* Test cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 lg:gap-5 mb-10`}>
          {currentTests.map((test) => (
            <div key={test.id} className="bg-white rounded-[16px] overflow-hidden shadow-sm border border-[#F2F2F298] hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-[180px] sm:h-[240px] overflow-hidden">
                <img
                  src={test.image}
                  alt={test.title}
                  className="w-full h-full object-cover rounded-t-[16px]"
                />
              </div>
              <div className="px-5 pb-5 pt-4 sm:px-6">
                <h3 className="text-[16px] font-semibold text-[#333333] mb-2">{test.title}</h3>
                <div className="flex items-center gap-4 mb-2 text-gray-700 text-[14px]">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                    <span>{test.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                    <span>{test.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-3 text-[14px]">
                  <span className="text-gray-700 font-medium">Deadline: {test.deadline}</span>
                </div>

                <div className="flex items-center gap-4 mb-3 text-red-500 font-medium">
                  <span>{test.location}</span>
                  <span>{test.type}</span>
                </div>

                <p className="text-gray-600 mb-5 text-[14px]">{test.description}</p>

                <div className="text-center mb-4">
                  <span className="text-[20px] font-bold text-[#333333]">{test.price}</span>
                </div>

                <button className="w-full bg-[#ff3b3f] hover:bg-[#e63439] text-white text-[16px] font-semibold py-3 rounded-lg transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <button onClick={handlePrevPage} disabled={currentPage === 1} className={`w-9 h-9 flex items-center justify-center ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}>
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`w-9 h-9 flex items-center justify-center rounded-full font-bold text-[14px] transition-colors ${
                currentPage === index + 1 ? 'bg-[#1a1a4e] text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button onClick={handleNextPage} disabled={currentPage === totalPages} className={`w-9 h-9 flex items-center justify-center ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}>
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
