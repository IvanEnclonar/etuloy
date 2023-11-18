
import React, { useState } from 'react';
import Navbar from "../components/Navbar";

const Plans = () => {

  return (
    <div>
      <Navbar />
      <section className="bg-center bg-no-repeat bg-blend-multiply bg-background h-screen py-8">
          <div class="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">
          <a href="#" class="flex items-center mb-6 text-3xl text-white uppercase font-bold text-center">
              Mga plano
          </a>
          <div class="w-full bg-highlight_hover rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-3xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Free
                </h1>
                <h2>
                  test
                </h2>
                <button type="submit" class="w-full text-white bg-highlight hover:bg-higlight focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
