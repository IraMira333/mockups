"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

export const WaveAnimation = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className: string;
}) => {
    const [hovered, setHovered] = useState(false);
    const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
    const size = 300;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setHoverPos({ x, y });
    };

    return (
        <div
            className={`relative overflow-hidden mb-4 tab:flex tab:p-5 ${className}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
        >
            {hovered && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 6 }}
                    exit={{ scale: 0 }}
                    style={{
                        position: "absolute",
                        top: hoverPos.y - size / 2,
                        left: hoverPos.x - size / 2,
                        width: `${size}px`,
                        height: `${size}px`,
                        backgroundColor: "var(--color-accent)",
                        borderRadius: "50%",
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
            )}
            {children}
        </div>
    );
};
