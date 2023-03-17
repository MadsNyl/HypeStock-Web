import React from "react";

const Article = ({ article }) => {
    return (
        <div className="w-full py-2 rounded-md bg-white flex items-center justify-between">
            <div>
                { article.provider }
            </div>
        </div>
    );
}

export default function Latest({ articles, comments }) {
    return (
        <div className="pb-12">
            <div className="text-center pb-20">
                <h1 className="text-3xl font-bold uppercase">
                    Latest data from social media
                </h1>
            </div>
            <div className="flex justify-center items-center space-x-36">
                <div className="bg-gray-50 border border-gray-200 rounded-md py-4 px-6 max-w-md w-full">
                    <div>
                        <h1>
                            Articles
                        </h1>
                    </div>
                    <div>
                        {
                            articles?.map((article, index) => {
                                return <Article key={index} article={article} />
                            })
                        }
                    </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-md py-4 px-6 max-w-md w-full">
                    <div>
                        <h1>
                            Reddit
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}