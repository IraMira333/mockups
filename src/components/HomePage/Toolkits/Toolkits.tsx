import { Section } from "@/shared/Section";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Toolkits = () => {
    const t = useTranslations("Services");

    return (
        <Section id="toolkits" className="py-10">
            <div className="text-white-100 flex justify-between tab:text-left font-genos text-xl tab:text-2xl uppercase h-9 border-b border-b-white-100 mb-10">
                <p className="tab:w-[50%]">03</p>
                <h2 className="tab:w-[50%]">{t("toolkitsTitle")}</h2>
            </div>
            <div className="pc:flex pc:gap-5 pc:justify-center">
                <div className="border border-white-40 px-2 mb-4 pc:mb-5 tab:w-[538px] tab:h-[300px] tab:flex tab:p-5 pc:w-[41%]">
                    <div>
                        <h3 className="text-white-100 font-genos text-3xl uppercase mb-4 tab:text-5xl">
                            {t("beetleTitle")}
                        </h3>
                        <p>{t("beetleText")}</p>
                    </div>
                    <Image
                        src="/beetle.png"
                        alt="beetle"
                        width={263}
                        height={235}
                    />
                </div>
                <div className="border border-white-40 px-2 mb-4 pc:mb-5 tab:w-[688px] tab:h-[327px] pc:h-[300px] tab:flex tab:p-5 pc:w-[57%]">
                    <div>
                        <h3 className="text-white-100 font-genos text-3xl uppercase mb-4 tab:text-5xl">
                            {t("flirtTitle")}
                        </h3>

                        <p>
                            {t.rich("flirtText", {
                                br: () => <br />,
                            })}
                        </p>
                    </div>
                    <Image
                        src="/flirtCetus.png"
                        alt="flirtCetus"
                        width={218}
                        height={232}
                        className="mt-[-50px] mx-auto"
                    />
                </div>
            </div>
            <div className="pc:flex pc:gap-5 pc:justify-center">
                <div className="border border-white-40  mb-4 pc:mb-0 tab:w-[650px] tab:h-[300px] tab:flex tab:flex-row-reverse tab:p-5 tab:gap-10 pc:w-[49%]">
                    <div className="px-2">
                        <h3 className="text-white-100 font-genos text-3xl uppercase mb-4 tab:text-5xl">
                            {t("yellowScanTitle")}
                        </h3>
                        <p className="mb-4">{t("yellowScanText")}</p>
                    </div>
                    <Image
                        src="/yellowscan.png"
                        alt="Yellow Scan"
                        width={315}
                        height={300}
                        className="tab:w-[48.5%]"
                    />
                </div>
                <div className="border border-white-40 px-2 tab:w-[647px] tab:h-[300px] tab:flex tab:flex-row-reverse tab:p-5 tab:gap-10 pc:w-[49%]">
                    <div>
                        <h3 className="text-white-100 font-genos text-3xl uppercase mb-4 tab:text-5xl">
                            {t("sonyTitle")}
                        </h3>
                        <p>{t("sonyText")}</p>
                    </div>
                    <Image
                        src="/sony.png"
                        alt="Sony"
                        width={315}
                        height={300}
                        className="w-[203px] h-auto mx-auto tab:w-[48.5%]"
                    />
                </div>
            </div>
        </Section>
    );
};
