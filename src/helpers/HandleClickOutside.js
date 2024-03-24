import { useEffect } from "react";

export const outsideClickAlert = (ref, onClose) => {
    useEffect(() => {
        const handleClickOut = (evt) => {
            if (ref.current && !ref.current.contains(evt.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOut);
        return () => {
            document.removeEventListener("mousedown", handleClickOut);
        };
    }, [ref]);
};
