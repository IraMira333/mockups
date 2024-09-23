import { useTranslations } from "next-intl";
import Image from "next/image";

export const DigitalCartography = () => {
    const t = useTranslations("Services");

    return (
        <div className="mb-9">
            <h3 className=" font-genos text-3xl mb-5">
                {t("digitalCartographyTitle")}
            </h3>
            <p className="mb-4">{t("digitalCartographyP1")}</p>
            <p className="mb-6">{t("digitalCartographyP2")}</p>
            <div className="flex flex-col gap-4 mb-9">
                <Image
                    src="/servicesImage4.png"
                    alt="servicesImage4"
                    width={255}
                    height={255}
                    className="hidden tab:block"
                />
                <Image
                    src="/servicesImage3.png"
                    alt="servicesImage3"
                    width={985}
                    height={608}
                    className="w-full"
                />
            </div>
            <span className="w-[100vw] block h-[1px] bg-white-100 ml-[-16px]"></span>
        </div>
    );
};
