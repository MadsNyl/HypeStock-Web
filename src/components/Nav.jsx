import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

export default function Nav({ children }) {

    const [isActive, setActive] = useState(false);

    const navigation = [
        { name: "home", path: "/" },
        { name: "search", path: "/stock" },
        { name: "articles", path: "/articles" },
        { name: "reddit", path: "/reddit" },
        { name: "exchanges", path: "/exchanges" },
        { name: "users", path: "/users" },
        { name: "stats", path: "/stats" },
    ]

    return (
        <div className="bg-white font-sans overflow-x-hidden text-gray-900">
            <header className="flex justify-between items-center px-12 py-6 max-w-8xl">
                <NavLink
                    // onClick={() => { setActive(!isActive); }}
                    to={"/"}
                    className="text-2xl font-bold text-emerald-500"
                >
                    HypeStock
                </NavLink>

                <nav className="flex items-center space-x-8">
                    {
                        navigation.map((item, index) => {
                            return <NavLink
                                key={index}
                                to={item.path}
                                className="hover:text-emerald-500 uppercase text-xs"
                            >
                                { item.name }
                            </NavLink>
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