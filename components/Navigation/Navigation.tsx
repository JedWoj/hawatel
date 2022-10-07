import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
    const router = useRouter();

    return(
        <nav className="flex justify-end gap-10 md:gap-20 p-2 sm:p-5 lg:p-10 sm:text-lg md:text-xl xl:text-2xl">
            <Link href={'/'}>
                <p className={router.pathname === '/' ? 'text-cyan-600 cursor-pointer' : 'cursor-pointer'}>
                    Main
                </p>
            </Link>
            <Link href={'/users'}>
                <p className={router.pathname === '/users' ? 'text-cyan-600 cursor-pointer' : 'cursor-pointer'}>
                    Users
                </p>
            </Link>
            <Link href={'/posts'}>
                <p className={router.pathname === '/posts' ? 'text-cyan-600 cursor-pointer' : 'cursor-pointer'}>
                    Posts
                </p>
            </Link>
            <Link href={'/todos'}>
                <p className={router.pathname === '/todos' ? 'text-cyan-600 cursor-pointer' : 'cursor-pointer'}>
                    Todos
                </p>
            </Link>
        </nav>
    )
}

export default Navigation;