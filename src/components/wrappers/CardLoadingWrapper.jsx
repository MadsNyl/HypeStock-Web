export default function CardLoadingWrapper({ children }) {
    return (
        <div className="px-8 py-6 max-w-xl w-full rounded-md bg-gray-100 border border-gray-100 animate-pulse">
            { children }
        </div>
    );
}