
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from "../components/Navbar";

const Plans = () => {

  return (
    <div>
      <Navbar />
      <section className="bg-center bg-no-repeat bg-blend-multiply bg-background h-screen py-8">
        <div className="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">
          <a href="#" className="flex items-center mb-6 text-3xl text-white uppercase font-bold text-center">
            Plans
          </a>

          <div id="free" className="w-full bg-highlight_hover rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-2xl font-semibold leading-tight tracking-tight text-white md:text-2xl">
                Free
              </h1>
              <h2 className="leading-tight tracking-tight text-gray-300">
                Direct access to a GPT-powered assistant ready to guide the user
              </h2>
              <Link to="/chat/Yjx94FfIVAQTM478DX53T3BlbkFJEgCScwdIkcgxbhUnHGG5">
                <button type="submit" className="mt-4 w-full text-white bg-highlight hover:bg-higlight focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Select Free Plan</button>
              </Link>
            </div>
          </div>

          <div id="premium" className="w-full bg-highlight_hover rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 mt-4">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-2xl font-semibold leading-tight tracking-tight text-white md:text-2xl">
                Premium
              </h1>
              <h2 className="leading-tight tracking-tight text-gray-300">
                Avail of our premium services and get access to a human assistant ready to guide you.
              </h2>
              <Link to="/signup">
                <button type="submit" className="mt-4 w-full text-white bg-highlight hover:bg-higlight focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Kami Bahala Sayo!</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
