import React from "react";
import { NavLink } from "react-router-dom";

export default function Winners({ data }) {
    return (
        <div className="max-w-xl w-full mx-auto px-8 py-6 rounded-md bg-white border border-gray-100 shadow-md">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold pb-6 text-violet-500">
                    Winners
                </h1>
                <p>
                    Change in price
                </p>
            </div>
            {
                
                data?.map((item, index) => {
                    return <div
                                className="w-full flex justify-between items-center py-2 px-4 rounded-sm border border-gray-100 bg-gray-50 my-2"
                                key={index}
                            >
                                <NavLink
                                    to={`/stock/${item.symbol}`} 
                                    className="text-lg font-semibold"
                                >
                                    { item.symbol }
                                </NavLink>

                                <p className="text-emerald-600 font-medium">
                                    { item.price_change_pct } %
                                </p>
                            </div>
                })
            }
        </div>
    );
}