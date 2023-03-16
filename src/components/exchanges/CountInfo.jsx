import React from "react";

export default function CountInfo({ stockCount, commentCount, tweetCount }) {
    return (
        <div className="flex items-center space-x-20">
            <div className="text-center space-y-4">
                <h1 className="font-extrabold text-2xl text-violet-500">
                    {stockCount}
                </h1>
                <h1 className="text-gray-500 font-semibold">
                    Number of stocks
                </h1>
            </div>
            <div className="text-center space-y-4">
                <h1 className="font-extrabold text-2xl text-violet-500">
                    {commentCount}
                </h1>
                <h1 className="text-gray-500 font-semibold">
                    Number of Reddit comments
                </h1>
            </div>
            <div className="text-center space-y-4">
                <h1 className="font-extrabold text-2xl text-violet-500">
                    {tweetCount}
                </h1>
                <h1 className="text-gray-500 font-semibold">
                    Number of Tweets
                </h1>
            </div>
        </div>
    );
}