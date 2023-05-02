import { NavLink } from "react-router-dom";
import confusion from "../../assets/icons/confusion.png";

export default function Stocks({ stocks, isLoading, error }) {

    const StockLoading = () => {
        return (
            <div className="px-6 py-3 rounded-md bg-gray-200 max-w-md w-full animate-pulse">
                <div className="bg-gray-100 rounded-md py-4" />
                <div className="bg-gray-100 rounded-md mt-4 h-20" />
            </div>
        );
    }

    const Stock = ({ data }) => {
        return (
            <NavLink 
                to={`/stock/${data.symbol}`}
                className="px-6 py-3 rounded-md bg-white border border-gray-200 max-w-xs md:max-w-md w-full transition duration-150 ease-in-out hover:border-gray-900"
            >
                <div className="pb-4 h-24">
                    <h1 className="text-md md:text-lg font-medium text-emerald-500 pb-2">
                        { data.symbol }
                    </h1>
                    <p className="text-xs md:text-sm text-gray-500">
                        { data.name }
                    </p>
                </div>
                <div>
                    <p className="text-sm md:text-md capitalize">
                        { data.exchange }
                    </p>
                </div>
            </NavLink>
        );
    }

    return (
        <div>
            { 
                !error
                    ? <></>
                    : 
                    <div className="flex justify-center mt-32">
                        <div className="space-y-6">
                            <img
                                className="w-32 h-32 block ml-auto mr-auto" 
                                src={confusion}
                            />
                            <h1 className="text-xl font-semibold">
                                We couldn't find what you searched for. Try something else
                            </h1>
                        </div>
                    </div>
            }
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 place-items-center mt-20">
                {
                    isLoading 
                        ? Array(16).fill(null).map((item, index) => {
                            return <StockLoading key={index} />
                        })
                        : 
                        stocks?.map((item, index) => {
                            return <Stock key={index} data={item} />
                        })
                }
            </div>
        </div>
    );
}