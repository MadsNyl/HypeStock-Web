import axios from "axios";
import { useState } from "react";
import searchRedditByStock from "../../api/reddit/RedditSearchByStock";
import sortByRedditFilter from "../../api/reddit/RedditSortByFilter";
import sortBySubreddit from "../../api/reddit/RedditSortBySubreddit";
import { API } from "../../shared";


export default function RedditFilter({ subreddits, setLoading, limit, setComments }) {

    const [choice, setChoice] = useState("all");
    const [sort, setSort] = useState("latest");

    const Subreddit = ({ item }) => {
        return (
            <option 
                className="capitalize bg-gray-50"
                value={item}
            >
                { item }
            </option>
        );
    }
    
    const SubredditFilter = ({ subreddits }) => {
        return (
            <div>
                <Label text={"Select a subreddit:"}/> 
                <select 
                    value={choice}
                    onChange={(e) => sortBySubreddit(
                        e.target.value,
                        setLoading,
                        sort,
                        limit,
                        setComments,
                        setChoice
                    )}
                    className="bg-white focus:border-gray-200 py-2 px-4 rounded-md border border-gray-200 capitalize text-sm font-medium"
                >
                    {
                        subreddits?.map((item, index) => {
                            return <Subreddit key={index} item={item} />
                        })
                    }
                </select>
            </div>
        );
    }
    
    const Filters = () => {
        return (
            <div>
                <Label text={"Sort by:"}/>
                <div className="inline-flex rounded-md">
                    <button
                        disabled={sort === "latest"}
                        onClick={() => sortByRedditFilter(
                            setLoading,
                            choice,
                            limit,
                            "latest",
                            setComments,
                            setSort
                        )} 
                        className={(sort === "latest" ? "bg-gray-100" : "bg-white") + " px-4 py-2 text-sm font-medium border border-gray-200 rounded-l-md hover:bg-gray-100"}
                    >
                        Latest
                    </button>
                    <button
                        disabled={sort === "upvotes"}
                        onClick={() => sortByRedditFilter(
                            setLoading,
                            choice,
                            limit,
                            "upvotes",
                            setComments,
                            setSort
                        )} 
                        className={(sort === "upvotes" ? "bg-gray-100" : "bg-white") + " px-4 py-2 text-sm font-medium border border-gray-200 hover:bg-gray-100"}
                    >
                        Upvotes
                    </button>
                    <button
                        disabled={sort === "downvotes"}
                        onClick={() => sortByRedditFilter(
                            setLoading,
                            choice,
                            limit,
                            "downvotes",
                            setComments,
                            setSort
                        )} 
                        className={(sort === "downvotes" ? "bg-gray-100" : "bg-white") + " px-4 py-2 text-sm font-medium border border-gray-200 rounded-r-md hover:bg-gray-100"}
                    >
                        Downvotes
                    </button>
                </div>
            </div>
        );
    }
    
    const Search = () => {
        return ( 
            <form 
                className="max-w-md w-full mt-4"
                onSubmit={(e) => searchRedditByStock(
                    e,
                    setLoading,
                    limit,
                    setComments,
                    setChoice,
                    setSort
                )}
            >   
                <label className="mb-2 text-sm font-medium sr-only">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input 
                        type="search" 
                        className="focus:outline-none block w-full p-4 pl-10 text-sm border border-gray-200 rounded-lg bg-white"
                        placeholder="Search for stock..." 
                        required />
                    <button type="submit" className="absolute right-2.5 bottom-2.5 bg-white border border-gray-200 hover:bg-gray-200 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                </div>
            </form>
        );
    }
    
    const Label = ({ text }) => {
        return (
            <label className="block pb-2 font-medium">
                { text }
            </label>
        );
    }

    return (
        <div className="flex justify-between items-center pb-16 px-8">
            <Search />
            <div className="flex items-center space-x-20">
                <Filters  setLoading={setLoading} /> 
                <SubredditFilter subreddits={subreddits} />
            </div>
        </div>
    );

}