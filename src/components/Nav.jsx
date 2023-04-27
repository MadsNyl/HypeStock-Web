import React, { createContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import outsideClick from "./functions/OutsideClick";
import NavSearchBar from "./NavSearchBar";

const SearchIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
    );
}

const Trending = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>  
    );
}

const Exchange = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
    );
}

const Stats = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
    );
}

const Article = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
        </svg>
    );
}

const Reddit = () => {
    return (
        <svg version="1.1" className="w-6 h-6 text-emerald-500" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 98.098 98.097">
            <g>
                <g>
                    <path d="M98.098,48.141c0-5.988-4.873-10.862-10.861-10.862c-2.84,0-5.474,1.146-7.484,3.087c-7.403-4.9-17.43-8.024-28.53-8.421
                        l6.063-19.172l16.414,3.866c-0.004,0.081-0.024,0.156-0.024,0.237c0,4.898,3.983,8.883,8.886,8.883
                        c4.896,0,8.877-3.984,8.877-8.883c0-4.896-3.981-8.879-8.877-8.879c-3.761,0-6.965,2.354-8.26,5.658L56.609,9.492
                        c-0.77-0.188-1.56,0.259-1.799,1.021L48.047,31.89c-11.607,0.141-22.122,3.281-29.852,8.32c-1.999-1.843-4.604-2.932-7.34-2.932
                        C4.869,37.278,0,42.152,0,48.14c0,3.877,2.083,7.419,5.378,9.352c-0.207,1.147-0.346,2.309-0.346,3.49
                        C5.032,77.04,24.685,90.1,48.844,90.1c24.16,0,43.814-13.062,43.814-29.118c0-1.113-0.116-2.207-0.301-3.289
                        C95.875,55.82,98.098,52.205,98.098,48.141z M82.561,11.036c3.219,0,5.836,2.619,5.836,5.84c0,3.222-2.617,5.843-5.836,5.843
                        c-3.223,0-5.847-2.621-5.847-5.843C76.714,13.655,79.338,11.036,82.561,11.036z M3.041,48.141c0-4.312,3.505-7.821,7.814-7.821
                        c1.759,0,3.446,0.62,4.816,1.695c-4.542,3.504-7.84,7.729-9.467,12.381C4.25,52.945,3.041,50.643,3.041,48.141z M48.844,87.062
                        c-22.481,0-40.771-11.697-40.771-26.078c0-14.378,18.29-26.08,40.771-26.08c22.482,0,40.775,11.701,40.775,26.08
                        C89.619,75.363,71.326,87.062,48.844,87.062z M91.574,54.625c-1.576-4.677-4.836-8.929-9.351-12.46
                        c1.396-1.174,3.147-1.846,5.011-1.846c4.314,0,7.82,3.51,7.82,7.821C95.056,50.806,93.723,53.197,91.574,54.625z"/>
                    <path d="M40.625,55.597c0-3.564-2.898-6.466-6.462-6.466c-3.564,0-6.466,2.899-6.466,6.466c0,3.562,2.901,6.462,6.466,6.462
                        C37.727,62.059,40.625,59.16,40.625,55.597z"/>
                    <path d="M63.961,49.131c-3.562,0-6.462,2.899-6.462,6.466c0,3.562,2.897,6.462,6.462,6.462c3.562,0,6.461-2.897,6.461-6.462
                        C70.422,52.031,67.523,49.131,63.961,49.131z"/>
                    <path d="M62.582,72.611c-2.658,2.658-7.067,3.951-13.48,3.951c-0.018,0-0.033,0.01-0.054,0.01c-0.019,0-0.035-0.01-0.054-0.01
                        c-6.413,0-10.822-1.293-13.479-3.951c-0.594-0.594-1.557-0.594-2.15,0c-0.594,0.596-0.594,1.557-0.002,2.149
                        c3.258,3.259,8.37,4.841,15.631,4.841c0.019,0,0.035-0.011,0.054-0.011c0.021,0,0.036,0.011,0.054,0.011
                        c7.259,0,12.373-1.582,15.63-4.841c0.594-0.594,0.594-1.555,0-2.149C64.139,72.017,63.176,72.017,62.582,72.611z"/>
                </g>
            </g>
        </svg>
    );
}

