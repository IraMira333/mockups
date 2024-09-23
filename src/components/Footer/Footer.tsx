import { useTranslations } from "next-intl";
import { IconMail } from "../Icons/IconMail";
import { IconPhone } from "../Icons/IconPhone";
import { IconPin } from "../Icons/IconPin";

export const Footer = () => {
    const t = useTranslations("Footer");

    return (
        <footer className="border-t border-white-100 p-10 pc:p-[100px] ">
            <ul className="flex flex-col gap-4 mb-10 tab:flex-row max-w-[270px] tab:max-w-[705px] mx-auto">
                <li className="flex gap-3 items-center justify-left tab:w-[33%] hover:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                    <div className="w-6 h-6 flex justify-center items-center">
                        <IconPhone className="" />
                    </div>
                    <a href="tel:+48793032485" className="">
                        +48 793 032 485
                    </a>
                </li>
                <li className="flex gap-3 items-center justify-left tab:w-[33%] hover:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                    <div className="w-6 h-6 flex justify-center items-center">
                        <IconMail className="" />
                    </div>
                    <a href="mailto:info@mapium.com.pl" className="">
                        info@mapium.com.pl
                    </a>
                </li>
                <li className="flex gap-3 items-center justify-left max-w-[270px] tab:w-[34%] hover:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                    <div className="w-6 h-6 flex justify-center items-end">
                        <IconPin className="" />
                    </div>
                    <a href="https://maps.app.goo.gl/N7e62cDekKfihA98A">
                        {t("address")}
                    </a>
                </li>
            </ul>
            <p className=" flex justify-center text-grey-200 text-xs">
                &#169; 2024 {t("copyright")}
            </p>
        </footer>
    );
};
