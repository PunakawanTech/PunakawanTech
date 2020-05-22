export default function Card({ title, desc, tags, className }) {
    return (
        <div className={`z-0 ${className}`}>
            <div className="transition-all duration-500 max-w-sm bg-default rounded overflow-hidden shadow-lg transform hover:scale-110 z-0 hover:z-10 cursor-pointer">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl text-default mb-2">{title}</div>
                    <p className="text-gray-700 text-base text-default">
                        {desc}
                    </p>
                </div>
                <div className="px-6 py-4">
                    {tags && Array.isArray(tags) && tags.map((tag, index) => {
                        return <span key={`${tag}-${index}`} className="inline-block bg-inverse rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            #{tag}
                        </span>
                    })}
                </div>
            </div>
        </div>
    );
}