export default function Nav({ children }) {

    const navigation = [
        { name: "home", path: "/", isActive: false, collapse: false },
        { name: "tickers", path: "", isActive: false, collapse: true, children: [
            { name: "search", path: "/stock", collapse: false, description: "Search for a ticker or company", img: <SearchIcon/> },
            { name: "trending", path: "/trending", collapse: false, description: "Get a look at the trending tickers", img: <Trending /> },
            { name: "stats", path: "/stats", collapse: false, description: "Sort tickers by stats", img: <Stats /> },
        ] },
        { name: "browse", path: "", isActive: false, collapse: true, children: [
            { name: "articles", path: "/articles", collapse: false, description: "See what the newspapers say", img: <Article /> },
            { name: "reddit", path: "/reddit", collapse: false, description: "See what the communities of Reddit say", img: <Reddit /> }
        ] },
        // { name: "stats", path: "/stats", isActive: false, collapse: false },
    ]

    return (
        <div className="bg-gray-50 font-sans overflow-x-hidden text-gray-900">
            <header className="flex bg-white shadow-sm justify-between items-center px-12 py-6 max-w-8xl">
                <div className="max-w-xs w-full">
                    <NavLink
                        to={"/"}
                        className="text-3xl font-bold text-emerald-500"
                    >
                        HypeStock
                    </NavLink>
                </div>

                <div className="flex items-center space-x-10">
                    <nav className="flex items-center space-x-6">
                        {
                            navigation.map((item, index) => {
                                return item.collapse ? <Collapse item={item} key={index} /> : <Tab item={item} key={index} /> 
                            })
                        }
                    </nav>
                    <div className="flex items-center space-x-6">
                        <NavSearchBar />
                        <NavLink
                            to={"/profile"}
                            className="text-gray-500 transition duration-150 ease-in-out hover:text-emerald-500"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </NavLink>
                    </div>
                </div>
            </header>

            <div className="max-w-8xl mx-auto min-h-screen">
                { children }
            </div>

            <div className="max-w-8xl mx-auto">
                <Footer />
            </div>
        </div>
    )
}

const Tab = ({ item }) => {
    return (
        <NavLink
            to={item.path}
            onClick={() => item.isActive = !item.isActive}
            className={(item.isActive ? "text-emerald-500" : "") + " hover:text-emerald-500 capitalize block font-medium"}

        >
            { item.name }
        </NavLink>
    );
}

const CollapseTab = ({ item, setOpen }) => {
    return (
        <NavLink
            onClick={() => {setOpen(false);}}
            to={item.path}
            className="py-2 px-4 rounded-lg transition duration-150 ease-in-out hover:bg-gray-100 flex space-x-4"
        >
            <div>
                { item.img }
            </div>
            <div>
                <h1 className="capitalize font-medium">
                    { item.name }
                </h1>
                <p className="text-sm text-gray-500">
                    { item.description }
                </p>
            </div>
        </NavLink>
    );
}

const Collapse = ({ item }) => {

    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);
    outsideClick(wrapperRef, setOpen);
    

    return (
        <div 
            className="relative"  
            ref={wrapperRef}
        >
            <button
                onClick={() => setOpen(!open)}
                className="hover:text-emerald-500 capitalize font-medium flex items-center space-x-1"
            >
                <p>{ item.name }</p>
                {
                    !open
                        ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                    
                }
            </button>
            {
                !open
                    ? <></>
                    : <div 
                            className="absolute top-10 right-0 rounded-lg bg-white border border-gray-200 shadow-md py-2 px-4 w-96 z-10"
                        >
                        <div className="space-y-2">
                            {
                                item.children.map((item, index) => {
                                    return <CollapseTab item={item} key={index} setOpen={setOpen} />
                                })
                            }
                        </div>
                    </div>
            }
        </div>
    );
}