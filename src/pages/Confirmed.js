import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
const Confirmed = () => {
    return (
      <section className="bg-center bg-no-repeat bg-blend-multiply bg-background h-screen">
      <Navbar />
      <div className="px-4 mx-auto max-w-screen-xl text-center py-8 lg:py-48">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
          Kami bahala sa'yo!
        </h1>
        <h2 className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">
          Hintayin nalang ang "confirmation email" or "text message" mula sa amin. <br/><br/><h2 className="font-bold">Salamat sa paggamit ng Kitamo!</h2>
        </h2>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            to="/"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-gray-100 hover:bg-highlight hover:text-white focus:ring-4 focus:ring-gray-400"
          >
            Bumalik sa home page
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
    )
    
}

export default Confirmed;
