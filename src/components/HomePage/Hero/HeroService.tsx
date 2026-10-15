import { IconLogo } from "@/components/Icons/IconLogo";
import { useTranslations } from "next-intl";

export const HeroService = () => {
    const t = useTranslations("Home");

    return (
        <section className="min-h-screen flex flex-col pt-[120px] px-0 tab:pb-[76px] pc:pb-0 mx-auto">
            <IconLogo className="w-[182px] h-[51px] mx-auto mb-8 tab:mb-[64px] pc:w-[247px] pc:h-[69px] pc:mb-[82px] shrink-0" />

            <div className="flex-1 flex flex-col justify-center">
                <h1 className="text-white-100 mx-auto whitespace-pre-wrap text-center font-genos font-semibold text-4xl tab:text-5xl uppercase mb-8 tab:mb-[56px] pc:mb-[75px] tab:max-w-[827px] pc:max-w-[922px] px-4 tab:px-10 pc:px-0 pc:text-6xl">
                    {t("titleService")}
                </h1>
            </div>
        </section>
    );
};
