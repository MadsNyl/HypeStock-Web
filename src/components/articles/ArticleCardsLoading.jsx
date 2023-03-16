import CardLoadingWrapper from "../wrappers/CardLoadingWrapper";

export default function ArticleCardsLoading({ length }) {
    
    const Card = () => {
        return (
            <CardLoadingWrapper>
                <div className="pb-6">
                    <div className="py-6 rounded-md bg-gray-50" />
                </div>
                <div className="pb-8">
                    <div className="rounded-md bg-gray-50 py-12" />
                </div>
                <div className="flex items-center gap-3">
                    {
                        Array(4).fill(null).map((item, index) => {
                            return <div key={index} className="py-4 px-8 rounded-md bg-gray-50">{ item }</div>
                        })
                    }
                </div>
            </CardLoadingWrapper>
        );  
    }


    const cards = [];

    for (let i = 0; i < length; i++) cards.push(<Card />)
    
    return (
        <div className="grid grid-cols-2 gap-y-6">
            {
                Array(length).fill(null).map((item, index) => {
                    return <Card key={index} />
                })
            }
        </div>
    );
}