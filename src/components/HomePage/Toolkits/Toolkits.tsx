import { Section } from "@/shared/Section";
import { WaveAnimation } from "@/shared/WaveAnimation";
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
                <WaveAnimation className="border border-white-40  px-2  pc:mb-5 tab:w-[538px] tab:h-[300px] pc:w-[41%]">
                    <div className="relative z-10">
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
                        className="relative z-10"
                    />
                </WaveAnimation>
                <WaveAnimation className="border border-white-40  px-2  pc:mb-5 tab:w-[688px] tab:h-[327px] pc:h-[300px] pc:w-[57%]">
                    <div className="relative z-10">
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
                        className="mt-[-50px] mx-auto relative z-10"
                    />
                </WaveAnimation>
            </div>
            <div className="pc:flex pc:gap-5 pc:justify-center">
                <WaveAnimation className="border border-white-40 px-0 pc:mb-0 tab:w-[650px] tab:h-[300px] tab:flex-row-reverse tab:gap-10 pc:w-[49%]">
                    <div className="px-2 relative z-10">
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
                        className="tab:w-[48.5%] relative z-10"
                    />
                </WaveAnimation>
                <WaveAnimation className="border border-white-40  px-2  mb-0 tab:w-[647px] tab:h-[300px] tab:flex-row-reverse tab:gap-10 pc:w-[49%]">
                    <div className="relative z-10">
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
                        className="w-[203px] h-auto mx-auto tab:w-[48.5%] relative z-10"
                    />
                </WaveAnimation>
            </div>
        </Section>
    );
};
