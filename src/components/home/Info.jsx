import React from "react";
import correlation from "../../assets/icons/correlation.png";
import frequency from "../../assets/icons/frequency.png";
import insight from "../../assets/icons/insight.png";
import { NavLink } from "react-router-dom";

export default function Info() {

    const infoBoxes = [
        { 
            img: frequency, 
            title: "frequency", 
            description: "How often is this stock mentioned in different social medias? We provide you with data which portray the frequency of mentions and reactions such as upvotes." 
        },
        { 
            img: correlation, 
            title: "correlation", 
            description: "What is the correlation between frequency and price change? We provide you with statistics which give you knowledge aboute the correlation between several factors such as price, frequency and popularity." 
        },
    ];

    return(
        <div>
            <div className="pt-28 pb-32 space-y-16 md:space-y-0 md:flex md:items-stretch md:justify-center md:space-x-12">
                {
                    infoBoxes.map((item, index) => {
                        return <InfoBox key={index} item={item} />
                    })
                }
            </div>
            <div className="pb-32 px-12">
                <div className="bg-white px-20 py-10 rounded-md border border-gray-200 shadow-sm">
                    <div className="flex justify-between items-center">
                        <div className="max-w-md w-full">
                            <h1 className="text-3xl font-bold pb-6">
                                Stock Market Insights from Social Media and News
                            </h1>
                            <p className="leading-relaxed">
                                <span className="text-emerald-500 font-medium text-lg">HypeStock</span> is a comprehensive source of information for investors, gathering data from social media and newspapers to provide an in-depth look at the stock market. The platform aggregates and analyzes social media posts related to specific stocks, providing data that is displayed with a user-friendly interface. Additionally, the site displays the correlation between different factors such as price, volume traded, mentions from social media and more. This allows investors to make informed decisions based on a broad range of sources, helping them stay ahead of the curve in an ever-changing market.
                            </p>
                        </div>
                        <div className="mr-32 space-y-12">
                            <img 
                                className="w-64 h-64"
                                src={insight}
                            />
                            <div className="w-full h-2 bg-gradient-to-r from-sky-300 via-emerald-500 to-sky-300 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-32 flex justify-center">
                <div>
                    <NavLink
                        to={"/stock"} 
                        className="mt-20 lg:w-36 py-6 text-sm lg:text-xl cursor-pointer rounded-lg bg-emerald-500 text-white transition duration-150 ease-in-out hover:opacity-75 px-44 font-medium"
                    >
                        Start exploring
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

const InfoBox = ({ item }) => {
    return(
        <div className="mx-auto md:mx-0 rounded-md shadow-sm border bg-white border-gray-200 px-4 md:px-8 py-4 relative max-w-xs md:max-w-md w-full">
            <div className="absolute -top-10 md:-top-16 shadow-md left-1/2 transform -translate-x-1/2 bg-white w-24 h-24 md:w-32 md:h-32 border border-emerald-300 rounded-full flex items-center justify-center">
                <img 
                    className="w-8 h-8 md:w-12 md:h-12"
                    src={item.img}
                />
            </div>
            <div className="pt-10">
                <h1 className="capitalize font-medium pb-2 md:text-lg">
                    { item.title }
                </h1>
                <p className="text-sm md:text-md text-gray-500">
                    { item.description }
                </p>
            </div>
        </div>
    );
}