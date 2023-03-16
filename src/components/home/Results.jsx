import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../shared";
import Spinner from "../Spinner";
import Losers from "./Losers";
import Winners from "./Winners";

export default function Results() {
    const [winners, setWinners] = useState();
    const [losers, setLosers] = useState();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        const getWinners = async () => {
            setLoading(true);
            try {
                const res = await axios.get(API + "trackings/results");
                setWinners(res.data.winners);
                setLosers(res.data.losers);
            } catch (e) {
                console.log(e)
                e && setError("An error occured. Refresh or try later.")
            } finally {
                setLoading(false);
            }
        }

        getWinners();

    }, []);

    return (
        <div className="rounded-lg shadow-sm py-8">
            <div className="flex justify-between items-center px-24 pb-16">
                <h1 className="text-3xl font-bold">
                    Results of the day
                </h1>
            </div>

            {
                isLoading
                    ? <div className="min-h-screen flex justify-center items-center">
                        <Spinner />
                    </div>
                    : error.length ? <h1>{error}</h1>
                    :
                    <div className="flex justify-center items-center space-x-2">
                        <Winners data={winners}/>
                        <Losers data={losers} />
                    </div>
            }
        </div>
    );
}