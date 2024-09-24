import localFont from "next/font/local";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

import { getTranslations } from "next-intl/server";

const genos = localFont({
    src: [
        {
            path: "../fonts/Genos/Genos-Medium.ttf",
            weight: "400",
            style: "normal",
        },

        {
            path: "../fonts/Genos/Genos-Regular.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../fonts/Genos/Genos-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
    ],
    variable: "--font-genos",
});

const dmSans = localFont({
    src: [
        {
            path: "../fonts/DMSans/DMSans-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/DMSans//DMSans-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
    ],
    variable: "--font-dmSans",
});

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const t = await getTranslations({ locale, namespace: "MetaData" });

    return {
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        alternates: {
            languages: {
                "en-US": "/en",
                "pl-PL": "/",
            },
        },
        title: t("title"),
        description: t("description"),
        openGraph: {
            title: t("title"),
            description: t("description"),
            type: "website",
        },
    };
}

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const messages = useMessages();
    return (
        <html
            lang={locale}
            className={`${dmSans.variable} ${genos.variable} antialiased`}
        >
            <head>
                <link rel="icon" href="../favicon.ico" sizes="any" />
                <meta
                    name="image"
                    property="og:image"
                    content="/linkImage.png"
                />
                <meta name="twitter:image" content="/linkImage.png" />
                <meta name="robots" content="index, follow" />
            </head>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <body>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </body>
            </NextIntlClientProvider>
        </html>
    );
}
