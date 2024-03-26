import { useState } from "react";

export const useFormFilter = () => {
	const [newFilter, setNewFilter] = useState("");

    const handleNewFilterValue = (newValue) => {
        setNewFilter(newValue);
    }

    return {
        newFilter,
        handleNewFilterValue
    };
}