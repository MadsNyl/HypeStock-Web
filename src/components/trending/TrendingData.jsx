import { useState } from "react";
import { NavLink } from "react-router-dom";
import PageDataWrapper from "../wrappers/PageDataWrapper";
import PageSubHeader from "../wrappers/PageSubHeader";

const LikeIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-emerald-400">
            <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
        </svg>
    );
}

const ChatIcon = ({ color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-7 h-7 text-${color}-400`}>
            <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
        </svg>
    );
}

const Data = ({ data, header, icon, color }) => {
    return (
        <div className="max-w-md w-full ">
            <h1 className="px-2 font-semibold uppercase text-sm text-gray-400 pb-1">
                { header }
            </h1>
            <div className="border border-gray-200 rounded-lg py-4 px-6 flex items-center space-x-12">
                <div className={`w-20 h-20 rounded-full border border-${color}-200 bg-${color}-50 flex justify-center items-center`}>
                    { icon }
                </div>
                <div className="">
                    { 
                        data.map((item, index) => {
                            return <Info data={item} key={index} index={index} color={color} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

const Info = ({ data, index, color }) => {
    return (
        <NavLink 
            to={`/stock/${data.symbol}`}
            className="flex items-center space-x-3 py-2 px-3 rounded-lg transition duration-150 ease-in-out hover:bg-gray-100 "
        >
            <h1 className="text-gray-400 text-sm">
                #{ index + 1 }
            </h1>
            <h1 className="text-sm">
                { data.symbol } - <span className={`font-bold text-${color}-500`}>{ data.count }</span>
            </h1>
        </NavLink>
    );
}

export default function TrendingData({ data, header }) {

    const [open, setOpen] = useState(true);

    return (
        <PageDataWrapper border={true}>
            <button 
                className="flex space-x-2"
                onClick={() => setOpen(!open)}
            >
                <PageSubHeader header={header} color={"emerald"} />
                {
                    !open
                        ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                    
                }
            </button>
            {
                !open
                    ? <></>
                    : 
                    <div className="py-8 flex items-center justify-center space-x-16 transition ease-in-out duration-150">
                        <Data data={data.reddit_likes} header={"reddit likes"} icon={<LikeIcon />} color={"emerald"} />
                        <Data data={data.reddit_mentions} header={"reddit mentions"} icon={<ChatIcon color={"red"} />} color={"red"} />
                        <Data data={data.article_mentions} header={"article mentions"} icon={<ChatIcon color={"sky"} />} color={"sky"} />
                    </div>
            }
        </PageDataWrapper>
    );
}