import { NavLink } from "react-router-dom";
import FormatText from "../functions/FormatText";
import FormatDate from "../functions/FormatDate";
import CardWrapper from "../wrappers/CardWrapper"
import IsLiked from "../functions/IsLiked";

export default function CommentCards({ comments }) {
    
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

    const Comment = ({ comment }) => {
        return (
            <CardWrapper>
                <div className="h-60">
                    <div className="pb-8">
                        <div className="flex justify-between items-baseline">
                            <div>
                                <div className="flex items-center space-x-4 pb-2">
                                    <a 
                                        href={ `https://reddit.com/user/${comment.author}` }
                                        className="cursor-pointer font-semibold text-lg"
                                    >
                                        { comment.author }
                                    </a>
                                    <p className="text-gray-400">
                                        { FormatDate(comment.created_date) }
                                    </p>
                                </div>
                                <div className="flex items-center space-x-6">
                                    <a
                                        href={ `https://reddit.com/r/${comment.subreddit}` } 
                                        className="text-orange-500 font-medium capitalize"
                                    >
                                        { comment.subreddit }
                                    </a>
                                    <div className="flex items-center space-x-1">
                                        { IsLiked(comment.likes) }
                                        <p className="font-medium">
                                            { comment.likes }
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <NavLink
                                    className="px-4 py-1 rounded-md border border-gray-200 transition duration-150 hover:bg-gray-200"
                                    to={`/stock/${comment.symbol}`}
                                >
                                    { comment.symbol }
                            </NavLink>
                        </div>
                    </div>
                    <div className="pb-12">
                        <p>
                            { FormatText(comment.body, 250) }
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-6 justify-center">
                    <a 
                        className="cursor-pointer w-full block py-2 rounded-md border border-gray-300 text-center text-orange-500 font-semibold transition duration-150 ease-in-out hover:bg-orange-500 hover:border-orange-500 hover:text-white"
                        href={ `https://reddit.com${comment.post_url}` }
                    >
                        Go to post
                    </a>
                    <a 
                        className="cursor-pointer w-full block py-2 rounded-md border border-gray-300 text-center text-orange-500 font-semibold transition duration-150 ease-in-out hover:bg-orange-500 hover:border-orange-500 hover:text-white"
                        href={ `https://reddit.com${comment.permalink}` }
                    >
                        Go to comment
                    </a>
                </div>
            </CardWrapper>
        );
    }
    
    return (
        <div className="grid grid-cols-2 gap-y-6 place-items-center">
            {
                comments?.map((item, index) => {
                    return <Comment key={index} comment={item} /> 
                })
            }
        </div>
    );
}