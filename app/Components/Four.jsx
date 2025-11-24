"use client";
export default function TCFResultsTimeline() {
  return (
    <div className="w-full bg-white py-12 px-4  ">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-[#1a1a5e] mb-8 text-center">
          TCF Results Timeline And Format
        </h1>

        
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 lg:gap-4 items-start">
          
          <div className="space-y-5  ">

            <div className="flex gap-3">
              <span className="text-red-500 text-lg font-medium flex-shrink-0 mt-0.5">■</span>
              <p className="text-[16px] sm:text-base font-medium text-[#666666] leading-relaxed">
                Please note that it takes 2 - 3 weeks for the TCF Computer based test and 3 - 4 weeks for Paper based Tests. We will send the official certificates by e-mail to each of the candidate. If you need a print from our Centre, we can provide it to you by email or in person.
              </p>
            </div>

           
            <div className="flex gap-3">
              <span className="text-red-500  text-lg  flex-shrink-0 mt-0.5">■</span>
              <p className="text-[16px] font-medium sm:text-base text-[#666666] leading-relaxed">
                The TCF Certificate in original is NOT being issued by France Education International with effect from March 27, 2023. Thus, for the sessions passed from March 27, no more certificate published on secure paper will be sent from FEI.
              </p>
            </div>

          
            <div className="bg-[#f3f4f8] rounded-lg p-6 mt-6">
              <h2 className="text-[20px] sm:text-xl font-semibold text-[#333333] mb-4">
                The certificate is in a new simplified DIGITAL format which includes:
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-2 text-sm sm:text-base text-gray-800">
                  <span className="text-[#1a1a5e] font-bold flex-shrink-0">•</span>
                  <span className="text-[#200164] font-medium ">Information of the candidate, photo of the candidate and results.</span>
                </li>
                <li className="flex gap-2 text-sm sm:text-base text-gray-800">
                  <span className="text-[#1a1a5e] font-bold flex-shrink-0">•</span>
                  <span className="text-[#1a1a5e] font-medium ">
                    A QR code that links to the page of the FEI website dedicated to reading the Results allowing any end user to verify the authenticity of the certificate CAUTION to be sure that is not a falsified QR Code.
                  </span>
                </li>
              </ul>
            </div>
          </div>

   
          <div className="flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[400px] lg:max-w-[1400px]">
              <img 
                src="/pen7.png" 
                alt="Phone showing TCF certificate with Canadian flag" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}