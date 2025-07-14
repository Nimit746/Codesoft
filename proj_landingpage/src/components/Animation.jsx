import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const Animation = ({ children, entry = '', exit = '', delay = 0 }) => {
    const [ref, inView] = useInView({
        threshold: 0.5, // triggers earlier than full visibility
    });

    const [animationClass, setAnimationClass] = useState('');
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (inView) {
            // Clear any pending exit animations
            clearTimeout(timeoutRef.current);
            setAnimationClass(entry);
        } else {
            // Delay exit animation for smoother scroll out
            timeoutRef.current = setTimeout(() => {
                setAnimationClass(exit);
            }, 200);
        }

        // Cleanup
        return () => clearTimeout(timeoutRef.current);
    }, [inView, entry, exit]);

    return (
        <div
            ref={ref}
            className={animationClass}
            style={{ animationDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
};

export default Animation;
