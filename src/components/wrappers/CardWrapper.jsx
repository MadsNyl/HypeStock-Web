export default function CardWrapper({ children }) {
    return (
        <div className="px-8 py-6 max-w-xl w-full rounded-md bg-white border border-gray-200">
            { children }
        </div>
    );
}