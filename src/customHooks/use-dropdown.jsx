import { useState, useEffect, useCallback } from "react";

const useDropdown = (selector) => {
    selector = selector.current;

    const [drop, setDrop] = useState(false); //to be moved to individual component if need arises

    const toggleDrop = useCallback(toggleState => {
        setDrop(toggleState !== undefined ? Boolean(toggleState) : !drop);
    }, [drop]);

    const onWindowClick = useCallback(ev => {
        const clickOnDrop =
            selector && (ev.target === selector || selector.contains(ev.target));

        if ( !clickOnDrop && drop === true) {
            toggleDrop(false);
        }
    }, [drop, selector, toggleDrop]);

    useEffect(() => {
        window.addEventListener("click", onWindowClick);
        return () => window.removeEventListener("click", onWindowClick);
    });

    return [drop, toggleDrop];
}

export default useDropdown;
