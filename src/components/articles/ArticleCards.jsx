import { NavLink } from "react-router-dom";
import FormatText from "../functions/FormatText";
import CardWrapper from "../wrappers/CardWrapper"

export default function ArticleCards({ articles }) {
    
    const Stock = ({ data }) => {
        return (
            <NavLink
                to={`/stock/${data}`}
                className="px-3 py-1 text-sm rounded-md border border-gray-200 transition duration-150 ease-in-out hover:bg-emerald-500 hover:text-white hover:border-emerald-500"
            >
                { data }
            </NavLink>
        );
    }

    const Article = ({ article }) => {
        return (
            <CardWrapper>
                <div className="h-72">
                    <div className="pb-8">
                        <h1 className="font-semibold text-lg pb-2">
                            { article.title }
                        </h1>
                        <p className="text-emerald-500 font-medium capitalize">
                            { article.provider }
                        </p>
                    </div>
                    <div className="pb-12">
                        <p>
                            { FormatText(article.body, 250) }
                        </p>
                    </div>
                </div>
                <div className="pb-8">
                    <a 
                        className="cursor-pointer w-full block py-2 rounded-md border border-gray-300 text-center text-emerald-500 font-semibold transition duration-150 ease-in-out hover:bg-emerald-500 hover:border-emerald-500 hover:text-white"
                        href={ article.url }
                    >
                        Read more
                    </a>
                </div>
                <div>
                    <h1 className="pb-3 font-medium">
                        Stock tickers mentioned in this article:
                    </h1>
                    <div className="flex items-center gap-3 flex-wrap">
                        {
                            article.related_stocks.map((item, index) => {
                                return <Stock key={index} data={item}/>
                            })
                        }
                    </div>
                </div>
            </CardWrapper>
        );
    }
    
    return (
        <div className="grid grid-cols-2 gap-y-6">
            {
                articles?.map((item, index) => {
                    return <Article key={index} article={item} /> 
                })
            }
        </div>
    );
}