import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import getStatsBaseData from "../api/stats/statsBaseData";
import { getStatsTickersByDate, getStatsTickersByFilter, getStatsTickersByMedia } from "../api/stats/StatsTickers";
import StatsTickers from "../components/stats/StatsTickers";
import formatNumber from "../functions/FormatNumber";


const Stat = ({ text, data }) => {
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold text-emerald-500 pb-2 uppercase">
                { formatNumber(data) }
            </h1>
            <p className="text-gray-400 capitalize text-sm">
                { text }
            </p>
        </div>
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
                            <Stat text={"tickers"} data={count?.stockCount ? count.stockCount : 0}   />
                            <Stat text={"articles"} data={count?.articleCount ? count.articleCount : 0}  />
                            <Stat text={"reddit comments"} data={count?.commentCount ? count.commentCount : 0}  />
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
                <StatsTickers 
                    isLoading={isLoading}
                    media={media}
                    filter={filter}
                    tickers={tickers}
                    limit={limit}
                />
            </div>
        </>
    );
}