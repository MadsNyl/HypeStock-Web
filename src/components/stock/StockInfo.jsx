import React, { useEffect, useState } from "react";
import getStockBasedata from "../../api/stock/StockBaseData";
import MultiLineChart from "../charts/MultiLineChart";
import FavoriteIcon from "../icons/Favorite";
import BoxDisplayWrapper from "../wrappers/BoxDisplayWrapper";
import DollarIcon from "../icons/Dollar";
import MegaphoneIcon from "../icons/Megaphone";
import BarChart from "../charts/BarChart";
import Snackbar from "../Snackbar";


const Overview = ({ title, text }) => {
    return (
        <div className="max-w-sm w-full">
            <h1 className="text-xl md:text-2xl font-semibold pb-2">
                { title }
            </h1>
            <p className="text-xs md:text-md text-gray-400">
                { text }
            </p>
        </div>
    );
}

const ChartInfo = ({ title, color }) => {
    return (
        <div className="flex items-center space-x-2">
            <div style={{background: color }} className="w-4 md:w-12 h-1 rounded-lg" />
            <h1 className="text-sm md:text-lg font-semibold">
                { title }
            </h1>
        </div>
    );
}

export default function StockInfo({ stock, data, days, setStock, setData, setLoading, setDays }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    useEffect(() => {
        const storage = localStorage.getItem("favorites");

        if (!storage) localStorage.setItem("favorites", JSON.stringify({ storage: [], size: 0 }));
        
        else {
            const favorites = JSON.parse(storage).storage;
            for (const fav of favorites) {
                if (fav === stock?.symbol) {
                    setIsFavorite(true);
                    break;
                }
            }
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setSnackbarMessage("");
        }, 5000);
    }, [snackbarMessage]);

    const toggleFavorite = () => {
        const storage = JSON.parse(localStorage.getItem("favorites"));

        if (!isFavorite) {
            if (storage.storage.length) {
                storage.storage.push(stock?.symbol);
                localStorage.setItem("favorites", JSON.stringify({ storage: storage.storage, size: storage.storage.length }));
            } else {
                localStorage.setItem("favorites", JSON.stringify({ storage: [stock?.symbol], size: 1 }));
            }
            setIsFavorite(true);
            setSnackbarMessage(`${stock.symbol} added as favorite.`);
        } else {
            const newFavorites = storage.storage;
            newFavorites.splice(newFavorites.indexOf(stock?.symbol), 1);
            localStorage.setItem("favorites", JSON.stringify({ storage: newFavorites, size: newFavorites.length }));
            setIsFavorite(false);
            setSnackbarMessage(`${stock.symbol} removed as favorite.`);
        }

    }

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

    const change = [
        {
            title: "Price change last 24h",
            data: data?.tracking_info.price_change_day,
            icon: <DollarIcon style={"w-6 h-6"} />
        },
        {
            title: `Price change last ${days} d`,
            data: data?.tracking_info.price_change_month,
            icon: <DollarIcon style={"w-6 h-6"} />
        },
        {
            title: "Mentions change last 24h",
            data: data?.tracking_info.mention_change_day,
            icon: <MegaphoneIcon style={"w-6 h-6"} />
        },
        {
            title: `Mentions change last ${days} d`,
            data: data?.tracking_info.mention_change_month,
            icon: <MegaphoneIcon style={"w-6 h-6"} />
        }
    ];

    const Stat = ({ item }) => {

        const Pct = ({ data }) => {
            return (
                <h1 className={(data.startsWith("-") ? "text-red-500" : "text-emerald-500") + " text-lg md:text-2xl font-bold"}>
                    { data }%
                </h1>
            );
        }

        return (
            <BoxDisplayWrapper>
                <div className="flex space-x-2 md:space-x-0 md:items-stretch md:justify-between pb-4">
                    <div className="p-1 rounded-md bg-emerald-200">
                        { item.icon }
                    </div>
                    <p className="text-xs md:text-sm font-medium">
                        { item.title }
                    </p>
                </div>
                <div className="flex justify-center">
                    <Pct data={item.data} />
                </div>
            </BoxDisplayWrapper>
        );
    }

    return(
        <div className="w-full relative">

            {
                snackbarMessage.length
                    ? <Snackbar message={snackbarMessage} />
                    : <></>
            }

            <div className="md:flex md:justify-between">
                <div className="w-full flex justify-between md:justify-start items-baseline space-x-6 md:space-x-12 pb-8 md:pb-12">
                    <div className="space-y-1 md:space-y-3">
                        <h1 className="text-2xl md:text-4xl text-emerald-500 font-extrabold uppercase pb-2">
                            { stock.symbol } - <span className="uppercase text-xl md:text-3xl">{ stock.exchange }</span>
                        </h1>
                        <h1 className="md:text-lg font-medium text-gray-400">
                            { stock.name }
                        </h1>
                    </div>
                    <button
                        onClick={toggleFavorite}
                    >
                        {
                            isFavorite
                                ? <FavoriteIcon style={"text-yellow-300 hover:text-gray-300 w-8 h-8 md:w-10 md:h-10 transition duration-150 ease-in-out"} />
                                : <FavoriteIcon style={"text-gray-300 hover:text-yellow-300 w-8 h-8 md:w-10 md:h-10 transition duration-150 ease-in-out"} />
                        }

                    </button>
                </div>

                <div className="flex items-center justify-center max-w-md w-full pb-10 md:pb-0">
                    <button
                        onClick={() => updateData(7)} 
                        className={(days == 7 ? "bg-black text-white" : "bg-gray-50 border-gray-200 transition duration-150 ease-in-out hover:bg-black hover:text-white") + " py-2 px-6 text-sm md:text-md rounded-l-lg border border-gray-200 font-medium"}
                    >
                        7 d
                    </button>
                    <button
                        onClick={() => updateData(14)} 
                        className={(days == 14 ? "bg-black text-white" : "bg-gray-50 border-gray-200 transition duration-150 ease-in-out hover:bg-black hover:text-white") + " py-2 px-6 text-sm md:text-md border-t border-b border-r border-gray-200 font-medium"}
                    >
                        14 d
                    </button>
                    <button
                        onClick={() => updateData(30)} 
                        className={(days == 30 ? "bg-black text-white" : "bg-gray-50 border-gray-200 transition duration-150 ease-in-out hover:bg-black hover:text-white") + " py-2 px-6 text-sm md:text-md border-t border-b border-gray-200 font-medium"}
                    >
                        30 d
                    </button>
                    <button
                        onClick={() => updateData(60)} 
                        className={(days == 60 ? "bg-black text-white" : "bg-gray-50 border-gray-200 transition duration-150 ease-in-out hover:bg-black hover:text-white") + " py-2 px-6 text-sm md:text-md rounded-r-lg border border-gray-200 font-medium"}
                    >
                        60 d
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pb-6">
                {
                    change.map((item, index) => {
                        return <Stat item={item} key={index} />
                    })
                }
            </div>
            <div className="md:flex md:justify-between md:space-x-4 space-y-4 md:space-y-0">
                <div className="w-full md:w-3/5">
                    <BoxDisplayWrapper>
                        <div className="flex justify-between px-2 md:px-8 pt-2 pb-8">
                            <Overview 
                                title={"Overview"}
                                text={"Chart overview for price and total number of mentions in social media."}
                            />
                            <div className="space-y-2 md:space-y-0 md:flex md:items-center md:space-x-8">
                                <ChartInfo 
                                    title={"Price"}
                                    color={"rgba(75, 192, 192, 0.2)"}
                                />
                                <ChartInfo 
                                    title={"Mentions"}
                                    color={"rgba(255, 159, 64, 0.2)"}
                                />
                            </div>
                        </div>
                        <MultiLineChart 
                            labels={data?.tracking_info.trackings.map(tracking => { return tracking.timing.slice(5, 10); })}
                            priceData={data?.tracking_info.trackings.map(tracking => { return tracking.last_price })}
                            mentionsData={data?.tracking_info.mentions.map(mention => { return mention.count })}
                        />
                    </BoxDisplayWrapper>
                </div>
                <div className="w-full md:w-2/5">
                    <BoxDisplayWrapper>
                        <div className="pt-2 px-2 md:px-8 pb-8 space-y-4 md:space-y-8">
                            <Overview 
                                title={"Overview"}
                                text={`Chart overview for total mentions in the different social medias the last ${days} days.`}
                            />
                            <div className="flex items-center space-x-8">
                                <ChartInfo 
                                    title={"Reddit"}
                                    color={"rgba(255, 159, 64, 0.2)"}
                                /> 
                                <ChartInfo 
                                    title={"Articles"}
                                    color={"rgba(75, 192, 192, 0.2)"}
                                />
                            </div>
                        </div>
                        <BarChart 
                            labels={["Reddit", "Articles"]}
                            reddit={data?.comment_count}
                            article={data?.article_count}
                        />
                    </BoxDisplayWrapper>
                </div>
            </div>
        </div>
    );
}