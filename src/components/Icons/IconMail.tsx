import { IconProps } from "@/types/iconProps.interface";

export const IconMail = ({ className }: IconProps) => {
    return (
        <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="Mail icon"
        >
            <circle
                cx="17.4245"
                cy="17.5854"
                r="16.3617"
                stroke="currentColor"
            />
            <path
                d="M22.97 15.0573L17.6366 18.3906L12.3033 15.0573V13.724L17.6366 17.0573L22.97 13.724M22.97 12.3906H12.3033C11.5633 12.3906 10.97 12.984 10.97 13.724V21.724C10.97 22.0776 11.1104 22.4167 11.3605 22.6668C11.6105 22.9168 11.9497 23.0573 12.3033 23.0573H22.97C23.3236 23.0573 23.6627 22.9168 23.9128 22.6668C24.1628 22.4167 24.3033 22.0776 24.3033 21.724V13.724C24.3033 13.3703 24.1628 13.0312 23.9128 12.7811C23.6627 12.5311 23.3236 12.3906 22.97 12.3906Z"
                fill="currentColor"
            />
        </svg>
    );
};
