import { useEffect, useState } from "react";

const useIsMobile = (MOBILE_BREAKPOINT = 768) => {
    const [isMobile, setIsMobile] = useState(
        window.innerWidth <= MOBILE_BREAKPOINT
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [MOBILE_BREAKPOINT]);

    return {isMobile};
}

export default useIsMobile;
