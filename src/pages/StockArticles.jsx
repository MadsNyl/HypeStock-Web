import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import getStockArticles from "../api/articles/StockArticles";
import FormatDate from "../components/functions/FormatDate";
import FormatText from "../components/functions/FormatText";

export default function StockArticles({  }) {
    
    const [articles, setArticles] = useState();
    const [limit, setLimit] = useState(5);
    const [data, setData] = useState(); 
    const [count, setCount] = useState();
    const [isLoading, setLoading] = useState();
    const [page, setPage] = useState(1);

    const location = useLocation();
    const symbol = location.pathname.split("/")[3];
    const days = location.pathname.split("/")[4];
    let provider = location.pathname.split("/")[5];
    provider = provider.replace("%20", " ");
    
    useEffect(() => {
        getStockArticles(limit, setArticles, setData, setLoading, symbol, days, provider, setCount);
    }, []);

    return (
        <>
            <div className="mt-8 px-12 flex justify-center space-x-10">
                <div className="mt-12 space-y-12 max-w-lg w-full">
                    <div className="bg-white border border-gray-200 px-10 py-4 rounded-md">
                        <div className="flex justify-between">
                            <h1 className="text-4xl font-bold text-emerald-500 pb-20">
                                { symbol }
                            </h1>
                            <h1 className="text-3xl font-semibold text-gray-400 capitalize">
                                { provider }
                            </h1>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-center">
                                <h1 className="text-4xl font-semibold pb-2">
                                    { data?.total_count }
                                </h1>
                                <p className="text-gray-400 text-xl">
                                    # total hits
                                </p>
                            </div>
                            <div className="text-center">
                                <h1 className="text-4xl font-semibold pb-2">
                                    { data?.stock_count }
                                </h1>
                                <p className="text-gray-400 text-xl">
                                    # stock hits
                                </p>
                            </div>
                            <div className="text-center">
                                <h1 className="text-4xl font-semibold pb-2">
                                { ((data?.stock_count / data?.total_count) * 100).toFixed(2) + " %"  }
                                </h1>
                                <p className="text-gray-400 text-xl">
                                    % stock hits
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <div className="pb-2">
                            <h1 className="text-emerald-500">
                                Total pages: { Math.ceil(count / limit) }
                            </h1>
                        </div>          
                        <div className="flex items-center w-full justify-between">
                            <button className="py-2 px-10 flex justify-center items-center border border-gray-200 bg-gray-50 rounded-l-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                </svg>
                            </button>
                            <div className="py-2 flex justify-center items-center border-t border-b border-gray-200 bg-gray-50 w-full text-xl font-semibold">
                                { page }
                            </div>
                            <button className="py-2 px-10 flex justify-center items-center border border-gray-200 bg-gray-50 rounded-r-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="max-w-lg w-full">
                    <div className="text-center border-b border-b-gray-200 pb-5 text-3xl font-bold uppercase">
                        <h1>
                            articles <span className="text-lg text-gray-400 font-medium">({ count })</span>
                        </h1>
                    </div>
                    <div className="space-y-4 mt-6">
                        {
                            articles?.map((article, index) => {
                                return <Article article={article} key={index} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

const Article = ({ article }) => {
    return (
        <a
            href={article.url} 
            className="w-full cursor-pointer rounded-lg border border-gray-200 flex justify-between items-center group transition duration-150 ease-in-out hover:bg-gray-100"
        >
            <div className="flex items-center">
                <div className="px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-emerald-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                    </svg>
                </div>
                <div className="w-72 py-2 pl-3 border-l border-gray-200">
                    <p className="text-sm font-medium pb-1">
                        { FormatText(article.title, 75) }
                    </p>
                    <p className="text-gray-400 text-xs">
                        { FormatDate(article.created_date) }
                    </p>
                </div>
            </div>
            <div className="mr-6 hidden group-hover:block text-emerald-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
            </div>
        </a>
    );
}