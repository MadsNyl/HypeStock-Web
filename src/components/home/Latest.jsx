import React from "react";
import { NavLink } from "react-router-dom";
import FormatDate from "../functions/FormatDate";
import FormatText from "../functions/FormatText";


const Stock = ({ stock }) => {
    return (
        <NavLink
            to={`/stock/${stock}`}
            className="rounded-md bg-white py-1 border border-gray-300 transition duration-150 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white"
        >
            <p className="text-xs text-center">
                { stock }
            </p>
        </NavLink>
    );
}

const Article = ({ article }) => {

    // const stock_count = article.related_stocks.length;
    // const stocks = article.related_stocks.slice(0, 4);

    return (
        <div className="w-full py-4 px-4 rounded-md bg-gray-50 border border-gray-200">
            <div className="flex items-center justify-between pb-6">
                <div>
                    <h1 className="pb-2">
                        { FormatText(article.title, 45) }
                    </h1>
                    <p className="text-xs text-emerald-500 uppercase pb-1">
                        { article.provider }
                    </p>
                    <p className="text-xs text-gray-400">
                        { FormatDate(article.created_date) }
                    </p>
                </div>
            </div>
            <div className="grid gap-2 grid-cols-6">
                {
                    article.related_stocks.map((stock, index) => {
                        return <Stock key={index} stock={stock} />
                    })
                }
            </div>
        </div>
    );
}

const Comment = ({ comment }) => {
    return (
        <div className="w-full py-4 px-4 rounded-md bg-gray-50 border border-gray-200">
            <div className="flex items-center justify-between pb-6">
                <div>
                    <h1 className="pb-2">
                        { FormatText(comment.body, 45) }
                    </h1>
                    <p className="text-xs text-emerald-500 uppercase pb-1">
                        { comment.subdreddit }
                    </p>
                    <p className="text-xs text-gray-400">
                        { FormatDate(comment.created_date) }
                    </p>
                </div>
            </div>
            <div>
                <NavLink
                    className="rounded-md bg-white py-1 border border-gray-300 transition duration-150 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white"
                >
                    <p>
                        { comment.symbol }
                    </p>
                </NavLink>
            </div>
        </div>
    );
}

export default function Latest({ articles, comments }) {
    return (
        <div className="pb-12">
            <div className="text-center pb-20">
                <h1 className="text-3xl font-bold uppercase">
                    Latest data from social media
                </h1>
            </div>
            <div className="flex justify-center space-x-36">
                <div className="py-4 px-6 max-w-lg w-full">
                    <div className="pb-4">
                        <h1 className="text-center uppercase font-bold text-xl">
                            Articles
                        </h1>
                    </div>
                    <div className="space-y-4">
                        {
                            articles?.map((article, index) => {
                                return <Article key={index} article={article} />
                            })
                        }
                    </div>
                </div>
                <div className="py-4 px-6 max-w-lg w-full">
                    <div className="pb-4">
                        <h1 className="text-center uppercase font-bold text-xl">
                            Reddit
                        </h1>
                    </div>
                    <div className="space-y-4">
                        {
                            comments?.map((comment, index) => {
                                return <Comment key={index} comment={comment} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}