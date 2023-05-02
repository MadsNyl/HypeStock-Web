import BoxDisplayWrapper from "../wrappers/BoxDisplayWrapper";

export default function StockStatus({ data, days }) {

    return (
        <div>
            <div className="pb-12">
                <h1 className="text-xl md:text-2xl uppercase font-bold">
                    Status
                </h1>
            </div>     
            <div className="grid md:grid-cols-3 gap-y-4 md:gap-y-16 md:gap-x-12">
                <StatusCard tag={"reddit"} text={`Change in upvotes from the previous ${days} days.`} start={data.prev_comment_likes} end={data.comment_likes} days={days} />
                <StatusCard tag={"reddit"} text={`Change in mentions from the previous ${days} days.`} start={data.prev_comment_count} end={data.comment_count} days={days}/>
            </div> 
        </div>
    );
}

const StatusCard = ({ tag, text, start, end, days}) => {

    const calculatePct = (start, end) => {
        return (((start - end) / start) * 100).toFixed(2);
    }

    return (
        <BoxDisplayWrapper>
            <div className="space-x-3">
                <div className="px-2 py-1 rounded-md bg-emerald-100 inline-block mb-4">
                    <h1 className="capitalize text-emerald-500 text-sm font-medium">
                        { tag }
                    </h1>
                </div>
                <div className="px-2 py-1 rounded-md bg-sky-100 inline-block mb-2">
                    <h1 className="capitalize text-sky-500 text-sm font-medium">
                        change
                    </h1>
                </div>
            </div>
            <div className="flex justify-between items-center pb-10">
                <p className="w-48 text-gray-400">
                    { text }
                </p>
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-emerald-400">
                        { calculatePct(end, start) }%
                    </h1>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="text-center">
                    <h1 className="text-2xl font-medium">
                        { end }
                    </h1>
                    <p className="text-gray-400 text-sm">
                        # these { days } days
                    </p>
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-medium">
                        { start }
                    </h1>
                    <p className="text-gray-400 text-sm">
                        # previous { days } days
                    </p>
                </div>
            </div>
        </BoxDisplayWrapper>
    );
}