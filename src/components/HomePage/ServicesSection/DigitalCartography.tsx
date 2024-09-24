import { useTranslations } from "next-intl";
import Image from "next/image";

export const DigitalCartography = () => {
    const t = useTranslations("Services");

    return (
        <div className="mb-9 tab:border-b tab:border-white-100 tab:pb-10 tab:mb-[60px] pc:pb-[60px]">
            <div className="tab:flex tab:gap-[100px] pc:gap-5">
                <div className="tab:w-[37%] pc:w-[24%] tab:flex tab:flex-col tab:justify-between pc:justify-start">
                    <h3 className="text-white-100 font-semibold tab:text-5xl font-genos text-3xl mb-5 uppercase pc:mb-[102px]">
                        {t("digitalCartographyTitle")}
                    </h3>
                    <Image
                        src="/servicesImage4.png"
                        alt="servicesImage4"
                        width={255}
                        height={255}
                        className="hidden tab:block pc:ml-[32%]"
                    />
                </div>
                <div className="tab:w-[47.7%] pc:w-[75%]">
                    <div className="pc:flex pc:gap-5 pc:mb-[62px]">
                        <p className="mb-4 pc:w-[54.5%]">
                            {t("digitalCartographyP1")}
                        </p>
                        <p className="mb-6 tab:mb-10 pc:w-[43%]">
                            {t("digitalCartographyP2")}
                        </p>
                    </div>
                    <Image
                        src="/servicesImage3.png"
                        alt="servicesImage3"
                        width={985}
                        height={608}
                        className="hidden pc:block w-full"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4 mb-9 tab:mb-0 pc:hidden">
                <Image
                    src="/servicesImage3.png"
                    alt="servicesImage3"
                    width={985}
                    height={608}
                    className="w-full"
                />
            </div>
            <span className="w-[100vw] block h-[1px] bg-white-100 ml-[-16px] tab:hidden"></span>
        </div>
    );
};
