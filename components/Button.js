import Link from 'next/link';

export default function Button({ children, href, style, className }) {
    if(href) {
        return (
            <Link href={href}>
                <a style={style} className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4 ${className}`}>
                    {children}
                </a>
            </Link>
        );
    } else {
        return (
            <button style={style} className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4 ${className}`}>
                {children}
            </button>
        );
    }
}
