"use client";
import { useState, useEffect } from "react";
import { MobileMenu } from "./MobileMenu";
import { NavMenu } from "./NavMenu";
import { MenuButtonBurger } from "./MenuButtonBurger";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export const Navbar = () => {
    const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);

    const toggleHeaderMenuOpen = () =>
        setIsHeaderMenuOpened(!isHeaderMenuOpened);

    useEffect(() => {
        if (isHeaderMenuOpened) {
            setTimeout(() => {
                document.body.style.overflow = "hidden";
            }, 590);
        } else {
            document.body.style.overflow = "";
        }
    }, [isHeaderMenuOpened]);
    return (
        <>
            <NavMenu className="hidden tab:flex tab:gap-1 pc:gap-5 tab:mr-3 pc:mr-8" />
            <LanguageSwitcher />
            <div className="tab:hidden ml-4">
                <MenuButtonBurger
                    isHeaderMenuOpened={isHeaderMenuOpened}
                    toggleHeaderMenuOpen={toggleHeaderMenuOpen}
                />
            </div>
            <MobileMenu
                isHeaderMenuOpened={isHeaderMenuOpened}
                setIsHeaderMenuOpened={setIsHeaderMenuOpened}
            />
        </>
    );
};
