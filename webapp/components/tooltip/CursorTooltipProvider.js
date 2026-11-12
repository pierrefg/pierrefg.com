'use client';

import './style.css';

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

const CursorTooltipContext = createContext(null);

export function useCursorTooltip() {
    const context = useContext(CursorTooltipContext);

    if (!context) {
        throw new Error(
            "useCursorTooltip doit être utilisé dans <CursorTooltipProvider>"
        );
    }

    return context;
}

export default function CursorTooltipProvider({ children }) {
    const [tooltip, setTooltip] = useState(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const showTooltip = useCallback((content, event) => {
        setTooltip(content);
        setPosition({
            x: event.clientX,
            y: event.clientY,
        });
    }, []);

    const hideTooltip = useCallback(() => {
        setTooltip(null);
    }, []);

    const moveTooltip = useCallback((event) => {
        setPosition({
            x: event.clientX,
            y: event.clientY,
        });
    }, []);

    useEffect(() => {
        if (!tooltip) return;

        const handleMouseMove = (event) => {
            moveTooltip(event);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [tooltip, moveTooltip]);

    const value = useMemo(
        () => ({ showTooltip, hideTooltip }),
        [showTooltip, hideTooltip]
    );

    return (
        <CursorTooltipContext.Provider value={value}>
            {children}

            {tooltip && (
                <div
                    className="pointer-events-none fixed z-50 max-w-xs tooltip"
                    style={{
                        left: position.x + 12,
                        top: position.y + 12,
                    }}
                >
                    {tooltip}
                </div>
            )}
        </CursorTooltipContext.Provider>
    );
}