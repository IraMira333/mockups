import { IconLogo } from "../Icons/IconLogo";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Navbar } from "./NavBar";

export const Header = () => {
    const locale = useLocale();
    return (
        <header className="fixed top-0 left-0 z-20 py-[10px] tab:py-[30px] pc:py-10 bg-navy">
            <div className="flex justify-between items-center w-[100vw] px-4 tab:px-10 pc:px-[60px]">
                <Link href={`/${locale}`}>
                    <IconLogo className="cursor-pointer w-[72px] h-5 pc:w-[117px] pc:h-[33px] hover:text-accent" />
                </Link>
                <div className="flex gap-4 items-center">
                    <nav className="flex justify-end items-center text-nav">
                        <Navbar />
                    </nav>
                </div>
            </div>
        </header>
    );
};
