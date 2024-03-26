import { useState } from "react";

export const useForm = () => {
    const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");


    const handleNewNameValue = (event) => {
        setNewName(event.target.value);
    }

    const handleNewNumberValue = (event) => {
        setNewNumber(event.target.value);
    }
    return {
        newName,
        newNumber,
        handleNewNameValue,
        handleNewNumberValue
    }
}