import axios from "axios";
import React, { useEffect, useState } from "react";
import DateButton from "../components/stats/DateButton";
import { API } from "../shared";
import Spinner from "../components/Spinner";
import Content from "../components/stats/Content";

export default function Stats() {

    const [data, setData] = useState();
    const [content, setContent] = useState();
    const [days, setDays] = useState(7);
    const [isLoading, setLoading] = useState();
    const [isContentLoading, setContentLoading] = useState();
    const [error, setError] = useState();
    const [dateOption, setDateOption] = useState("last week");
    

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            setContentLoading(true);
            try {
                const res = await axios.get(API + `stats?days=${days}`);
                setData({
                    stocks_count: res.data.stocks_count,
                    comments_count: res.data.comments_count,
                    tweets_count: res.data.tweets_count,
                    subreddits_count: res.data.subreddits_count,
                    users_count: res.data.users_count
                });
                setContent({
                    reddit_stock_likes: res.data.top_liked_reddit_stock,
                    reddit_stock_likes_comparison: res.data.top_liked_reddit_comparison,
                    twitter_stock_likes: res.data.top_liked_twitter_stock
                });
            } catch (e) {
                e && setError("An error occured. Refresh or try later.");
            } finally {
                setLoading(false);
                setContentLoading(false);
            }
        }

        getData();
    }, []);

    const refreshDate = async (sort) => {
        setDateOption(sort);
    }

    return (
        <div className="mt-20 px-8 pb-20">
            {
                isLoading
                    ? <></>
                    :
                    <div className="flex items-center space-x-20 pb-12 border-b border-b-gray-200">
                        <div className="text-center space-y-4">
                            <h1 className="font-extrabold text-2xl text-violet-500">
                                {data?.stocks_count}
                            </h1>
                            <h1 className="text-gray-500 font-semibold">
                                Number of Stocks
                            </h1>
                        </div>
                        <div className="text-center space-y-4">
                            <h1 className="font-extrabold text-2xl text-violet-500">
                                {data?.comments_count}
                            </h1>
                            <h1 className="text-gray-500 font-semibold">
                                Number of Reddit comments
                            </h1>
                        </div>
                        <div className="text-center space-y-4">
                            <h1 className="font-extrabold text-2xl text-violet-500">
                                {data?.tweets_count}
                            </h1>
                            <h1 className="text-gray-500 font-semibold">
                                Number of Tweets
                            </h1>
                        </div>
                        <div className="text-center space-y-4">
                            <h1 className="font-extrabold text-2xl text-violet-500">
                                {data?.subreddits_count}
                            </h1>
                            <h1 className="text-gray-500 font-semibold">
                                Number of Subreddits
                            </h1>
                        </div>
                        <div className="text-center space-y-4">
                            <h1 className="font-extrabold text-2xl text-violet-500">
                                {data?.users_count}
                            </h1>
                            <h1 className="text-gray-500 font-semibold">
                                Number of Twitter users
                            </h1>
                        </div>
                    </div>
            }

            <div className="mt-16">
                <div className="pb-16 flex justify-center items-center space-x-6">
                    <DateButton 
                        sort={dateOption}
                        type={"now"}
                        refreshDate={refreshDate}
                    />
                    <DateButton 
                        sort={dateOption}
                        type={"last week"}
                        refreshDate={refreshDate}
                    />
                    <DateButton 
                        sort={dateOption}
                        type={"last month"}
                        refreshDate={refreshDate}
                    />
                </div>

                <div className="flex justify-center pb-20">
                    <h1 className="font-extrabold uppercase text-3xl">
                        {dateOption}
                    </h1>
                </div>

                {
                    isContentLoading
                        ? <div className="h-screen flex justify-center items-center"><Spinner/></div>
                        : <Content content={content} />
                }   
            </div>
        </div>
    );
}