import { NavLink } from "react-router-dom";
import formatNumber from "../../functions/FormatNumber";

export default function StatsTickers({ isLoading, media, filter, tickers, limit }) {
    return (
        <div className="max-w-xl w-full">
            <div className="text-center border-b border-b-gray-200 pb-5 text-3xl font-bold uppercase">
                <h1>
                    tickers
                </h1>
            </div>
            <div className="mt-6">
                    {
                        isLoading
                            ? <LoadingTickers length={limit} />
                            : 
                            <div>
                                <div className="pb-6 space-y-2">
                                    <h1 className="capitalize text-xl font-semibold">
                                        { media } - { filter }
                                    </h1>
                                    <h1>
                                        Total count: <span className="text-emerald-500 font-semibold">{ tickers?.total ? formatNumber(tickers.total) : 0 }</span>
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

const LoadingTickers = ({ length }) => {

    const Loading = () => {
        return (
            <div className="px-3 py-4 w-full rounded-md bg-gray-100 border border-gray-100 animate-pulse">
                <div className="bg-gray-50 py-4 rounded-md" />
            </div>
        );
    }
    return (
        <div>
            <div className="space-y-2 pb-4">
                <div className="px-3 py-2 w-44 rounded-md bg-gray-100 border border-gray-100 animate-pulse">
                    <div className="bg-gray-50 py-2 rounded-md" />
                </div>
                <div className="px-3 py-2 w-32 rounded-md bg-gray-100 border border-gray-100 animate-pulse">
                    <div className="bg-gray-50 py-2 rounded-md" />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-x-4 gap-y-6">
                {
                    Array(length).fill(null).map((item, index) => {
                        return <Loading key={index} />
                    })
                }
            </div>
        </div>
    );
}