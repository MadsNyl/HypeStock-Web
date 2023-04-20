import { useState } from "react";
import { API } from "../../shared";
import axios from "axios";
import SearchIcon from "../icons/Search";
import Spinner from "../icons/Spinner";
import PlusIcon from "../icons/Plus";
import BoltIcon from "../icons/Bolt";


const Result = ({ data, setTickers, tickers }) => {
    
    const addTicker = () => { 
        if (tickers.length < 2) {
            const newList = [...tickers];
            !newList.includes(data.symbol) && newList.push(data.symbol);
            setTickers(newList);
        } 
    }

    return (
        <button 
            onClick={addTicker}
            className="realtive px-2 py-1 rounded-md border border-gray-200 flex items-center justify-between transition duration-150 ease-in-out hover:bg-emerald-500 hover:text-white hover:border-emerald-500"
        >
            <h1 className="text-sm">
                { data.symbol }
            </h1>
            <PlusIcon style={"w-4 h-4"} />
        </button>
    );
}

const SearchBar = ({ comparisons, setComparisons, setComparisonsLoading }) => {

    const [isLoading, setLoading] = useState();
    const [results, setResults] = useState();
    const [tickers, setTickers] = useState([]);
    const [error, setError] = useState();

    const search = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        const query = e.target[0].value.replace("&", "%26");
        e.target[0].value = "";

        try {
            const res = await axios.get(API + `stock/search?stock=${query}&limit=12`)

            if (!res.data.stocks.length) setError(true);

            setResults(res.data.stocks);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    const compareTickers = async () => {
        setComparisonsLoading(true);

        try {
            const res = await axios.get(API + ``);
        } catch (e) {
            console.log(e);
        } finally {
            setComparisonsLoading(false);
        }
    }

    return (
        <div className="w-full">
            <div className="w-full flex justify-between pb-6">
                <div className="space-y-6">
                    <form 
                        onSubmit={e => {
                            search(e);
                        }}
                        className="flex justify-between w-full items-center bg-gray-100 rounded-lg border border-gray-200 px-2 py-1 space-x-3"
                    >
                        <input 
                            className="outline-none bg-gray-100 w-full"
                            type="text" 
                            placeholder="Search for a stock..."
                            required
                        />
                        <button className="flex justify-center items-center text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">
                            {
                                !isLoading
                                    ? <SearchIcon style={"w-5 h-5"} />
                                    : <Spinner style={"w-5 h-5 fill-emerald-500 text-gray-100 animate-spin"} />

                            }
                        </button>
                    </form>

                    <div className="space-y-2">
                        {
                            tickers.length
                                ?
                                <div className="w-full bg-gray-50 px-4 py-2 flex justify-between items-center border border-gray-900 rounded-md">
                                    <div>
                                        <h1>
                                            { tickers[0] }
                                        </h1>
                                    </div>
                                    <BoltIcon style={"w-6 h-6 text-yellow-400"} />
                                </div>
                                :
                                <div className="w-full bg-gray-50 px-4 py-2 flex justify-between items-center border-dashed border-2 border-gray-200 rounded-md">
                                    <div>
                                        <h1>
                                            Ticker 1
                                        </h1>
                                    </div>
                                    <BoltIcon style={"w-6 h-6 text-yellow-400"} />
                                </div>
                        }

                        {
                            tickers.length === 2
                                ?
                                <div className="w-full bg-gray-50 px-4 py-2 flex justify-between items-center border border-gray-900 rounded-md">
                                    <div>
                                        <h1>
                                            { tickers[1] }
                                        </h1>
                                    </div>
                                    <BoltIcon style={"w-6 h-6 text-yellow-400"} />
                                </div>
                                :
                                <div className="w-full bg-gray-50 px-4 py-2 flex justify-between items-center border-dashed border-2 border-gray-200 rounded-md">
                                    <div>
                                        <h1>
                                            Ticker 2
                                        </h1>
                                    </div>
                                    <BoltIcon style={"w-6 h-6 text-yellow-400"} />
                                </div>
                        }
                    </div>
                </div>

                <div className="max-w-lg w-full">
                {
                        !results
                            ? <></>
                            :
                            <div className="px-6 py-4 rounded-md border border-gray-200 grid grid-cols-4 gap-3">
                                {
                                    results.map((item, index) => {
                                        return <Result key={index} data={item} setTickers={setTickers} tickers={tickers} />
                                    })
                                }
                            </div>
                } 
                </div>
            </div>

            <button 
                onClick={compareTickers}
                disabled={tickers.length != 2}
                className={(tickers.length != 2 ? "opacity-60 cursor-not-allowed" : "transition duration-150 ease-in-out hover:opacity-60") + " max-w-xs w-full py-3 text-center font-semibold rounded-md bg-emerald-500 text-white"}
            >
                Compare
            </button>
        </div>
    );
}

export default function Compare() {

    const [comparisons, setComparisons] = useState();
    const [comparisonsLoading, setComparisonsLoading] = useState();

    return (
        <div className="max-w-3xl w-full">
            <div className="pb-8">
                <h1 className="border-b border-gray-200 uppercase text-3xl font-bold text-center pb-4">
                    Compare
                </h1>
            </div>
            <div className="pb-12 border-b border-gray-200">
                <SearchBar 
                    comparisons={comparisons} 
                    setComparisons={setComparisons}
                    setComparisonsLoading={setComparisonsLoading} 
                />
            </div>
        </div>
    );
}