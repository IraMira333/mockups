import { LocalePrefix } from "next-intl/routing";
export const defaultLocale = "en" as const;
export const locales = ["en", "pl"] as const;

export const localePrefix = "as-needed" satisfies LocalePrefix;
