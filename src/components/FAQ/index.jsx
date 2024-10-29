import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import "../../styles.css";
import { faqData } from "./constant";

const FAQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full border">
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-10">
        <h2 className="heading text-center">Frequently asked questions</h2>
        <div className="">
          {faqData.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleQuestion(index)}
              className="border-b border-gray-200 hover:bg-gray-50 px-4 py-2 cursor-pointer"
            >
              <div className="flex justify-between items-center w-full py-4 text-left">
                <span className="text-sm font-semibold leading-6 text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <div className="text-sm font-semibold leading-6 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQuestions;
