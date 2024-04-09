import React from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {

// Form endpoint
const formSpreeUrl = 'https://formspree.io/f/xrgnoqgb'
  return (
    <div id="contact" className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-center mb-10">Contact Us</h1>

      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
        <p className="mb-4">Have a question or need assistance? Fill out the form below.</p>

        <form action={formSpreeUrl} method="POST" className="flex flex-col space-y-4">
          <label htmlFor="name" className="font-medium">Name</label>
          <input type="text" id="name" name="name" required className="p-2 border border-gray-300 rounded" />

          <label htmlFor="email" className="font-medium">Email</label>
          <input type="email" id="email" name="_replyto" required className="p-2 border border-gray-300 rounded" />

          <label htmlFor="message" className="font-medium">Message</label>
          <textarea id="message" name="message" required className="p-2 border border-gray-300 rounded" rows="4"></textarea>

          <div className="flex items-center">
            <input type="checkbox" id="terms" name="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm">I agree to the <Link className="hover:underline" to="/terms">Terms</Link></label>
          </div>

          <button type="submit" className="py-2 px-4 bg-black text-white rounded hover:bg-gray-700">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact