
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Signup = () => {

  return (
    <div>
      <Navbar />
      <section className="bg-center bg-no-repeat bg-blend-multiply bg-background h-fill py-8">
          <div class="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">
          <a href="#" class="flex items-center mb-6 text-3xl text-white uppercase font-bold text-center">
              Kami bahala sa'yo!   
          </a>
          <div class="w-full max-h-fit bg-highlight_hover rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Gumawa muna ng account
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="kitamo@email.com" required=""/>
                    </div>
                    <div>
                        <label for="cellphone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cellphone Number</label>
                        <input type="text" name="cellphone-number" id="cellphone-number" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="0912 345 6789" required=""/>
                    </div>
                    <div>
                      <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input type="text" name="address" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Address" required=""/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""/>
                    </div>
                    <div>
                        <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ulitin ang password</label>
                        <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required=""/>
                        </div>
                        <div class="ml-3 text-sm w-fit">
                          <label for="terms" class="font-light text-white">Na-verify ko na tama ang impormasyon na inilagay ko.</label>
                        </div>
                    </div>
                    <Link to="/">
                    <button type="submit" class="w-full text-white bg-highlight hover:bg-higlight focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm mt-4 px-5 py-2.5 text-center">Gumawa ng account</button>
                    </Link>
                    <p class="text-sm font-light text-white">
                        May account ka na? <a href="#" class="font-medium text-primary-600 hover:underline">Login dito</a>
                    </p>
                </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
