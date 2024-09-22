import { IconLogo } from "../Icons/IconLogo";
import { NavMenu } from "./NavMenu";

const openedStyles = "h-80";
const closedStyles = "h-0";
export interface HeaderMenuProps {
    isHeaderMenuOpened: boolean;
    setIsHeaderMenuOpened: (
        value: boolean | ((prev: boolean) => boolean)
    ) => void;
}

export const MobileMenu = ({
    isHeaderMenuOpened = false,
    setIsHeaderMenuOpened,
}: HeaderMenuProps) => {
    return (
        <nav
            className={`absolute top-[60px] left-0 z-10 w-[100vw] overflow-hidden transition-height duration-[600ms] ease-out
           bg-accentBg ${isHeaderMenuOpened ? openedStyles : closedStyles}`}
        >
            <NavMenu
                className="flex flex-col gap-5 text-center my-[48px] "
                onClick={() => setIsHeaderMenuOpened(false)}
            />
            <IconLogo className="mx-auto w-[288px] text-white-20" />
        </nav>
    );
};
