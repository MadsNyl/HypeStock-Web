import NavSearchBar from "../NavSearchBar";

export default function Compare() {
    return (
        <div className="max-w-3xl w-full">
            <div className="pb-8">
                <h1 className="border-b border-gray-200 uppercase text-3xl font-bold text-center pb-4">
                    Compare
                </h1>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <NavSearchBar />
                </div>
                <div className="flex items-center space-x-6">
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}