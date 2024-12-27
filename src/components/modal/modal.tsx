import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';

const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
    closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
};

interface Project {
    src: string;
    color: string;
}

interface ModalProps {
    modal: {
        active: boolean;
        index: number;
    };
    projects: Project[];
}

export default function Modal({ modal, projects }: ModalProps) {
    const { active, index } = modal;
    const modalContainer = useRef<HTMLDivElement | null>(null);
    const cursor = useRef<HTMLDivElement | null>(null);
    const cursorLabel = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Move Container
        const xMoveContainer = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
        const yMoveContainer = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });
        // Move cursor
        const xMoveCursor = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
        const yMoveCursor = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });
        // Move cursor label
        const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
        const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });

        const handleMouseMove = (e: MouseEvent) => {
            const { pageX, pageY } = e;
            xMoveContainer(pageX);
            yMoveContainer(pageY);
            xMoveCursor(pageX);
            yMoveCursor(pageY);
            xMoveCursorLabel(pageX);
            yMoveCursorLabel(pageY);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <motion.div
                ref={modalContainer}
                variants={scaleAnimation}
                initial="initial"
                animate={active ? "enter" : "closed"}
                className="absolute w-[25rem] h-[21.875rem] bg-white overflow-hidden flex items-center justify-center pointer-events-none"
            >
                <div style={{ top: `${index * -100}%` }} className="absolute w-full h-full transition-top ease-[cubic-bezier(0.76,0,0.24,1)]">
                    {projects.map((project, index) => {
                        const { src, color } = project;
                        return (
                            <div
                                className="w-full h-full flex items-center justify-center"
                                style={{ backgroundColor: color }}
                                key={`modal_${index}`}
                            >
                                <Image
                                   src={`/images/${src}`}
                                    width={300}
                                    height={0}
                                    alt="image"
                                    className="h-auto"
                                />
                            </div>
                        );
                    })}
                </div>
            </motion.div>
            <motion.div
                ref={cursor}
                className="absolute w-[5rem] h-[5rem] rounded-full bg-yellow flex items-center justify-center text-white text-sm font-light pointer-events-none z-2"
                variants={scaleAnimation}
                initial="initial"
                animate={active ? "enter" : "closed"}
            />
            <motion.div
                ref={cursorLabel}
                className="absolute w-[5rem] h-[5rem] rounded-full bg-transparent flex items-center justify-center text-white text-sm font-light pointer-events-none z-2"
                variants={scaleAnimation}
                initial="initial"
                animate={active ? "enter" : "closed"}
            >
                View
            </motion.div>
        </>
    );
}
