import axios from "axios";
import { useState } from "react";
import { API } from "../../shared";

export default function Providers({ providers, setLoading, limit, setArticles }) {

    const [isActive, setActive] = useState("all");
    const [isFilter, setFilter] = useState("latest");

    const filters = [
        "latest",
        "tickers"
    ]

    const getArticlesByProvider = async (provider) => {
        setLoading(true);
        try {
            let res;
            if (provider === "all") res = await axios.get(API + `articles/base_data?limit=${limit}`);
            else res = await axios.get(API + `articles/by_provider?provider=${provider}&limit=${limit}`);

            setArticles(res.data.articles);
            setActive(provider);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    const getArticlesByOrder = async (order) => {
        setLoading(true);
        try {
            let res;
            
            switch (order) {
                case "latest":
                    if (isActive === "all") res = await axios.get(API + `articles/latest?limit=${limit}`);
                    else res = await axios.get(API + `articles/by_provider?provider=${isActive}&limit=${limit}`);
                    break;
                case "tickers":
                    if (isActive === "all") res = await axios.get(API + `articles/most_stocks?limit=${limit}`);
                    else res = await axios.get(API + `articles/most_stocks_by_provider?provider=${isActive}&limit=${limit}`);
                    break;
            }

            setArticles(res.data.articles);
            setFilter(order);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    } 

    const Filter = ({ text }) => {
        return (
            <button
                disabled={isFilter === text}
                onClick={() => getArticlesByOrder(text)}
                className={(isFilter === text ? "bg-black text-white border-black" : "border-gray-200 bg-gray-50 cursor-pointer") + " text-center py-2 text-sm rounded-md border w-40"}
            >
                <h1 className="font-medium capitalize">
                    { text }
                </h1>
            </button>
        );
    }

    const Provider = ({ data }) => {
        return (
            <button
                disabled={isActive === data}
                onClick={() => getArticlesByProvider(data)}
                className={(isActive === data ? "bg-black text-white border-black" : "border-gray-200 bg-gray-50 cursor-pointer") + " text-center py-2 text-sm rounded-md border w-40"}
            >
                <h1 className="font-medium capitalize">
                    { data }
                </h1>
            </button>
        );
    }

    return (
        <div>
            <div className="w-full flex items-center space-x-8 pb-6">
                <div className="w-44">
                    <h1 className="text-lg font-semibold">
                        Filter by providers:
                    </h1>
                </div>
                <div className="flex space-x-6">
                    <Provider data={"all"} />
                    {
                        providers?.map((item, index) => {
                            return <Provider key={index} data={item} />
                        })
                    }
                </div>
            </div>
            <div className="w-full flex items-center space-x-8 pb-16">
                <div className="w-44">
                    <h1 className="text-lg font-semibold">
                        Filter by order:
                    </h1>
                </div>
                <div className="flex space-x-6">
                    {
                        filters?.map((item, index) => {
                            return <Filter key={index} text={item} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}