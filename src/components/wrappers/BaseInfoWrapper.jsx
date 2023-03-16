export default function BaseInfoWrapper({ children }) {
    return (
        <div className="flex space-x-36 items-center pb-16 border-b border-b-gray-200">
            { children }
        </div>
    )
}