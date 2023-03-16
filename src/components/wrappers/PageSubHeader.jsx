export default function PageSubHeader({ header, color }) {
    return (
        <h1 className={`text-2xl text-${color}-500 font-extrabold uppercase pb-6`}>
            { header }
        </h1>
    )
}