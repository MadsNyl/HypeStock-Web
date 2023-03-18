import axios from "axios";
import { API } from "../../shared";

export default async function getTrendingData(setLoading, setData, limit) {
    setLoading(true);

    try {
        const res = await axios.get(API + `trending/?limit=${limit}`);

        setData(res.data); 
        console.log(res.data)
    } catch (e) {
        console.log(e);
    } finally {
        setLoading(false);
    }
}