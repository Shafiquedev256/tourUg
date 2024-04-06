import { useState } from "react";
import { useQuestions } from "../hooks/questions";

type Index = number | null;

export const CommonQuestions = () => {
  const [isOpen, setIsOpen] = useState<Index>(null);
  const { faqs } = useQuestions();
  const toggleAccordion = (index: Index) => {
    setIsOpen(index === isOpen ? null : index);
  };

  return (
    <div className='bg-black w-screen  py-4 flex flex-col justify-center items-center'>
      <h1 className='text-2xl p-4 text-white'>Tourists commonly ask </h1>
      <div className=' text-white rounded-t-lg shadow-lg w-[80%]'>
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              className='w-full flex flex-row text-left p-4 focus:outline-none'
              onClick={() => toggleAccordion(index)}
            >
              <h2 className='text-lg font-semibold'>{faq.question}</h2>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className={`h-6 w-6 transition-transform transform ${
                  index === isOpen ? "rotate-180 duration-500" : ""
                }`}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
            {index === isOpen && (
              <div className='p-4 bg-[#171718]'>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
