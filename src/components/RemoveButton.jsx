export const RemoveButton = ({ id, persons, setPersons }) => {
    const deletePerson = () => {
        const personToDelete = persons.find(person => person.id === id);
        if (window.confirm(`Delete ${personToDelete.name}?`)) {
            fetch(`http://localhost:3001/persons/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .catch(error => {
                    console.log(error)
                });
            setPersons(persons.filter(person => person.id !== id));
        }
    }
    return (
        <button onClick={ deletePerson }>delete</button>
    );
}