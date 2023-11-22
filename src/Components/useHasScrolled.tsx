import React from 'react';

export const useHasScrolled = () => {
    const [hasScrolled, setHasScrolled] = React.useState<boolean>(false);

    const handleScrollEvent = () => setHasScrolled(true);

    React.useEffect(() => {
        if (!hasScrolled) {
            window.addEventListener("scroll", handleScrollEvent);
        }
        return () =>
           window.removeEventListener("scroll", handleScrollEvent);
    }, []);

    return {hasScrolled};
}