export default function BoxDisplayWrapper({ children }) {
    return (
        <div className="border border-gray-100 rounded-md bg-white shadow-sm px-6 py-4">
            { children }
        </div>
    );
}