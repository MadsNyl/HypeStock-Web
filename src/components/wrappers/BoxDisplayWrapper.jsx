export default function BoxDisplayWrapper({ children }) {
    return (
        <div className="border border-gray-100 rounded-md bg-white shadow-sm px-4 py-3 md:px-6 md:py-4">
            { children }
        </div>
    );
}