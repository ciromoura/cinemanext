import Link from 'next/link';

export default function Navbar() {
    return (
        <>
            <nav class="bg-white border-b border-gray-200 fixed w-full p-2 z-30 flex justify-between content-center mb-48">
                <h1 className="md:text-3xl text-2md font-bold text-indigo-500">
                    Next.js + Tailwindcss + Themoviedb
                </h1>
                <h1 className="md:text-2xl text-1md font-bold text-emerald-500">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </h1>
            </nav>
        </>
    );
}