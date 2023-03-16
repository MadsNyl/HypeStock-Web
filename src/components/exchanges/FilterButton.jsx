import React from "react";

export default function FilterButton({ sort, refreshSort, type }) {
    return (
        <button
            onClick={() => {
                refreshSort(type)
            }} 
            disabled={sort == type}
            className={(sort == type ? "bg-black border-black text-white" : "bg-gray-100 border-gray-200") + " w-32 capitalize font-medium  border py-2 rounded-md transition duration-150 ease-in-out hover:bg-black hover:border-black hover:text-white"}
        >
            {type}
        </button>
    );
}