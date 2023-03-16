import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Comment from "../components/exchanges/Comment";
import Tweet from "../components/exchanges/Tweet";
import { API } from "../shared";
import CountInfo from "../components/exchanges/CountInfo";
import Filter from "../components/exchanges/Filter";

export default function Exchanges() {
    const [exchange, setExchange] = useState("nasdaq");
    const [isLoading, setLoading] = useState(false);
    const [isCountLoading, setCountLoading] = useState(false);
    const [stockCount, setStockCount] = useState(0);
    const [commentCount, setCommentCount] = useState(0);
    const [tweetCount, setTweetCount] = useState(0);
    const [comments, setComments] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        getData(exchange);
    }, []);

    const getData = async (exchangeQuery) => {
        setLoading(true);
        setCountLoading(true);
        try {
            const res = await axios.get(API + `exchange/data?exchange=${exchangeQuery}&limit=6`);
            setStockCount(res.data.stock_count);
            setCommentCount(res.data.comment_count);
            setTweetCount(res.data.tweet_count);
            setComments(res.data.comments);
        } catch (e) {
            e && setError("An error occured. Refresh or try later.");
        } finally {
            setCountLoading(false);
            setLoading(false);
        }
    }


    return (
        <>
            <div className="mt-20 px-8 pb-20">
                <div className="flex space-x-36 items-baseline pb-16 border-b border-b-gray-200">
                    <div>
                        <h1 className="text-4xl text-violet-500 font-extrabold uppercase pb-6">
                            {exchange}
                        </h1>
                        <select
                            className="block font-medium bg-gray-100 border border-gray-200 px-6 py-2 rounded-md shadow-sm"
                            defaultValue={"Exchange"}
                        >
                            <option>Exchange</option>
                        </select>
                    </div>
                    { isCountLoading
                        ? <></>
                        : <CountInfo stockCount={stockCount} commentCount={commentCount} tweetCount={tweetCount} />
                    }
                </div>

                <Filter 
                    setLoading={setLoading}
                    setComments={setComments}
                    exchange={exchange}
                    setError={setError}
                />

                {
                    !isLoading && comments
                    ? 
                    <div className="grid grid-cols-3 gap-10">
                        {comments.map((item, index) => {
                            return item.subreddit 
                                ? <Comment key={index} item={item} />
                                : <Tweet key={index} item={item} />
                        })}
                    </div>
                    :
                    <div className="w-full h-72 flex justify-center items-center">
                        <Spinner />
                    </div>
                }
            </div>
        </>
    );
}