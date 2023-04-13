import { useState } from "react";
import PageWrapper from "../components/wrappers/PageWrapper";
import Favorites from "../components/profile/Favorites";
import Compare from "../components/profile/Compare";
import Star from "../components/icons/Star";
import Link from "../components/icons/Link";

export default function Profile() {

    const [page, setPage] = useState("favorites");

    const navigations = [
        {
            name: "favorites",
            description: "Show your saved favorite tickers.",
            img: <Star style={"w-6 h-6 text-emerald-500"} />
        },
        {
            name: "compare",
            description: "Compare two tickers.",
            img: <Link style={"w-6 h-6 text-emerald-500"} />
        }
    ];

    const ShowPage = () => {
        switch (page) {
            case "favorites": return <Favorites />  
            case "compare": return <Compare />      
            default: return <Favorites />
        }
    }

    return (
        <>
            <PageWrapper>
                <div className="flex justify-between relative">
                    <div className="fixed bg-white max-w-sm w-full space-y-4 border border-gray-200 rounded-md px-4 py-6">
                        {
                            navigations.map((item, index) => {
                                return <Tab key={index} item={item} setPage={setPage} page={page} /> 
                            })
                        }
                    </div>
                    <div className="max-w-sm w-full" />
                    <ShowPage />
                </div>
            </PageWrapper>
        </>
    );
}

const Tab = ({ item, setPage, page }) => {

    return (
        <button
            disabled={page == item.name}
            onClick={() => setPage(item.name)} 
            className={(page == item.name ? "bg-gray-100" : "") + " w-full py-3 px-6 transition duration-150 ease-in-out hover:bg-gray-100 rounded-md flex space-x-6"}
        >
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