import React from "react";
import { NavLink } from "react-router-dom";


export default function Welcome() {
    return (
        <div className="flex justify-center mt-24 pb-32">
            <div className="max-w-xs md:max-w-xl lg:max-w-5xl text-center">
                <h1 className="font-semibold text-3xl md:text-4xl lg:text-6xl leading-tight pb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-400">
                    Easily gain insight into the hottest stocks from social media
                </h1>
                <div className="flex justify-center pb-12">
                    <p className="text-sm md:text-md lg:text-lg md:max-w-lg lg:max-w-xl text-center">
                        Get all the predictions of the community of Reddit and Twitter, formated into organized and well-informative data 
                    </p>
                </div>
                <div className="flex justify-center items-center space-x-6 lg:space-x-12 font-medium">
                    <NavLink
                        to={"/about"} 
                        className="w-28 md:w-32 lg:w-36 py-3 text-sm lg:text-lg cursor-pointer rounded-lg border border-gray-900 bg-white transition duration-150 ease-in-out hover:opacity-75"
                    >
                        <p>
                            How it works
                        </p>
                    </NavLink>
                    <NavLink
                        to={"/stock"} 
                        className="w-28 lg:w-36 py-3 text-sm lg:text-lg cursor-pointer rounded-lg border border-emerald-500 bg-emerald-500 text-white transition duration-150 ease-in-out hover:opacity-75">
                        <p>
                            Explore
                        </p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}