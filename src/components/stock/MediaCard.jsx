import { NavLink } from "react-router-dom"
import BoxDisplayWrapper from "../wrappers/BoxDisplayWrapper"

export default function MediaCard ({ symbol, provider, totalCount, stockCount, path, days }) {
    return(
        <BoxDisplayWrapper>
            <div className="space-x-3 pb-4">
                <div className="px-2 py-1 rounded-md bg-yellow-100 inline-block mb-2">
                    <h1 className="capitalize text-yellow-500 text-sm font-medium">
                        { provider }
                    </h1>
                </div>
                <NavLink
                    to={`/stock/${path}/${symbol}/${days}/${provider}`} 
                    className="px-2 py-1 rounded-md bg-sky-100 inline-block mb-2 transition duration-150 ease-in-out hover:bg-sky-700 hover:text-white capitalize text-sky-500 text-sm font-medium"
                >
                    { path }
                </NavLink>
            </div>
            <div className="flex items-center justify-between">
                <div className="text-center">
                    <h1 className="text-2xl font-medium">
                        { totalCount }
                    </h1>
                    <p className="text-gray-400 text-sm">
                        # total hits
                    </p>
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-medium">
                        { stockCount }
                    </h1>
                    <p className="text-gray-400 text-sm">
                        # stock hits
                    </p>
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-medium">
                        { ((stockCount / totalCount) * 100).toFixed(2) + " %"  }
                    </h1>
                    <p className="text-gray-400 text-sm">
                        % stock hits
                    </p>
                </div>
            </div>
        </BoxDisplayWrapper>
    );
}