// components/TCFRegistrationProcess.js
import Image from 'next/image';

export default function TCFRegistrationProcess() {
  const steps = [
    {
      number: "Step 1",
      title: "Registration",
      iconSrc: "/pen.svg", // Replace with your image path
      items: [
        "Prior registration, please make sure that you need the TCF-Canada.",
        "It is the sole responsibility of the candidate to ensure that he/she is registered for the appropriate exam.",
        "GBLC and its employees cannot be  responsible for the choices made by the candidate."
      ]
    },
    {
      number: "Step 2",
      title: "Fill Details",
      iconSrc: "/pen2.svg", // Replace with your image path
      items: [
        "Fill the details after registration process. Write your informations in the fields."
      ]
    },
    {
      number: "Step 3",
      title: "Payment",
      iconSrc: "/pen3.svg", // Replace with your image path
      items: [
        "Payments to be made in full at the time of registration.",
        "No transfers, refunds or credits will be granted after the registration to the TCF.",
        "In the event of cancellation or rescheduling before the registration deadline, a non-refundable $75 will be charged."
      ]
    },
    {
      number: "Step 4",
      title: "Confirmation",
      iconSrc: "/pen4.svg", // Replace with your image path
      items: [
        "To take the test, the candidate must be 16 and older."
      ]
    },
    {
      number: "Step 4",
      title: "Upload",
      iconSrc: "/pen5.svg", // Replace with your image path
      items: [
        "Upload your documents and the process is done !"
      ]
    }
  ];

  return (
    <div className="bg-white py-10 px-3   ">
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="text-center mb-7">
          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-semibold text-[#1e0a5e] ">
            TCF Canada Registration Process
          </h1>
          <p className="font-regular  sm:text-[16px] text-gray-600 leading-relaxed">
            In order to complete the registration, we need the{' '}
            <span className="text-red-500 font-regular">completed form</span>, copy of your valid passport and the payment.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#200164] from-[#200164] to-[#1a0845] font-sans rounded-[16px] p-8 sm:p-4 h-[499px] flex flex-col"
            >
              {/* Step Header */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-13 h-13 relative flex-shrink-0">
                  <Image
                    src={step.iconSrc}
                    alt={step.title}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-[#FFFFFF] text-[14px] font-medium  ">
                    {step.number}
                  </div>
                  <div className="text-white text-[20px] font-bold leading-[100%]">
                    {step.title}
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="flex flex-col gap-[13px]">
                {step.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <div className="w-3.5 h-3.5 bg-red-500 rounded-[2px] flex-shrink-0 mt-0.5"></div>
                    <p className="text-gray-100 text-[16px] leading-[150%] tracking-[2%] font-medium ">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}