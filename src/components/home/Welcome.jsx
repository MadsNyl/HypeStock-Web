import React from "react";
import { NavLink } from "react-router-dom";
import reddit from "../../assets/icons/reddit.png";


export default function Welcome() {

    const medias = [
        {
            title: "Reddit",
            img: reddit
        },
        {
            title: "Twitter",
            img: reddit
        },
        {
            title: "CNN",
            img: reddit
        },
        {
            title: "TWJ",
            img: reddit
        },
        {
            title: "Yahoo",
            img: reddit
        },
        {
            title: "CNBC",
            img: reddit
        },
        {
            title: "Times",
            img: reddit
        },
        {
            title: "Nasdaq",
            img: reddit
        },
        {
            title: "Nasdaq",
            img: reddit
        },
    ];

    return (
        <div className="bg-white rounded-br-full">
            <div className="md:flex md:items-baseline md:space-x-20 pt-12 md:pt-24 px-6 md:px-16 pb-20">
                <div className="w-full md:max-w-xl lg:max-w-3xl text-center md:text-start">
                    <h1 className="font-semibold text-3xl md:text-4xl lg:text-6xl pb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-400">
                        Gain insight into social media's opinions about the stock market
                    </h1>
                    <div className="pb-12">
                        <p className="text-sm md:text-md lg:text-lg md:max-w-lg lg:max-w-xl">
                            Get all the predictions of social media for every ticker from NASDAQ, NYSE and AMAX, formated into organized and well-informative data.
                        </p>
                    </div>
                    <NavLink
                        to={"/stock"} 
                        className="py-3 md:py-4 md:text-lg cursor-pointer rounded-lg bg-yellow-400 text-white transition duration-150 ease-in-out hover:opacity-75 px-24 md:px-32 font-medium"
                    >
                        Explore
                    </NavLink>
                </div>

                <div className="grid grid-cols-3 gap-4 md:gap-6 mt-16 md:mt-0">
                    {
                        medias.map((item, index) => {
                            return <Media key={index} item={item} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

const Media = ({ item }) => {
    return (
        <div className="rounded-md shadow-md border border-gray-200 bg-white py-2 px-2 md:px-4">
            <div className="flex items-center space-x-2 md:space-x-3">
                <img
                    className="w-6 h-6 md:w-8 md:h-8" 
                    src={item.img}
                />
                <h1 className="text-sm md:text-medium font-semibold">
                    { item.title }
                </h1>
            </div>
        </div>
    );
}