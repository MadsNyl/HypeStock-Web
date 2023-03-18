import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import FormatDate from "../functions/FormatDate";
import FormatText from "../functions/FormatText";
import outsideClick from "../functions/OutsideClick";


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

const Wrapper = ({ children, type, tickers, date, color, provider, url }) => {

    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);
    outsideClick(wrapperRef, setOpen)

    return (
        <div ref={wrapperRef} className="w-full bg-white rounded-lg border border-gray-200 py-3 px-4 relative">

            {
                !open
                    ? <></>
                    :
                    <div className="absolute top-0 -right-40 rounded-lg bg-white border border-gray-200 shadow-md py-2 px-2 z-10">
                        <a href={url} className="py-2 px-4 rounded-lg transition duration-150 ease-in-out hover:bg-gray-100 flex space-x-4 w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-emerald-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                            <h1 className="font-medium">
                                Read more
                            </h1>
                        </a>
                        <button className="py-2 px-4 rounded-lg transition duration-150 ease-in-out hover:bg-gray-100 flex space-x-4 w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-emerald-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                            </svg>

                            <h1 className="font-medium">
                                Tickers
                            </h1>
                        </button>
                    </div>
            }

            <div className="flex justify-between items-center pb-5">
                <div className={`px-3 py-1 rounded-xl bg-${color}-50 border border-${color}-200`}>
                    <h1 className={`capitalize text-sm text-${color}-500`}>
                        { type }
                    </h1>
                </div>
                <button
                    onClick={() => setOpen(!open)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </button>
            </div>

            { children }

            <div className="pb-4">
                <div className={`flex justify-center py-1 px-4 rounded-md bg-${color}-50 border border-${color}-200`}>
                    <h1 className={`text-${color}-500 capitalize`}>
                        { provider }
                    </h1>
                </div>
            </div>

            <div className="flex justify-between items-center border-t border-gray-200 pt-2">
                <div className="flex items-center space-x-1">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100">
                        <div className="w-3 h-3 rounded-full bg-emerald-200" />
                    </div>
                    <p className="text-xs text-gray-500 font-medium">
                        { tickers } tickers
                    </p>
                </div>
                <div className="flex items-center space-x-1 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>
                    <p className="text-xs">
                        { FormatDate(date) }
                    </p>
                </div>
            </div>
        </div>
    );
}

const Article = ({ article }) => {
    return (
        <Wrapper type={"article"} tickers={article.related_stocks.length} date={article.created_date} color={"sky"} provider={article.provider} url={article.url}>
            <div className="pb-4">
                <h1 className="font-medium pb-2">
                    { FormatText(article.title, 50) }
                </h1>
                <p className="text-sm text-gray-400">
                    { FormatText(article.body, 60) }
                </p>
            </div>
        </Wrapper>
    );
}

const Comment = ({ comment }) => {
    return (
        <Wrapper type={"reddit"} tickers={1} date={comment.created_date} color={"yellow"} provider={comment.subreddit} url={"https://reddit.com" + comment.permalink} >
            <div className="pb-4">
                <h1 className="font-medium pb-2">
                    { FormatText(comment.body, 100) }
                </h1>
            </div>
        </Wrapper>
    );
}

export default function Latest({ data }) {
    return (
        <div className="pb-12">
            <h1 className="pb-4 text-gray-400 uppercase text-xl font-bold">
                latest collected data from social media
            </h1>
            <div className="bg-gray-50 border border-gray-200 rounded-lg py-6 px-8">
                <div className="grid grid-cols-5 gap-6">
                    { 
                        data?.map((item, index) => {
                            return "provider" in item 
                                ? <Article article={item} key={index} />
                                : <Comment comment={item} key={index} />
                        })
                    }
                </div>
            </div>            
        </div>
    );
}