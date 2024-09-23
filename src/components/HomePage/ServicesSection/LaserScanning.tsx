import { useTranslations } from "next-intl";
import Image from "next/image";

export const LaserScanning = () => {
    const t = useTranslations("Services");
    const LASERSCANNINGLIST = [
        `${t("laserScanningItem1")}`,
        `${t("laserScanningItem2")}`,
        `${t("laserScanningItem3")}`,
        `${t("laserScanningItem4")}`,
        `${t("laserScanningItem5")}`,
        `${t("laserScanningItem6")}`,
        `${t("laserScanningItem7")}`,
    ];
    return (
        <div className="tab:flex tab:gap-4 tab:border-b tab:border-white-100 tab:pb-10 pc:pb-[60px]">
            <div className="tab:w-[49%] pc:w-[66%] pc:flex pc:gap-5">
                <div className="tab:w-[93%] pc:w-[35%]">
                    <h3 className="text-white-100 tab:text-5xl font-genos text-3xl mb-5 pc:mb-[102px]">
                        {t("laserScanningTitle")}
                    </h3>
                    <p className="font-genos tab:text-xlS text-lgS mb-[10px]">
                        {t("laserScanningListTitle")}
                    </p>
                    <ul className=" list-disc pl-4 mb-4">
                        {LASERSCANNINGLIST.map((item, index) => {
                            return (
                                <li key={index} className="pl-1">
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <Image
                        src="/servicesImage5.png"
                        alt="servicesImage5"
                        width={428}
                        height={608}
                        className="w-full hidden tab:block pc:mb-5"
                    />
                    <Image
                        src="/servicesImage7.png"
                        alt="servicesImage7"
                        width={428}
                        height={608}
                        className="w-full hidden tab:block"
                    />
                </div>
            </div>
            <div className="tab:w-[48.4%] pc:w-[32%] tab:flex tab:flex-col tab:justify-between">
                <div>
                    <p className="mb-4">{t("laserScanningP1")}</p>
                    <p className="mb-4">{t("laserScanningP2")}</p>
                </div>

                <div className="flex flex-col gap-4 mb-10 tab:mb-0">
                    <Image
                        src="/servicesImage5.png"
                        alt="servicesImage5"
                        width={428}
                        height={608}
                        className="w-full tab:hidden"
                    />
                    <Image
                        src="/servicesImage6.png"
                        alt="servicesImage6"
                        width={533}
                        height={336}
                        className="w-full"
                    />
                    <Image
                        src="/servicesImage7.png"
                        alt="servicesImage7"
                        width={428}
                        height={608}
                        className="w-full tab:hidden"
                    />
                    <Image
                        src="/servicesImage8.png"
                        alt="servicesImage8"
                        width={533}
                        height={336}
                        className="w-full"
                    />
                </div>
            </div>
            <span className="w-[100vw] block h-[1px] bg-white-100 ml-[-16px] tab:hidden"></span>
        </div>
    );
};
