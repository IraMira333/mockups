import { IconProps } from "@/types/iconProps.interface";

export const IconPhone = ({ className }: IconProps) => {
    return (
        <svg
            width="35"
            height="34"
            viewBox="0 0 35 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="Phone icon"
        >
            <circle
                cx="17.4245"
                cy="16.8617"
                r="16.3617"
                stroke="currentColor"
            />
            <path
                d="M24.0553 19.9424C23.9438 20.7893 23.5279 21.5666 22.8852 22.1293C22.2425 22.6919 21.4169 23.0014 20.5627 22.9999C15.6002 22.9999 11.5627 18.9624 11.5627 13.9999C11.5612 13.1457 11.8707 12.3201 12.4333 11.6774C12.996 11.0347 13.7734 10.6188 14.6202 10.5074C14.8344 10.4812 15.0513 10.525 15.2385 10.6323C15.4257 10.7395 15.5732 10.9044 15.659 11.1024L16.979 14.0492V14.0567C17.0447 14.2083 17.0718 14.3737 17.058 14.5383C17.0441 14.7029 16.9897 14.8614 16.8996 14.9999C16.8884 15.0167 16.8765 15.0324 16.864 15.048L15.5627 16.5905C16.0309 17.5417 17.0259 18.528 17.9896 18.9974L19.5109 17.703C19.5258 17.6904 19.5415 17.6788 19.5577 17.668C19.6961 17.5758 19.8552 17.5194 20.0207 17.5042C20.1863 17.4889 20.353 17.5151 20.5059 17.5805L20.514 17.5842L23.4584 18.9036C23.6567 18.9891 23.822 19.1365 23.9296 19.3237C24.0372 19.511 24.0813 19.728 24.0553 19.9424Z"
                fill="currentColor"
            />
        </svg>
    );
};
