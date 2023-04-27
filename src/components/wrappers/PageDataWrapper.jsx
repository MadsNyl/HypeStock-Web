export default function PageDataWrapper({ children, border }) {
    return (
        <div className={(border ? "border-b border-b-gray-200" : "") + " pt-12 pb-16 w-full"}>
            { children }
        </div>
    )
}