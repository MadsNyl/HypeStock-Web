import React from "react";
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
                                className="cursor-pointer max-w-sm w-full px-6 py-5 rounded-md border border-gray-200 transition duration-150 ease-in-out hover:bg-gray-100"
                                key={index}
                            >
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