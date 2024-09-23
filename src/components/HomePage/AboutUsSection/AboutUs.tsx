import { Section } from "@/shared/Section";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const AboutUs = () => {
    const t = useTranslations("AboutUs");

    return (
        <Section id="aboutus" className="text-center py-10">
            <div className="flex justify-between font-genos text-xl uppercase h-9 border-b border-b-white-100 mb-10">
                <p>01</p>
                <h2 className="">{t("title")}</h2>
            </div>
            <div className="flex gap-2 flex-wrap mb-5">
                <Image
                    src="/aboutUsImage1.png"
                    alt="aboutUsImage1"
                    width={451}
                    height={223}
                    className="w-full"
                />
                <Image
                    src="/aboutUsImage2.png"
                    alt="aboutUsImage2"
                    width={168}
                    height={149}
                    className=" w-aboutSmallImage"
                />
                <Image
                    src="/aboutUsImage3.png"
                    alt="aboutUsImage3"
                    width={168}
                    height={149}
                    className=" w-aboutSmallImage"
                />
                <Image
                    src="/aboutUsImage4.png"
                    alt="aboutUsImage4"
                    width={451}
                    height={222}
                    className="w-full"
                />
            </div>
            <div className="text-left">
                <p className="mb-4">
                    {t.rich("aboutUsP1", {
                        mapium: chunks => (
                            <span className="font-semibold uppercase">
                                {chunks}
                            </span>
                        ),
                    })}
                </p>
                <p className="mb-4">
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
        </Section>
    );
};
