import { useState } from "react";
import PageWrapper from "../components/wrappers/PageWrapper";
import Favorites from "../components/profile/Favorites";


const Star = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
    );
}

const Compare = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
    );
}

export default function Profile() {

    const [page, setPage] = useState("favorites");

    const navigations = [
        {
            name: "favorites",
            description: "Show your saved favorite tickers.",
            img: <Star />,
            isActive: true
        },
        {
            name: "compare",
            description: "Compare two tickers.",
            img: <Compare />,
            isActive: false
        }
    ];

    const ShowPage = () => {
        switch (page) {
            case "favorites": return <Favorites />        
            default: return <Favorites />
        }
    }

    return (
        <>
            <PageWrapper>
                <div className="flex justify-between">
                    <div className="max-w-sm w-full space-y-4 border border-gray-200 rounded-md px-4 py-6">
                        {
                            navigations.map((item, index) => {
                                return <Tab key={index} item={item} /> 
                            })
                        }
                    </div>
                    <ShowPage />
                </div>
            </PageWrapper>
        </>
    );
}

const Tab = ({ item }) => {
    return (
        <button className={(item.isActive ? "bg-gray-100" : "") + " w-full py-3 px-6 transition duration-150 ease-in-out hover:bg-gray-100 rounded-md flex space-x-6"}>
            <div>
                { item.img }
            </div>
            <div className="text-start">
                <h1 className="capitalize font-medium">
                    { item.name }
                </h1>
                <p className="text-sm text-gray-500">
                    { item.description }
                </p>
            </div>
        </button>
    );
}