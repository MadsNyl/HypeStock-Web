import React, { useState } from "react";
import { API } from "../../shared";
import reddit from "../../assets/icons/reddit.png";
import twitter from "../../assets/icons/twitter.png";
import axios from "axios";
import FilterButton from "./FilterButton";

export default function Filter({ exchange, setLoading, setComments, setError }) {

    const [sort, setSort] = useState("positive");
    const [media, setMedia] = useState(true);

    const refreshSort = (sortQuery) => {
        media 
            ? getComments(sortQuery, media) 
            : getTweets(sortQuery, media);
        
        setSort(sortQuery);
    }

    const refreshData = () => {
        const mediaQuery = !media;
        mediaQuery
            ? getComments(sort)
            : getTweets(sort);
        
        setMedia(!media);
    } 

    const getComments = async (sortQuery) => {
        setLoading(true);
        try {
            let res;

            switch (sortQuery) {
                case "positive":
                    res = await axios.get(API + `exchange/comments/positive?exchange=${exchange}&limit=6`);
                    break;
                
                case "likes":
                    res = await axios.get(API + `exchange/comments/likes?exchange=${exchange}&limit=6`);
                    break;

                case "negative":
                    res = await axios.get(API + `exchange/comments/negative?exchange=${exchange}&limit=6`);
                    break;
            }
            setComments(res.data[0]);
        } catch (e) {
            e && setError("An error occured. Refresh or try later.");
        } finally {
            setLoading(false);
        }
    }

    const getTweets = async (sortQuery) => {
        setLoading(true);
        try {
            let res;

            switch (sortQuery) {
                case "positive":
                    res = await axios.get(API + `exchange/tweets/positive?exchange=${exchange}&limit=6`);
                    break;
            
                case "likes":
                    res = await axios.get(API + `exchange/tweets/likes?exchange=${exchange}&limit=6`);
                    break;

                case "negative":
                    res = await axios.get(API + `exchange/tweets/negative?exchange=${exchange}&limit=6`);
                    break;
            }

            setComments(res.data[0]);
        } catch (e) {
            e && setError("An error occured. Refresh or try later.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="pt-8 pb-16 flex justify-between items-center">
            <div>
                <h1 className="pb-4 font-semibold text-xl">
                    Sort by filter:
                </h1>
                <div className="flex items-center space-x-6">
                    <FilterButton 
                        sort={sort}
                        refreshSort={refreshSort}
                        type={"positive"}
                    />
                    <FilterButton 
                        sort={sort}
                        refreshSort={refreshSort}
                        type={"negative"}
                    />
                    <FilterButton 
                        sort={sort}
                        refreshSort={refreshSort}
                        type={"likes"}
                    />
                </div>
            </div>

            <div>
                <h1 className="pb-4 font-semibold text-xl">
                    Sort by media:
                </h1>
                <div className="flex items-center space-x-6">
                    <button
                        onClick={refreshData}
                        disabled={media} 
                        className={(media ? "border-black" : "border-gray-200") + " flex items-center space-x-2 font-medium bg-white border  px-4 py-2 rounded-md transition duration-150 ease-in-out hover:border-black"}
                    >
                        <img 
                            className="w-6 h-6"
                            src={reddit}
                        />
                        <p>
                            Reddit
                        </p>
                    </button>
                    <button
                        onClick={refreshData}
                        disabled={!media} 
                        className={(!media ? "border-black" : "border-gray-200") + " flex items-center space-x-2 font-medium bg-white border  px-4 py-2 rounded-md transition duration-150 ease-in-out hover:border-black"}
                    >
                        <img 
                            className="w-6 h-6"
                            src={twitter}
                        />
                        <p>
                            Twitter
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
}