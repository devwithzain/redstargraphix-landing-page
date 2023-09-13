export const navVariants = {
    hidden: {
        opacity: 0,
        y: "-100%",
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            delay: 0.5,
        },
    },
};

export const clientVariants = {
    hidden: {
        x: "100%",
        rotate: 120,
        opacity: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        x: 0,
        opacity: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            duration: 1.8,
            delay: 0.5,
        },
    },
};


export const portVariants = {
    hidden: {
        x: "-100%",
        rotate: 120,
        opacity: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        x: 0,
        opacity: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            duration: 1.8,
            delay: 0.5,
        },
    },
};


export const heroVariants = {
    hidden: {
        x: "-100%",
        rotate: 120,
        opacity: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        x: 0,
        rotate: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            delay: 0.5,
        },
    },
};

export const heroVariants1 = {
    hidden: {
        x: "100%",
        rotate: 120,
        opacity: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        x: 0,
        rotate: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            delay: 0.5,
        },
    },
};


export const serviceVariants = {
    hidden: {
        x: "-100%",
        opacity: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 80,
        },
    },
};

export const footerVariants = {
    hidden: {
        opacity: 0,
        y: "50%",
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            duration: 1.8,
            delay: 0.5,
        },
    },
};



