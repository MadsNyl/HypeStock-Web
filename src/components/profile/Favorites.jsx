import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../shared";
import MultiLineChart from "../charts/MultiLineChart";
import { NavLink } from "react-router-dom";
import ArrowTopRightBox from "../icons/ArrowTopRightBox";
import Plus from "../icons/Plus";
import BoxDisplayWrapper from "../wrappers/BoxDisplayWrapper";

export default function Favorites() {

    const [tickers, setTickers] = useState();

    useEffect(() => {

        const getFavorites = async () => {

            const favorites = JSON.parse(localStorage.getItem("favorites"));

            if (!favorites || !favorites.storage.length) return;

            try {
                const res = await axios.get(API + `stock/stocks?stocks=${favorites.storage.join(",")}`);

                setTickers(res.data.stocks);
            } catch (e) {
                console.log(e);
            }     
        }
        getFavorites();
    }, []);

    return (
        <div className="max-w-3xl w-full">
            <div className="pb-8">
                <h1 className="border-b border-gray-200 uppercase text-3xl font-bold text-center pb-4">
                    Favorites
                </h1>
            </div>
            <div className="pb-8">
                <h1 className="text-2xl font-bold pb-4">
                    You have { tickers ? tickers.length : 0 } of 5 favorites
                </h1>
                {
                    tickers?.length === 5
                        ? <></>
                        : 
                        <NavLink 
                            to={"/stock"}
                            className="bg-gray-50 inline-block px-4 py-1 border border-gray-200 rounded-md transition duration-150 ease-in-out hover:bg-emerald-300 hover:text-emerald-800 hover:border-emerald-300"
                        >
                            <Plus style={"w-5 h-5"}/>
                        </NavLink>
                }
            </div>
            <div className="grid grid-cols-1 gap-6">
                {
                    tickers?.map((item, index) => {
                        return <Ticker key={index} ticker={item} />
                    })
                }
            </div>
        </div>
    );
}

const Ticker = ({ ticker }) => {
    return (
        <BoxDisplayWrapper>
            <div className="pb-8 flex justify-between">
                <div className="flex space-x-10">
                    <div>
                        <h1 className="text-xl font-medium">
                            { ticker.symbol }
                        </h1>
                        <p className="text-gray-400">
                            { ticker.exchange }
                        </p>
                    </div>
                    <h1 className="max-w-xs w-full text-center text-sm text-gray-400">
                        { ticker.name }
                    </h1>
                </div>
                <NavLink 
                    to={`/stock/${ticker.symbol}`}
                    className={""}
                >
                    <ArrowTopRightBox style={"w-6 h-6 transition duration-150 ease-in-out hover:text-emerald-500"} />
                </NavLink>
            </div>
            <div className="w-full">
                <MultiLineChart 
                 labels={ticker.trackings.map(tracking => { return tracking.timing.slice(2, 10); })}
                 text="Price and mentions the last 30 days"
                 priceData={ticker.trackings.map(tracking => { return tracking.last_price; })}
                 priceLabel="price"
                 mentionsData={ticker.mentions.map(mention => { return mention.count; })}
                 mentionsLabel="mentions"
                />
            </div>
        </BoxDisplayWrapper>
    );
}