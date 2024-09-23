import { Section } from "@/shared/Section";
import { useTranslations } from "next-intl";
import { AerialMapping } from "./AerialMapping";
import { DigitalCartography } from "./DigitalCartography";
import { LaserScanning } from "./LaserScanning";

export const Services = () => {
    const t = useTranslations("Services");

    return (
        <Section id="services" className="pt-10 tab:pb-10 pc:pb-[60px]">
            <div className="text-white-100 tab:text-2xl tab:text-left flex justify-between font-genos text-xl uppercase h-9 border-b border-b-white-100 mb-[28px] tab:mb-10 pc:mb-[60px]">
                <p className="tab:w-[50%]">02</p>
                <h2 className="tab:w-[50%]">{t("title")}</h2>
            </div>
            <AerialMapping />
            <DigitalCartography />
            <LaserScanning />
        </Section>
    );
};
