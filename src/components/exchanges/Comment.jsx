import React from "react";
import { NavLink } from "react-router-dom";
import FormatText from "../functions/FormatText";

export default function Comment({ item }) {
    return(
        <div
           className="h-52 px-6 py-4 rounded-md bg-white shadow-md border border-gray-100" 
        >
            <div className="flex items-center justify-between pb-5">
                <div className="flex items-center space-x-3">
                    <h1 className="font-semibold text-md">
                        {item.author}
                    </h1>
                    <p className="text-gray-400 text-sm">
                        23 min ago
                    </p>
                </div>
                <div>
                    <NavLink 
                        to={`/stock/${item.symbol}`}
                        className="text-violet-500 font-medium transition duration-150 ease-in-out hover:text-gray-300"
                    >
                        {item.symbol}
                    </NavLink>
                </div>
            </div>

            <div className="h-28 pb-5">
                <p>
                    {FormatText(item.body, 165)}
                </p>
            </div>

            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-violet-500">
                        {item.subreddit}
                    </h1>
                </div>
                <div className="flex items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    <p>
                        {item.likes ? item.likes : 0}
                    </p>
                </div>
                {/* <div className="">
                    <p>
                        <span className="text-emerald-600">
                            {item.positive_score.toFixed(3)}
                        </span>
                        /
                        <span className="text-red-600">
                            {item.negative_score.toFixed(3)}
                        </span>
                    </p>
                </div> */}
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </div>
            </div>
        </div>
    );
}