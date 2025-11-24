"use client";

export default function VerifySteps() {
  const steps = [
    {
      id: 1,
      title: "STEP 1",
      text: "Scan the QR code and check that the beginning of the URL.",
      icon: "/scanner.svg",
    },
    {
      id: 2,
      title: "STEP 2",
      text: "Enter the number of the certificate (the last part of combination of letters and digits).",
      icon: "/cer.svg",
    },
    {
      id: 3,
      title: "STEP 3",
      text: "Enter the date of session as mentioned in the certificate.",
      icon: "/mobile.svg",
    },
    {
      id: 4,
      title: "STEP 4",
      text: "Validate the calculation asked.",
      icon: "/tick.svg",
    },
    {
      id: 5,
      title: "STEP 5",
      text: "Your results can thus be verified.",
      icon: "/contact.svg",
    },
  ];

  return (
    <div className="w-full bg-[#eef1f9] py-8 px-4 sm:py-12  ">
      <div className="max-w-[340px] sm:max-w-[1240px] mx-auto">
        <h2 className="text-center text-[28px] leading-tight sm:text-[36px] font-semibold text-[#2c1a74] mb-8 sm:mb-10">
          Steps To Verify Your Results
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-0 ">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className={`flex flex-col items-start ${step.id === 5 ? 'col-span-2 sm:col-span-1 justify-self-center sm:justify-self-auto' : ''}`}
            >
              <img
                src={step.icon}
                alt={`${step.title} icon`}
                className="w-14 h-14 mb-4 object-contain"
              />
              <h4 className="text-[#2c1a74] text-[12px] sm:text-[14px] font-semibold mb-2">
                {step.title}
              </h4>
              <p className="text-[#333333] font-medium text-start text-[14px] sm:text-[16px] leading-snug max-w-[150px] sm:max-w-[190px]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}