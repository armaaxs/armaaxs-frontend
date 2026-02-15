"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";

interface SmoothCursorProps {
    className?: string;
}

export function SmoothCursor({ className }: SmoothCursorProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const prevPosition = useRef({ x: 0, y: 0 });
    const currentAngle = useRef(0);

    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const rotation = useMotionValue(0);

    const springX = useSpring(cursorX, { damping: 20, stiffness: 300, mass: 0.5 });
    const springY = useSpring(cursorY, { damping: 20, stiffness: 300, mass: 0.5 });
    const springRotation = useSpring(rotation, { damping: 30, stiffness: 180, mass: 0.2 });

    const updatePosition = useCallback(
        (e: MouseEvent) => {
            const deltaX = e.clientX - prevPosition.current.x;
            const deltaY = e.clientY - prevPosition.current.y;

            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            if (distance > 5) {
                // Calculate target angle
                let targetAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 135;

                // Normalize to find shortest rotation path (allows anticlockwise)
                let diff = targetAngle - currentAngle.current;

                // Normalize difference to -180 to 180 range
                while (diff > 180) diff -= 360;
                while (diff < -180) diff += 360;

                currentAngle.current = currentAngle.current + diff;
                rotation.set(currentAngle.current);
            }

            prevPosition.current = { x: e.clientX, y: e.clientY };
        },
        [cursorX, cursorY, rotation]
    );

    const handleMouseEnter = useCallback(() => setIsVisible(true), []);
    const handleMouseLeave = useCallback(() => setIsVisible(false), []);

    useEffect(() => {
        document.addEventListener("mousemove", updatePosition);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            document.removeEventListener("mousemove", updatePosition);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [updatePosition, handleMouseEnter, handleMouseLeave]);

    if (isTouchDevice) return null;

    return (
        <motion.div
            className={cn(
                "pointer-events-none fixed left-0 top-0 z-[9999]",
                className
            )}
            style={{
                x: springX,
                y: springY,
                rotate: springRotation,
                opacity: isVisible ? 1 : 0,
                transformOrigin: "8px 5px",
            }}
        >
            <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M5.5 3.21V20.8C5.5 21.65 6.53 22.11 7.16 21.51L10.72 18.12C10.89 17.96 11.11 17.87 11.34 17.87H17.5C18.49 17.87 19.07 16.73 18.49 15.95L7.16 3.05C6.55 2.23 5.5 2.59 5.5 3.21Z"
                    fill="white"
                    stroke="black"
                    strokeWidth="1"
                />
            </svg>
        </motion.div>
    );
}
