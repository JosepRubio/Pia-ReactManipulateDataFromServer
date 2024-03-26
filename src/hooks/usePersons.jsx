import { useEffect, useState } from "react";

export const usePersons = () => {
    const [persons, setPersons] = useState([]);

    const handleChangePersonsValue = (newValue) => {
        setPersons(newValue)
    }

    useEffect( () => {
        fetch('http://localhost:3001/persons')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                handleChangePersonsValue(data)
            })
            .catch((error) => alert(`ERROR: ${error}`))			
    }, [])

    return {
        persons,
        handleChangePersonsValue
    };
}

