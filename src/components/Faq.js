import React, {useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Faq = () => {

    // Initial state for tracking open FAQ
    const [openFAQ, setOpenFAQ] = useState(-1);

    // Function to toggle FAQ's
    const toggleFAQ = index => {
        setOpenFAQ(openFAQ === index ? -1 : index); // Close if the same FAQ is clicked again
    };

    // Array of FAQ's
    const faqs = [
        {
            question: "What is CTrack?",
            answer: "CTrack is a state-of-the-art cryptocurrency tracking application that provides real-time data, comprehensive analysis, and advanced tracking features to help you stay on top of your cryptocurrency investments."
        },

        {
            question: "How can CTrack help me manage my cryptocurrency portfolio?",
            answer: "With CTrack, you can monitor your portfolio's performance, set alerts for price changes, analyze trends over time, and get insights into market movements, all from a user-friendly dashboard designed for both novice and experienced investors." 
        },

        {
            question: "Is CTrack secure?",
            answer:  "Yes, we prioritize your security and privacy. CTrack employs advanced encryption and security protocols to protect your data, ensuring that your sensitive information remains confidential and secure."
        },

        {
            question: "Can I track multiple cryptocurrencies with CTrack?",
            answer:  "Absolutely! CTrack supports a wide range of cryptocurrencies, allowing you to track and manage multiple assets simultaneously for a comprehensive view of your investments."
        },

        {
            question: "How does CTrack stay updated with the latest cryptocurrency data?",
            answer:  "CTrack integrates with several reputable cryptocurrency data sources to ensure that you receive the most current and accurate information. Our system updates continuously to reflect real-time market conditions."
        },
    ]


  return (
    <div id="faq" className="container mx-auto px-12 py-12">
      <div className="md:flex md:items-start md:justify-between">
        {/* Left Column for Header and CTA */}
        <div className="mb-10 md:mb-0 md:w-1/2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-md mb-6">
            Find answers to common questions about our cryptocurrency tracking application.
          </p>
          <button className="text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 rounded-lg px-5 py-2.5 transition ease-in duration-150">
            Contact
          </button>
        </div>
        {/* FAQ Items */}
        <div className="md:w-1/2">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <dt className="flex justify-between items-center p-4 bg-[#FAF0E6] shadow cursor-pointer" onClick={() => toggleFAQ(index)}>
                <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                <div className="p-2 rounded-full bg-indigo-600 text-black">
                  {openFAQ === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
              </dt>
              <dd className={`${openFAQ === index ? 'block' : 'hidden'} p-4 bg-[#FAF0E6] text-black font-medium`}>
                {faq.answer}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq