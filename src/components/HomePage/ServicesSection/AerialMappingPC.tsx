import { useTranslations } from "next-intl";
import Image from "next/image";

export const AerialMappingPC = () => {
    const t = useTranslations("Services");
    const AERIALMAPPINGLIST = [
        `${t("aerialmappingItem1")}`,
        `${t("aerialmappingItem2")}`,
        `${t("aerialmappingItem3")}`,
        `${t("aerialmappingItem4")}`,
        `${t("aerialmappingItem5")}`,
        `${t("aerialmappingItem6")}`,
        `${t("aerialmappingItem7")}`,
        `${t("aerialmappingItem8")}`,
        `${t("aerialmappingItem9")}`,
        `${t("aerialmappingItem10")}`,
        `${t("aerialmappingItem11")}`,
    ];

    return (
        <div className="mb-10 tab:border-b tab:border-white-100 tab:pb-10 tab:mb-[60px]">
            <div className="tab:flex tab:gap-5">
                <div className="tab:w-[49.4%] pc:w-[24%] tab:flex tab:flex-col tab:justify-between">
                    <div>
                        <h3 className="text-white-100 tab:text-5xl font-genos text-3xl mb-5 pc:mb-[102px]">
                            {t("aerialmappingTitle")}
                        </h3>
                        <p className="font-genos text-lgS tab:text-xlS mb-[10px]">
                            {t("aerialmappingListTitle")}
                        </p>
                        <ul className=" list-disc pl-4 mb-4">
                            {AERIALMAPPINGLIST.map((item, index) => {
                                return (
                                    <li key={index} className="pl-1">
                                        {item}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <Image
                        src="/servicesImage1.png"
                        alt="servicesImage1"
                        width={428}
                        height={608}
                        className="hidden w-full tab:block pc:hidden"
                    />
                </div>
                <div className="tab:w-[47.6%] pc:w-[75%] pc:flex">
                    <div>
                        <p className="mb-4">{t("aerialmappingP1")}</p>
                        <Image
                            src="/servicesImage1.png"
                            alt="servicesImage1"
                            width={428}
                            height={608}
                            className="hidden w-full pc:block"
                        />
                    </div>
                    <div>
                        <p className="mb-4">{t("aerialmappingP2")}</p>
                        <p className="mb-6">
                            {t.rich("aerialmappingP3", {
                                br: () => <br />,
                            })}
                        </p>
                        <div className="flex flex-col gap-4 mb-10 tab:mb-0">
                            <Image
                                src="/servicesImage1.png"
                                alt="servicesImage1"
                                width={428}
                                height={608}
                                className="w-full tab:hidden"
                            />
                            <Image
                                src="/servicesImage2.png"
                                alt="servicesImage2"
                                width={533}
                                height={336}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <span className="w-[100vw] block h-[1px] bg-white-100 ml-[-16px] tab:hidden"></span>
        </div>
    );
};
