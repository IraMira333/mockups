import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export const NavMenu = ({
    className,
    onClick,
}: {
    className: string;
    onClick?: () => void;
}) => {
    const locale = useLocale();
    const t = useTranslations("Menu");
    const menu = [
        { name: `${t("about")}`, path: `/${locale}#aboutus` },
        { name: `${t("services")}`, path: `/${locale}#services` },
        { name: `${t("toolkits")}`, path: `/${locale}#toolkits` },
        { name: `${t("showreel")}`, path: `/${locale}#showreel` },
    ];

    return (
        <ul className={`${className}`}>
            {menu.map(({ name, path }, index) => {
                return (
                    <li key={index} className="tab:w-[84px]">
                        <Link
                            href={path}
                            className=" uppercase"
                            onClick={onClick}
                        >
                            {name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
