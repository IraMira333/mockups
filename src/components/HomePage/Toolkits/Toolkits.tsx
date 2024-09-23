import { Section } from "@/shared/Section";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Toolkits = () => {
    const t = useTranslations("Services");

    return (
        <Section id="services" className="py-10">
            <div className="flex justify-between font-genos text-xl uppercase h-9 border-b border-b-white-100 mb-[28px]">
                <p>03</p>
                <h2 className="">{t("toolkitsTitle")}</h2>
            </div>
            <div className="border border-white-40 px-2 mb-4">
                <h3 className="font-genos text-3xl uppercase mb-4">
                    {t("beetleTitle")}
                </h3>
                <p>{t("beetleText")}</p>
                <Image
                    src="/beetle.png"
                    alt="beetle"
                    width={263}
                    height={235}
                />
            </div>
            <div className="border border-white-40 px-2 mb-4">
                <h3 className="font-genos text-3xl uppercase mb-4">
                    {t("flirtTitle")}
                </h3>

                <p>
                    {t.rich("flirtText", {
                        br: () => <br />,
                    })}
                </p>
                <Image
                    src="/flirtCetus.png"
                    alt="flirtCetus"
                    width={218}
                    height={232}
                    className="mt-[-50px] mx-auto"
                />
            </div>
            <div className="border border-white-40  mb-4">
                <div className="px-2">
                    <h3 className="font-genos text-3xl uppercase mb-4">
                        {t("yellowScanTitle")}
                    </h3>
                    <p className="mb-4">{t("yellowScanText")}</p>
                </div>
                <Image
                    src="/yellowscan.png"
                    alt="Yellow Scan"
                    width={315}
                    height={300}
                />
            </div>
            <div className="border border-white-40 px-2">
                <h3 className="font-genos text-3xl uppercase mb-4">
                    {t("sonyTitle")}
                </h3>
                <p>{t("sonyText")}</p>
                <Image
                    src="/sony.png"
                    alt="Sony"
                    width={315}
                    height={300}
                    className="w-[203px] h-auto mx-auto"
                />
            </div>
        </Section>
    );
};
