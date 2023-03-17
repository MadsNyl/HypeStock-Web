import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

export default function Nav({ children }) {

    const [isActive, setActive] = useState(false);

    const navigation = [
        { name: "home", path: "/", collapse: false },
        { name: "tickers", path: "", collapse: true, children: [
            { name: "search", path: "/stock", collapse: false },
            { name: "trending", path: "/trending", collapse: false },
            { name: "exchanges", path: "/exchanges", collapse: false },
        ] },
        { name: "browse", path: "", collapse: true, children: [
            { name: "articles", path: "/articles", collapse: false },
            { name: "reddit", path: "/reddit", collapse: false }
        ] },
        { name: "stats", path: "/stats", collapse: false },
    ]

    return (
        <div className="bg-white font-sans overflow-x-hidden text-gray-900">
            <header className="flex justify-between items-center px-12 py-6 max-w-8xl">
                <NavLink
                    // onClick={() => { setActive(!isActive); }}
                    to={"/"}
                    className="text-3xl font-bold text-emerald-500"
                >
                    HypeStock
                </NavLink>

                <nav className="flex items-center space-x-6">
                    {
                        navigation.map((item, index) => {
                            return item.collapse ? <Collapse item={item} key={index} /> : <Tab item={item} key={index} /> 
                        })
                    }
                </nav>
            </header>

            <div className="max-w-7xl mx-auto min-h-screen">
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
            className="hover:text-emerald-500 capitalize block font-medium"
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
            className="py-2 px-4 rounded-lg transition duration-150 ease-in-out hover:bg-gray-100 block capitalize font-medium"
        >
            { item.name }
        </NavLink>
    );
}

const Collapse = ({ item }) => {

    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => {setOpen(!open);}}
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
                    : <div className="absolute top-8 right-0 rounded-lg bg-white border border-gray-200 shadow-md py-2 px-4">
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