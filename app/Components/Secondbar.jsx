"use client";
import Image from 'next/image';

export default function TCFCanada() {
  return (
    <div className="max-w-6xl mx-auto sm:mx-[100px]  px-4 pt-10 bg-white">
      <h1 className="text-[35px] font-semibold text-[#1e0a5e]  mb-6">TCF Canada Test Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10  ">
        <div className=''>
          <table className="w-full h-65 border border-[#D2D8E7] mb-4 text-[14px] text-[#252E47] ">
            <tbody>
              <tr>
                <td className="border border-[#D2D8E7] px-2 md:pr-23 py-2">Oral Comprehension (39 Items)</td>
                <td className="border border-[#D2D8E7] px-2 py-2">35 Minutes</td>
              </tr>
              <tr>
                <td className="border border-[#D2D8E7] px-2 md:pr-23 py-2">Written Understanding (39 Items)</td>
                <td className="border border-[#D2D8E7] px-2 py-2">60 Minutes</td>
              </tr>
              <tr>
                <td className="border border-[#D2D8E7] px-2 md:pr-23 py-2">Written Expression (3 Tasks)</td>
                <td className="border border-[#D2D8E7] px-2 py-2">60 Minutes</td>
              </tr>
              <tr>
                <td className="border border-[#D2D8E7] px-2 md:pr-23 py-2">Oral Expression (3 Tasks)</td>
                <td className="border border-[#D2D8E7] px-2 py-2">12 Minutes</td>
              </tr>
              <tr>
                <td className="border border-[#D2D8E7] px-2 py-2">Oral Expression (3 Tasks)</td>
                <td className="border border-[#D2D8E7] px-2 py-2">12 Minutes</td>
              </tr>
            </tbody>
          </table>
          <div className="font-semibold text-[18px] text-blue-900 mb-2">Pricing</div>
          <table className="w-full border text-sm text-[#252E47] mb-2">
            <tbody>
              <tr>
                <td className="border border-[#D2D8E7] px-3 py-2">Full Exam: Listening + Speaking + Writing + Reading</td>
                <td className="border border-[#D2D8E7] px-3 py-2">$452 CAD</td>
              </tr>
              <tr>
                <td className="border border-[#D2D8E7] px-3 py-2">Optional: Shipping Of Results</td>
                <td className="border border-[#D2D8E7] px-3 py-2">$22.60 CAD</td>
              </tr>
            </tbody>
          </table>
          <div className="text-xs text-gray-500 my-4">
            * Note we are currently only accepting payments through e-transfer or debit at our physical office location in North York.
          </div>
          <div className="flex flex-col md:flex-row gap-4  mt-8">
            <button className="bg-red-500 text-white px-6 py-2 cursor-pointer rounded-[6px]  h-[40px] lg:w-[200px] hover:bg-red-600 transition-colors">
              Book Now
            </button>
            <button className="bg-red-500 text-white px-6 py-2 md:py-0 cursor-pointer  rounded-[6px]  h-[40px]  lg:w-[423px] hover:bg-red-600 transition-colors">
              Prepare For The Exam
            </button>
          </div>
        </div>
         <div className="space-y-4">
          
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-[13px] h-[13px] bg-[#EF4444] rounded-[2px] flex-shrink-0 mt-1.5"></div>
                <p className="text-[#6B7280] leading-[1.7] text-[15px]">
                  The TCF-Canada (Test de Connaissance du Français) is a French language proficiency test that is accepted by Immigration, Refugees, and Citizenship Canada (IRCC) for the purposes of economic immigration or for obtaining Canadian citizenship and recognized as an official proof of language proficiency for permanent residency application.
                </p>
              </div>

              <div className="flex gap-3">
                <div className="w-[13px] h-[13px] bg-[#EF4444] rounded-[2px] flex-shrink-0 mt-1.5"></div>
                <p className="text-[#6B7280] leading-[1.7] text-[15px]">
                  The Test de Connaissance du Français is an exam that assesses a non-native French speaker's French language abilities. It is administered by the Centre international d'études pédagogiques (CIEP) for the French Ministry of Education. It fulfils French language entry requirements, can be used to demonstrate language ability for job applications or for personal use, used by Québec for immigration procedures and also accepted by Immigration, Refugees, and Citizenship Canada (IRCC).
                </p>
              </div>

              <div className="flex gap-3">
                <div className="w-[13px] h-[13px] bg-[#EF4444] rounded-[2px] flex-shrink-0 mt-1.5"></div>
                <p className="text-[#6B7280] leading-[1.7] text-[15px]">
                  GB Language Centre, North York is the exam centre in the GTA accredited to hold internationally recognized TCF Tests.
                </p>
              </div>
            </div>

         
            <div className="flex items-center gap-8 ">
         
             

           <img src="tch.jpg" alt="" />

              
               
            </div>
          </div>
        </div>
      </div>
    
  );
}