import React from "react";
import { NavLink } from "react-router-dom";
import PercentageIncrease from "../functions/PercentageIncrease";

export default function ContentBox({ content, title, comparison }) {
    return (
        <div className="max-w-lg w-full">
            <div className="pb-2">
                <h1 className="font-semibold text-lg">
                    {title}
                </h1>
            </div>
            <div className="px-8 py-6 border border-gray-200 rounded-md bg-white">
                <div className="flex items-baseline justify-between">
                    <div className="space-y-2">
                        <div className="flex items-center space-x-4">
                            <NavLink
                                to={`/stock/${content?.symbol}`} 
                                className="font-extrabold text-2xl text-violet-500"
                            >
                                {content?.symbol}
                            </NavLink>
                            <h1 className="text-lg font-semibold">
                                {content?.exchange}
                            </h1>
                        </div>
                        <p className="text-gray-400">
                            {content?.name}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            <p className="font-medium">
                                {content?.likes}
                            </p>
                        </div>
                        <div className="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                            </svg>

                            <p className="font-medium">
                                {PercentageIncrease(
                                    comparison?.likes,
                                    content?.likes
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}