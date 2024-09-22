import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "16px",
                tab: "40px",
                pc: "60px",
            },
        },
        screens: {
            tab: "768px",
            pc: "1440px",
        },
        fontSize: {
            xs: [
                "12px",
                {
                    lineHeight: "12px",
                },
            ],
            sm: [
                "14px",
                {
                    lineHeight: "17px",
                },
            ],
            base: [
                "16px",
                {
                    lineHeight: "20px",
                },
            ],
            lg: [
                "18px",
                {
                    lineHeight: "23px",
                },
            ],
            lgS: [
                "18px",
                {
                    lineHeight: "23px",
                    fontWeight: "600",
                },
            ],

            xl: [
                "20px",
                {
                    lineHeight: "26px",
                },
            ],

            xlS: [
                "20px",
                {
                    lineHeight: "26px",
                    fontWeight: "600",
                },
            ],
            "2xl": [
                "24px",
                {
                    lineHeight: "24px",
                },
            ],
            "2xlS": [
                "24px",
                {
                    lineHeight: "24px",
                    fontWeight: "600",
                },
            ],
            "3xlS": [
                "28px",
                {
                    lineHeight: "34px",
                    fontWeight: "600",
                },
            ],
            "4xlS": [
                "32px",
                {
                    lineHeight: "36px",
                    fontWeight: "600",
                },
            ],

            "5xlS": [
                "36px",
                {
                    lineHeight: "43px",
                    fontWeight: "600",
                },
            ],
            "6xlS": [
                "48px",
                {
                    lineHeight: "54px",
                    fontWeight: "600",
                },
            ],
            "7xlS": [
                "64px",
                {
                    lineHeight: "72px",
                    fontWeight: "600",
                },
            ],
        },
        extend: {
            variants: {
                height: ["responsive", "hover", "focus"],
            },
            fontFamily: {
                genos: ["var(--font-genos)"],
                dmSans: ["var(--font-dmSans)"],
            },
            colors: {
                white: { 100: "#FCFCFC", 40: "#FCFCFC66", 20: "#FCFCFC33" },
                grey: { 100: "#E6E6E6", 200: "#A0A0A0" },
                accent: "#B0DB82",
                navy: "#0D3747",
            },
        },
    },
    plugins: [],
};
export default config;
