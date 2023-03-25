import React, { useEffect, useState } from "react";
import getStockBasedata from "../../api/stock/StockBaseData";
import LineChart from "../charts/LineChart";
import MultiLineChart from "../charts/MultiLineChart";
import PercentageIncrease from "../functions/PercentageIncrease";

const getChange24 = (pct) => {
    if (String(pct).startsWith("-")) return <p className="text-red-500">{ Number(pct).toFixed(2) + " %" }</p>
    return <p className="text-emerald-500">{ Number(pct).toFixed(3) + " %" }</p>
}

const getPriceChangeDays = (trackings) => {
    const pct = Number(PercentageIncrease(trackings[trackings.length - 1].last_price, trackings[0].last_price)).toFixed(2);

    if (String(pct).startsWith("-")) return <p className="text-red-500">{ pct + " %" }</p>
    return <p className="text-emerald-500">{ pct + " %" }</p>
}

const getMentionsChangeDays = (mentions) => {
    const pct = Number(PercentageIncrease(mentions[mentions.length - 1].count, mentions[0].count)).toFixed(2);

    if (String(pct).startsWith("-")) return <p className="text-red-500">{ pct + " %" }</p>
    return <p className="text-emerald-500">{ pct + " %" }</p>
}


export default function StockInfo({ stock, data, days, setStock, setData, setLoading, setDays }) {
    const [labels, setLabels] = useState();
    const [trackingData, setTrackingData] = useState();
    const [mentionsData, setMentionsData] = useState();

    useEffect(() => {
        setLabels(data?.tracking_info.trackings.map(tracking => { return tracking.timing.slice(2, 10); }).reverse());
        setTrackingData(data?.tracking_info.trackings.map(tracking => { return tracking.last_price }).reverse());
        setMentionsData(data?.tracking_info.mentions.map(mention => { return mention.count }).reverse());
    }, []);

    const updateData = (days) => {
        getStockBasedata(
            stock?.symbol,
            days,
            setStock,
            setData,
            setLoading
        )
        setDays(days);
    }

    return(
        <div className="w-full flex items-center justify-between">
            <div className="max-w-md w-full">
                <div className="pb-16">
                    <h1 className="text-4xl text-emerald-500 font-extrabold uppercase pb-2">
                        { stock?.symbol } - <span className="uppercase text-3xl">{ stock?.exchange }</span>
                    </h1>
                    <h1 className="text-lg font-medium text-gray-400">
                        { stock?.name }
                    </h1>
                </div>
                <div className="font-medium flex items-center space-x-12 pb-8">
                    <div className="text-center max-w-xs w-full">
                        <h1>
                            Price change last 24h:
                        </h1>
                        { getChange24(data?.tracking_info.trackings[0].price_change_pct) }
                    </div>
                    <div className="text-center max-w-xs w-full">
                        <h1>
                            Price change last { days }d:
                        </h1>
                        { getPriceChangeDays(data?.tracking_info.trackings) }
                    </div>
                </div>
                <div className="font-medium flex items-center space-x-12 pb-16">
                    <div className="text-center max-w-xs w-full">
                        <h1>
                            Mentions change last 24h:
                        </h1>
                        { getChange24(PercentageIncrease(data?.tracking_info.mentions[1].count, data?.tracking_info.mentions[0].count)) }
                    </div>
                    <div className="text-center max-w-xs w-full">
                        <h1>
                            Mentions change last { days }d:
                        </h1>
                        { getMentionsChangeDays(data?.tracking_info.mentions) }
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <button
                        onClick={() => updateData(7)} 
                        className={(days == 7 ? "bg-emerald-500 text-white" : "bg-gray-50 border-gray-200 transition duration-150 ease-in-out hover:bg-emerald-500 hover:text-white") + " py-2 px-6 rounded-l-lg border border-gray-200 bg-gray-50 font-medium"}
                    >
                        7 d
                    </button>
                    <button
                        onClick={() => updateData(14)} 
                        className={(days == 14 ? "bg-emerald-500 text-white" : "bg-gray-50 border-gray-200 transition duration-150 ease-in-out hover:bg-emerald-500 hover:text-white") + " py-2 px-6 border-t border-b border-r border-gray-200 bg-gray-50 font-medium"}
                    >
                        14 d
                    </button>
                    <button
                        onClick={() => updateData(30)} 
                        className={(days == 30 ? "bg-emerald-500 text-white" : "bg-gray-50 border-gray-200 transition duration-150 ease-in-out hover:bg-emerald-500 hover:text-white") + " py-2 px-6 border-t border-b border-gray-200 bg-gray-50 font-medium"}
                    >
                        30 d
                    </button>
                    <button
                        onClick={() => updateData(60)} 
                        className={(days == 60 ? "bg-emerald-500 text-white" : "bg-gray-50 border-gray-200 transition duration-150 ease-in-out hover:bg-emerald-500 hover:text-white") + " py-2 px-6 rounded-r-lg border border-gray-200 bg-gray-50 font-medium"}
                    >
                        60 d
                    </button>
                </div>
            </div>
            <div className="max-w-2xl w-full">
                {/* <LineChart 
                    dataLabel={"Price"} 
                    labels={labels} 
                    text={`Price change last ${days} days`} 
                    data={trackingData} 
                /> */}
                <MultiLineChart 
                    labels={labels}
                    text={`Price and mentions the last ${days} days`}
                    priceData={trackingData}
                    priceLabel="price"
                    mentionsData={mentionsData}
                    mentionsLabel="mentions"
                />
            </div>
        </div>
    );
}