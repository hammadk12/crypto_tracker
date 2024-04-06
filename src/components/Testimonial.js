import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Testimonial = () => {
    // state to track active testimonial index
    const [activeIndex, setActiveIndex] = useState(0);

    // Testimony array
    const testimonials = [
        {
            quote: "CTrack has revolutionized the way I monitor my crypto investments. The real-time updates and detailed analytics help me make quick, informed decisions. It's a game-changer for my portfolio!",
            author: "Emily R.",
            position: "Cryptocurrency Trader"
        },
        {
            quote: "As someone new to the crypto world, CTrack's user-friendly interface made it incredibly easy for me to start. I especially love the alert system that keeps me posted on significant market movements.",
            author: "Alex J.",
            position: "New Investor"
        },
        {
            quote: "What I appreciate most about CTrack is the security. I can track my assets with peace of mind, knowing my data is encrypted and protected.",
            author: "Michael B.",
            position: "Security-Conscious User"
        },
        {
            quote: "The portfolio management tools on CTrack are unmatched. Being able to see my entire investment picture in one place, with such detail, has improved my investment approach substantially.",
            author: "Priya S.",
            position: "Long-term Investor"
        },
        {
            quote: "I've tried many tracking apps, but none compare to CTrack's precision and ease of use. Their customer support is also top-notch, always there when you need them.",
            author: "Daniel O.",
            position: "Professional Day Trader"
        },
        {
            quote: "The depth of data CTrack offers is incredible. From historical data to predictive trends, I feel like I have an insider's view of the crypto market.",
            author: "Sofia A.",
            position: "Data Analyst"
        },
        {
            quote: "Managing multiple cryptocurrencies can be overwhelming, but CTrack's interface brings simplicity and efficiency to the process. Their API integration seems to cover all the bases.",
            author: "Ethan K.",
            position: "Tech Enthusiast"
        },
        {
            quote: "CTrack's mobile app keeps me connected to the crypto market no matter where I am. The app is fast, responsive, and never misses a beat.",
            author: "Grace L.",
            position: "Frequent Traveler"
        },
        {
            quote: "CTrack isn't just a tracking tool; it's a comprehensive platform that educates. I've learned so much about cryptocurrency investment strategies through their resources.",
            author: "Lucas R.",
            position: "Aspiring FinTech Professional"
        },
        {
            quote: "The custom alerts feature has saved me on numerous occasions. Setting up notifications based on my criteria means I never miss out on potential opportunities. CTrack is a must-have for any investor.",
            author: "Jasmine T.",
            position: "Financial Consultant"
        }
    ]

    // navigate previous testimony
    const goToPrev = () => {
        setActiveIndex(prev => prev - 1 < 0 ? testimonials.length - 1 : prev - 1);
    };

    // navigate next testimony
    const goToNext = () => {
        setActiveIndex(prev => (prev + 1) % testimonials.length);
    };

    return (
        <div className="relative flex flex-col items-center justify-center mb-[180px]">
            <div className="w-full max-w-4xl text-center px-12 md:px-14">
                {/* Testimonial content */}
                <div className="mx-auto max-h-[250px] min-h-[250px] flex flex-col justify-between">
                    <p className="text-xl font-light italic mt-12 mb-3">{testimonials[activeIndex].quote}</p>
                    <p className="font-bold mt-6">{testimonials[activeIndex].author}</p>
                    <p className="text-sm mb-6">{testimonials[activeIndex].position}</p>
                    {/* Navigation dots */}
                    <div className="flex justify-center mt-4">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`h-2 w-2 rounded-full mx-1 ${activeIndex === index ? 'bg-black' : 'bg-gray-400'}`}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* Left navigation arrow */}
            <button
                onClick={goToPrev}
                aria-label="Previous testimonial"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 sm:p-4 lg:p-20"
            >
                <AiOutlineArrowLeft />
            </button>
            {/* Right navigation arrow */}
            <button
                onClick={goToNext}
                aria-label="Next testimonial"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 lg:p-20"
            >
                <AiOutlineArrowRight />
            </button>
        </div>


    );
};

export default Testimonial