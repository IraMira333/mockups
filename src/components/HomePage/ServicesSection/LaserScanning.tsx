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
        <div className="">
            <div>
                <h3 className=" font-genos text-3xl mb-5">
                    {t("laserScanningTitle")}
                </h3>
                <p className="font-genos text-lgS mb-[10px]">
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
            <p className="mb-4">{t("laserScanningP1")}</p>
            <p className="mb-4">{t("laserScanningP2")}</p>

            <div className="flex flex-col gap-4 mb-10">
                <Image
                    src="/servicesImage5.png"
                    alt="servicesImage5"
                    width={428}
                    height={608}
                    className="w-full"
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
                    className="w-full"
                />
                <Image
                    src="/servicesImage8.png"
                    alt="servicesImage8"
                    width={533}
                    height={336}
                    className="w-full"
                />
            </div>
            <span className="w-[100vw] block h-[1px] bg-white-100 ml-[-16px]"></span>
        </div>
    );
};
