import { Section } from "@/shared/Section";
import { useTranslations } from "next-intl";
import { AerialMapping } from "./AerialMapping";
import { DigitalCartography } from "./DigitalCartography";
import { LaserScanning } from "./LaserScanning";

export const Services = () => {
    const t = useTranslations("Services");

    return (
        <Section id="services" className="pt-10">
            <div className="flex justify-between font-genos text-xl uppercase h-9 border-b border-b-white-100 mb-[28px]">
                <p>02</p>
                <h2 className="">{t("title")}</h2>
            </div>
            <AerialMapping />
            <DigitalCartography />
            <LaserScanning />
        </Section>
    );
};
