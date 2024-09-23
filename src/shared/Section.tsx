import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
    return (
        <section
            className={`container px-4 scroll-mt-[90px] pc:scroll-mt-[30px] ${className}`}
            id={id}
        >
            {children}
        </section>
    );
};
