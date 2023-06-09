import axios from "axios";
import { useRef, useState } from "react";
import { API } from "../shared";
import outsideClick from "./functions/OutsideClick";
import { NavLink } from "react-router-dom";

export default function NavSearchBar() {

    const [isLoading, setLoading] = useState();
    const [results, setResults] = useState();
    const [error, setError] = useState();
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);
    outsideClick(wrapperRef, setOpen);

    const search = async (e) => {
        e.preventDefault();
        setLoading(true);
        setOpen(false);
        setError(false);
        const query = e.target[0].value.replace("&", "%26");
        e.target[0].value = "";

        try {
            setOpen(true);
            const res = await axios.get(API + `stock/search?stock=${query}&limit=5`)

            if (!res.data.stocks.length) setError(true);

            setResults(res.data.stocks);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form 
            ref={wrapperRef}
            onSubmit={e => {
                search(e);
            }}
            className="relative flex items-center bg-gray-100 rounded-lg border border-gray-200 px-2 py-1 space-x-3"
        >
            <input 
                className="outline-none bg-gray-100"
                type="text" 
                placeholder="Search for a stock..."
                required
            />
            <button className="flex justify-center items-center text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">
                {
                    !isLoading
                        ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        :
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-100 animate-spin fill-emerald-500 " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                }
            </button>

            {
                !open
                    ? <></>
                    : 
                    <div
                        className="absolute top-10 right-0 rounded-lg bg-white border border-gray-200 shadow-md py-2 px-4 w-72 z-10"
                    >
                        {
                            error
                                ? <Error />
                                : <Results results={results} setOpen={setOpen} />
                        }
                    </div>
            }
        </form>
    );
}

const Results = ({ results, setOpen }) => {
    return (
        <div>
            {
                results?.map((item, index) => {
                    return <Result key={index} result={item} setOpen={setOpen} />
                })
            }
        </div>
    );        
}

const Result = ({ result, setOpen }) => {
    return (
        <NavLink
            to={`/stock/${result.symbol}`}
            onClick={() => { 
                setOpen(false);
            }}
        >
            <div
                className="py-2 px-4 rounded-lg transition duration-150 ease-in-out hover:bg-gray-100"
            >
                <h1 className="text-sm">
                    { result.symbol }
                </h1>
                <p className="text-xs text-gray-400">
                    { result.name }
                </p>
            </div>
        </NavLink>
    );
}

const Error = () => {
    return (
        <div>
            <h1>
                Could not find any results
            </h1>
        </div>
    );
}