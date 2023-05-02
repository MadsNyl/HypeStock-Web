export default function Snackbar({ message }) {
    return(
        <div className="fixed bottom-0 right-12 max-w-xs w-full py-4 px-6 rounded-t-md bg-emerald-500 shadow-md text-white">
            <h1 className="font-medium">
                { message }
            </h1>
        </div>
    );
}