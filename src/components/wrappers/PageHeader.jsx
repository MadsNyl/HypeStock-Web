export default function PageHeader({ header, color }) {
    return (
        <h1 className={`text-4xl text-${color}-500 font-extrabold uppercase pb-6`}>
            { header }
        </h1>
    )
}