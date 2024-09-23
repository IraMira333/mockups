import { IconLogo } from "@/components/Icons/IconLogo";
import { Section } from "@/shared/Section";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Hero = () => {
    const t = useTranslations("Home");

    return (
        <Section className="mt-[120px] text-center px-0">
            <IconLogo className="w-[182px] h-[51px] mx-auto mb-8" />

            <h1 className="font-genos font-medium text-4xl uppercase mb-8 px-4">
                {t("title")}
            </h1>

            <Image
                src="/imageMap.png"
                alt={t("heroPicture")}
                width={1119}
                height={254}
                className="h-[254px] object-cover"
                priority
            />
        </Section>
    );
};
