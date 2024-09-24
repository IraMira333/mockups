import { Section } from "@/shared/Section";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const AboutUs = () => {
    const t = useTranslations("AboutUs");

    return (
        <Section id="aboutus" className="text-center py-10 pc:py-[60px]">
            <div className="text-white-100 font-semibold flex justify-between tab:text-left font-genos text-xl tab:text-2xl uppercase h-9 border-b border-b-white-100 mb-10">
                <p className="tab:w-[50%]">01</p>
                <h2 className="tab:w-[50%]">{t("title")}</h2>
            </div>
            <div className="tab:flex tab:gap-5">
                <div className="pc:relative flex gap-2 flex-wrap mb-5 tab:w-[49.7%] pc:w-[57.57%] tab:mb-0 pc:aspect-[760/395]">
                    <Image
                        src="/aboutUsImage1.png"
                        alt="aboutUsImage1"
                        width={451}
                        height={223}
                        className="w-full pc:w-[59.3%] pc:absolute pc:top-0 pc:left-0"
                    />
                    <Image
                        src="/aboutUsImage2.png"
                        alt="aboutUsImage2"
                        width={168}
                        height={149}
                        className=" w-aboutSmallImage pc:w-[22%] h-auto pc:absolute pc:top-0 pc:right-[15.6%]"
                    />
                    <Image
                        src="/aboutUsImage3.png"
                        alt="aboutUsImage3"
                        width={168}
                        height={149}
                        className=" w-aboutSmallImage pc:w-[22%] h-auto pc:absolute pc:bottom-0 pc:left-0"
                    />
                    <Image
                        src="/aboutUsImage4.png"
                        alt="aboutUsImage4"
                        width={451}
                        height={222}
                        className="w-full pc:w-[59.3%] pc:absolute pc:bottom-0 pc:right-0"
                    />
                </div>
                <div className="text-left tab:w-[47%] pc:w-[40.8%]">
                    <p className="mb-4 pc:mb-[25px]">
                        {t.rich("aboutUsP1", {
                            mapium: chunks => (
                                <span className="font-semibold uppercase">
                                    {chunks}
                                </span>
                            ),
                            br: () => <br />,
                        })}
                    </p>
                    <p className="mb-4 pc:mb-[25px]">
                        {t.rich("aboutUsP2", {
                            mapium: chunks => (
                                <span className="font-semibold uppercase">
                                    {chunks}
                                </span>
                            ),
                            br: () => <br />,
                            abrisAero: chunks => (
                                <span className="font-semibold uppercase">
                                    {chunks}
                                </span>
                            ),
                            sony: chunks => (
                                <span className="font-semibold uppercase">
                                    {chunks}
                                </span>
                            ),
                            phaseone: chunks => (
                                <span className="font-semibold uppercase">
                                    {chunks}
                                </span>
                            ),
                            yellowscan: chunks => (
                                <span className="font-semibold uppercase">
                                    {chunks}
                                </span>
                            ),
                            novatel: chunks => (
                                <span className="font-semibold uppercase">
                                    {chunks}
                                </span>
                            ),
                            gnss: chunks => (
                                <span className="font-semibold uppercase">
                                    {chunks}
                                </span>
                            ),
                        })}
                    </p>
                    <p>{t("aboutUsP3")}</p>
                </div>
            </div>
        </Section>
    );
};
