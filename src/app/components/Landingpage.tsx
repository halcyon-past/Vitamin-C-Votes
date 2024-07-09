"use client";
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LandingPage = () => {

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-5xl font-bold text-orange-600 mb-4">Vitamin C Bangali Votes</h1>
        <p className="text-xl text-gray-700 max-w-2xl mb-8 mx-auto">
          Remember the fun we had in the first year with our Google Forms voting? 
          It’s our final year now, and everyone wanted to have that fun one last time. 
          Let's see how our opinions have changed over the years. Join us for one more round of voting!
          The Voting is completely Anonymous and Secure. Your Secrets are safe with you.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center items-center">
          <Link
            href="/api/auth/login"
            className="bg-orange-600 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-orange-700 transition-transform transform hover:scale-105"
          >
            Login to Vote Now
          </Link>
          <Link
            href="/results"
            className="bg-gray-200 text-orange-600 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-300 transition-transform transform hover:scale-105"
          >
            View Results
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
