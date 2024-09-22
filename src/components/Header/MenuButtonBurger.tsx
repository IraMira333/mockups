interface BurgerMenuButtonProps {
    isHeaderMenuOpened: boolean;
    toggleHeaderMenuOpen: () => void;
}
const firstLineBaseStyles = "top-[0px] left-0 ";
const firstLineTransformStyles =
    "rotate-[45deg] top-[-2.6px] left-[3px] w-[70%]";
const secondLineBaseStyles = "top-[6.83px] ";
const secondLineTransformStyles =
    "rotate-[-45deg] origin-center top-[-3px] right-[3px] w-[116%]";
const thirdLineBaseStyles = "top-[13.67px] ";
const thirdLineTransformStyles = "rotate-45 top-[15.2px] w-[70%] right-[4px]";

export const MenuButtonBurger = ({
    isHeaderMenuOpened,
    toggleHeaderMenuOpen,
}: BurgerMenuButtonProps) => {
    return (
        <button
            aria-label="open menu button"
            type="button"
            onClick={toggleHeaderMenuOpen}
            className="relative w-10 h-10 px-[8.3px] py-[11.67px] flex justify-center items-center "
        >
            <div className="cursor-pointer w-full h-full rotate-0 transition-all duration-[600ms] ease-out ">
                <span
                    className={`block absolute w-[50%] h-[3.3px] bg-white-100 rounded-full rotate-0 transition-transform duration-300 ease-out origin-top-left ${
                        isHeaderMenuOpened
                            ? firstLineTransformStyles
                            : firstLineBaseStyles
                    }`}
                ></span>
                <span
                    className={`block absolute  w-full h-[3.3px] bg-white-100 rounded-full rotate-0 transition-transform duration-300 ease-out origin-right ${
                        isHeaderMenuOpened
                            ? secondLineTransformStyles
                            : secondLineBaseStyles
                    }`}
                ></span>
                <span
                    className={`block absolute right-0 w-[50%] h-[3.3px] bg-white-100 rounded-full rotate-0 transition-transform duration-300 ease-out origin-bottom-right ${
                        isHeaderMenuOpened
                            ? thirdLineTransformStyles
                            : thirdLineBaseStyles
                    }`}
                ></span>
            </div>
        </button>
    );
};
