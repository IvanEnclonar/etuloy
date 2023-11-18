import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mainImage from '../../assets/cover-image.jpg';
class Cover extends Component {
  render() {
    return (
      <section className="bg-center bg-no-repeat bg-blend-multiply bg-background h-screen">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-8 lg:py-48">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
          Ano ang Kitamo?
        </h1>
        <img src={mainImage} className="mb-4 h-56 w-full mx-auto"/>
        <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">
          Ang Kitamo ay isang AI chatbot na makakatulong sa iyo sa pagsimula ng isang negosyo.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            to="/plans"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-gray-100 hover:bg-highlight hover:text-white focus:ring-4 focus:ring-gray-400"
          >
            Simula na tayo!
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
}

export default Cover;
