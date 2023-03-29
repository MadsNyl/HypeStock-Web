import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import getStatsBaseData from "../api/stats/statsBaseData";
import { getStatsTickersByDate, getStatsTickersByFilter, getStatsTickersByMedia } from "../api/stats/StatsTickers";


const Stat = ({ text, data }) => {
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold text-emerald-500 pb-2">
                { data }
            </h1>
            <p className="text-gray-400 capitalize text-sm">
                { text }
            </p>
        </div>
    );
}

const Ticker = ({ ticker, total }) => {
    return (
        <NavLink 
            to={`/stock/${ticker.symbol}`}
            className="px-3 py-3 rounded-md border border-gray-200 bg-white flex items-center justify-between transition duration-150 ease-in-out hover:border-emerald-500"
        >
            <h1 className="font-medium">
                { ticker.symbol }
            </h1>

            <div className="text-center">
                <h1 className="text-sm text-gray-400 font-medium">
                    { ticker.count }
                </h1>
                <h1 className="text-sm text-gray-400 font-medium">
                    { (ticker.count * 100 / total).toFixed(2) } %
                </h1>
            </div>
        </NavLink>
    );
}

export default function Stats() {

    const [count, setCount] = useState();
    const [isLoading, setLoading] = useState();
    const [limit, setLimit] = useState(20);
    const [tickers, setTickers] = useState();
    const [media, setMedia] = useState("articles");
    const [filter, setFilter] = useState("mentions");
    const [duration, setDuration] = useState("7d");

    useEffect(() => {
        getStatsBaseData(setLoading, setCount, limit, setTickers);
    }, []);

    const FilterButton = ({ text }) => {
        return (
            <button
                onClick={() => getStatsTickersByMedia(setLoading, limit, text, filter, setMedia, setTickers, duration, setFilter) }
                disabled={media === text}
                className={(media === text ? "bg-black border-black text-white" : "border-gray-200 bg-gray-50") + " px-4 py-2 rounded-md border font-semibold uppercase text-sm"}
            >
                { text }
            </button>
        );
    }

    const SortButton = ({ text }) => {
        return (
            <button
                onClick={() => getStatsTickersByFilter(setLoading, limit, media, text, setFilter, setTickers, duration) }
                disabled={filter === text}
                className={(media === "articles" && text === "upvotes" ? "hidden" : "") + (filter === text ? " bg-black border-black text-white" : " border-gray-200 bg-gray-50") + " px-4 py-2 rounded-md border font-semibold uppercase text-sm"}
            >
                { text }
            </button>
        );
    }

    const DateButton = ({ text }) => {
        return (
            <button
                onClick={() => getStatsTickersByDate(setLoading, limit, media, filter, setTickers, setDuration, text) }
                disabled={duration === text}
                className={(duration === text ? "bg-black border-black text-white" : "border-gray-200 bg-gray-50") + " px-4 py-2 rounded-md border font-semibold uppercase text-sm"}
            >
                { text }
            </button>
        );
    }

    return (
        <>
            <div className="mt-8 px-12 flex justify-center space-x-10">
                <div className="space-y-8">
                    <div className="mt-12 max-w-md w-full bg-white border border-gray-200 px-10 py-4 rounded-md">
                        <div className="pb-10">
                            <h1 className="text-xl uppercase font-bold">
                                Total Collected data:
                            </h1>
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                            <Stat text={"tickers"} data={count?.stockCount}   />
                            <Stat text={"articles"} data={count?.articleCount}  />
                            <Stat text={"reddit comments"} data={count?.commentCount}  />
                        </div>
                    </div>
                    <div className="max-w-md w-full bg-white border border-gray-200 px-10 py-4 rounded-md">
                        <div className="space-y-6">
                            <div>
                                <h1 className="pb-3 text-lg font-medium">
                                    Filter by media
                                </h1>
                                <div className="grid grid-cols-3 gap-6">
                                    <FilterButton text={"articles"} />
                                    <FilterButton text={"reddit"} />
                                </div>
                            </div>
                            <div>
                                <h1 className="pb-3 text-lg font-medium">
                                    Sort by
                                </h1>
                                <div className="grid grid-cols-3 gap-6">
                                    <SortButton text={"mentions"} />
                                    <SortButton text={"upvotes"} />
                                </div>
                            </div>
                            <div>
                                <h1 className="pb-3 text-lg font-medium">
                                    Duration
                                </h1>
                                <div className="grid grid-cols-4 gap-4">
                                    <DateButton text={"24h"} />
                                    <DateButton text={"7d"} />
                                    <DateButton text={"30d"} />
                                    <DateButton text={"total"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-xl w-full">
                    <div className="text-center border-b border-b-gray-200 pb-5 text-3xl font-bold uppercase">
                        <h1>
                            tickers
                        </h1>
                    </div>
                    <div className="mt-6">
                            {
                                isLoading
                                    ? <></>
                                    : 
                                    <div>
                                        <div className="pb-6 space-y-2">
                                            <h1 className="capitalize text-xl font-semibold">
                                                { media } - { filter }
                                            </h1>
                                            <h1>
                                                Total count: <span className="text-emerald-500 font-semibold">{ tickers?.total }</span>
                                            </h1>
                                        </div>
                                        <div className="grid grid-cols-4 gap-x-4 gap-y-6">

                                                {
                                                    tickers?.tickers.map((item, index) => {
                                                        return <Ticker key={index} ticker={item} total={tickers?.total} />
                                                    })
                                                }
                                        </div>
                                    </div>
                            }
                    </div>
                </div>
            </div>
        </>
    );
}