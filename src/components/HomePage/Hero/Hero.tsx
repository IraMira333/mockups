import { IconLogo } from "@/components/Icons/IconLogo";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Hero = () => {
    const t = useTranslations("Home");

    return (
        <section className="pt-[120px] tab:pt-[160px] pc:pt-[128px] px-0 tab:pb-[76px] pc:pb-0 mx-auto">
            <IconLogo className="w-[182px] h-[51px] mx-auto mb-8 tab:mb-[64px] pc:w-[247px] pc:h-[69px] pc:mb-[82px]" />

            <h1 className="text-white-100 mx-auto text-center font-genos font-medium text-4xl tab:text-6xl uppercase mb-8 tab:mb-[56px] pc:mb-[75px] tab:max-w-[827px] pc:max-w-[922px] px-4 tab:px-10 pc:px-0 pc:text-7xl">
                {t("title")}
            </h1>

            <Image
                src="/imageMap.png"
                alt={t("heroPicture")}
                width={1119}
                height={254}
                className="h-[254px] object-cover mx-auto"
                priority
            />
        </section>
    );
};
