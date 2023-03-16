import React, { useEffect, useState } from "react";
import LineChart from "../charts/LineChart";

const getPriceChange = (pct) => {
    if (String(pct).startsWith("-")) return <p className="text-red-500">{ pct + " %" }</p>
    return <p className="text-emerald-500">{ pct + " %" }</p>
}

export default function StockInfo({ stock, data, days }) {
    const [labels, setLabels] = useState();
    const [trackingData, setTrackingData] = useState();

    useEffect(() => {
        console.log(data)
        setLabels(data?.tracking_info.trackings.map(tracking => { return tracking.timing.slice(2, 10); }).reverse());
        setTrackingData(data?.tracking_info.trackings.map(tracking => { return tracking.last_price }).reverse());
    }, []);

    return(
        <div className="w-full flex items-center justify-between">
            <div className="max-w-md w-full">
                <div className="pb-4">
                    <h1 className="text-4xl text-emerald-500 font-extrabold uppercase pb-2">
                        { stock?.symbol } - <span className="uppercase text-3xl">{ stock?.exchange }</span>
                    </h1>
                    <h1 className="text-lg font-medium text-gray-400">
                        { stock?.name }
                    </h1>
                </div>
                <div className="font-medium">
                    <h1>
                        Price change:
                    </h1>
                    { getPriceChange(data?.tracking_info.trackings[0].price_change_pct) }
                </div>
            </div>
            <div className="max-w-2xl w-full">
                <LineChart 
                    dataLabel={"Price"} 
                    labels={labels} 
                    text={`Price change last ${days} days`} 
                    data={trackingData} 
                />
            </div>
        </div>
    );
}