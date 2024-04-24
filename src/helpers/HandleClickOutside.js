import { useEffect } from "react";

export const outsideClickAlert = (ref, callback) => {
    useEffect(() => {
        const handleClickOut = (evt) => {
            if (ref.current && !ref.current.contains(evt.target)) {
                callback();
            }
        };
        document.addEventListener("mousedown", handleClickOut);
        return () => {
            document.removeEventListener("mousedown", handleClickOut);
        };
    }, [ref , callback]);
};
