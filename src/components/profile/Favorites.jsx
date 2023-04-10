import { useContext, useEffect, useState } from "react";
import { FavoriteContext } from "../Nav";
import axios from "axios";
import { API } from "../../shared";

export default function Favorites() {

    const [favorites, setFavorites] = useContext(FavoriteContext);
    const [tickers, setTickers] = useState();

    useEffect(() => {

        const getFavorites = async () => {
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
            <div className="grid grid-cols-2 gap-6">
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
        <div className="bg-white border border-gray-200 rounded-md px-6 py-4">
            { ticker.symbol }
        </div>
    );
}