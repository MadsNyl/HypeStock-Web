import axios from "axios";
import { API } from "../../shared";
import SearchIcon from "../icons/Search";

export default function SearchField({ setLoading, setStocks, setError }) {
    const search = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        const query = e.target[0].value.replace("&", "%26");
        e.target[0].value = "";

        try {
            const res = await axios.get(API + `stock/search?stock=${query}&limit=16`);

            if (!res.data.stocks.length) setError(true);

            setStocks(res.data.stocks);
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false);
        }
    }

    return (
        <form 
            className="max-w-xl w-full mt-4 mx-auto"
            onSubmit={(e) => search(e)}
        >   
            <label className="mb-2 text-sm font-medium sr-only">
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <SearchIcon style={"w-5 h-5 text-gray-500"} />
                </div>
                <input 
                    type="search" 
                    className="focus:outline-none block w-full p-4 pl-10 text-sm border border-gray-200 rounded-lg bg-white"
                    placeholder="Search for stock..." 
                    required />
                <button type="submit" className="absolute right-2.5 bottom-2.5 bg-white border border-gray-200 hover:bg-gray-200 font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
        </form>
    );
}