import React from "react";
import { NavLink } from "react-router-dom";
import correlation from "../../assets/icons/correlation.png";
import frequency from "../../assets/icons/frequency.png";
import score from "../../assets/icons/score.png";

export default function Info() {

    const infoBoxes = [
        { img: score, title: "score", description: "Is this stock discussed in a positve or negative way? " },
        { img: frequency, title: "frequency", description: "How often is this stock discussed in a given time?" },
        { img: correlation, title: "correlation", description: "What is the correlation between frequency, score and price change?" },
    ];

    return(
        <div className="pt-6 pb-32 flex justify-center items-center space-x-8">
            {
                infoBoxes.map((item, index) => {
                    return <div
                                className="relative max-w-sm w-full px-6 py-4 rounded-sm border border-gray-100 shadow-md"
                                key={index}
                            >
                                
                                <NavLink
                                    to={"/about"} 
                                    className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-50 border border-gray-200 flex justify-center items-center font-medium transition ease-in-out duration-150 hover:bg-gray-900 hover:text-white"
                                >
                                    ?
                                </NavLink>

                                <div className="flex items-center space-x-6 pb-4">
                                    <img
                                        className="w-8 h-8" 
                                        src={item.img}
                                    />
                                    <h1 className="font-medium text-lg capitalize text-gray-900">
                                        {item.title}
                                    </h1>
                                </div>

                                <div>
                                    <p>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                })
            }
        </div>
    );
}