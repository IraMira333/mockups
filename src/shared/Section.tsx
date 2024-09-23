import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
    return (
        <section
            className={`container px-4 tab:px-10 pc:px-[60px] scroll-mt-[90px] pc:scroll-mt-[30px] ${className}`}
            id={id}
        >
            {children}
        </section>
    );
};
