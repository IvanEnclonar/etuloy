
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Services = () => {

  return (
    <div>
      <Navbar />
      <section className="bg-center bg-no-repeat bg-blend-multiply bg-background h-screen py-8">
          <div class="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">
          <a href="#" class="flex items-center mb-6 text-3xl text-white uppercase font-bold text-center">
              Kami bahala sa'yo!   
          </a>
          <div class="w-full max-h-fit bg-highlight_hover rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Pumili ng serbisyo na gusto mong gamitin
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required=""/>
                        </div>
                        <div class="ml-3 text-sm w-fit">
                          <label class="font-light text-white">Gumawa ng Facebook Marketplace page</label>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required=""/>
                        </div>
                        <div class="ml-3 text-sm w-fit">
                          <label class="font-light text-white">Ilista sa mga online na plataporma (Shopee, Lazada, etc.)</label>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required=""/>
                        </div>
                        <div class="ml-3 text-sm w-fit">
                          <label class="font-light text-white">Gumawa ng social media page at ilista ang produkto sa page</label>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required=""/>
                        </div>
                        <div class="ml-3 text-sm w-fit">
                          <label class="font-light text-white">Tumulong sa shipping ng produkto</label>
                        </div>
                    </div>
                    <div class="flex items-start">
                      <div class="text-sm w-fit mb">
                        <label class="font-semibold text-white">Comments</label>
                      </div>
                    </div>
                    <div class="flex items-start mt-0">
                      <div class="flex items-center">
                        <textarea id="comments" class="h-14 w-comments border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-highlight_hover resize-none" required=""></textarea>
                      </div>
                    </div>
                    <Link to="/">
                    <button type="submit" class="w-full text-white bg-highlight hover:bg-higlight focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm mt-4 px-5 py-2.5 text-center">I-submit</button>
                    </Link>
                </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
