export default function Avatar({ children }) {
    return (
        <div className="rounded-full h-16 w-16 flex items-center m-1 bg-inverse justify-center">
            {children}
        </div>
    );
}
