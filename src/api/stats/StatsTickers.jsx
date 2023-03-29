import axios from "axios";
import { API } from "../../shared";

export async function getStatsTickersByMedia(setLoading, limit, media, filter, setMedia, setTickers, duration, setFilter) {
    setLoading(true);

    try {
        const res = await axios.get(API + `stats/tickers?limit=${limit}&media=${media}&filter=${filter}&days=${duration}`);
        setTickers({
            tickers: res.data.tickers,
            total: res.data.total
        })

        if (media === "articles") setFilter("mentions");

        setMedia(media);
    } catch (e) {
        console.log(e);
    } finally {
        setLoading(false);
    }
}

export async function getStatsTickersByFilter(setLoading, limit, media, filter, setFilter, setTickers, duration) {
    setLoading(true);

    try {
        const res = await axios.get(API + `stats/tickers?limit=${limit}&media=${media}&filter=${filter}&days=${duration}`);
        setTickers({
            tickers: res.data.tickers,
            total: res.data.total
        })
        setFilter(filter);
    } catch (e) {
        console.log(e);
    } finally {
        setLoading(false);
    }
}

export async function getStatsTickersByDate(setLoading, limit, media, filter, setTickers, setDuration, duration) {
    setLoading(true);

    try {
        const res = await axios.get(API + `stats/tickers?limit=${limit}&media=${media}&filter=${filter}&days=${duration}`);
        setTickers({
            tickers: res.data.tickers,
            total: res.data.total
        })
        setDuration(duration);
    } catch (e) {
        console.log(e);
    } finally {
        setLoading(false);
    }
}