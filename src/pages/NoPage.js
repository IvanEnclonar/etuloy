import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";


export default function NoPage() {
    return (
        <section className="bg-white">
            <Navbar />
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex items-center justify-center">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-highlight">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-highlight md:text-4xl">Something's missing.</p>
                    <p className="mb-4 text-lg font-light text-gray-500">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                    <Link to="/" className="inline-flex text-white bg-highlight hover:bg-higlight_hover focus:ring-4 focus:outline-none focus:ring-highlight font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Back to Homepage</Link>
                </div>   
            </div>
        </section>
    )
}
