export const PersonForm = ({ newName, setNewName, newNumber, handleNewNumber, persons, setPersons }) => {

    const addNewPerson = (event) => {
        event.preventDefault();
        if (!persons.some(person => (person.name === newName))) {
            const existingPerson = persons.find(person => person.name === newName);
            if (existingPerson) {
                if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
                    fetch(`http://localhost:3001/persons/${existingPerson.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ 
                            ...existingPerson,
                            number: newNumber
                        })
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Failed to update person');
                        }
                        return response.json();
                    })
                    .then(data => {
                        setPersons(persons.map(person => person.id !== existingPerson.id ? person : data));
                    })
                    .catch(error => {
                        console.error('Error updating person:', error);
                    });
                }
            } else {
                const newPerson = {
                    id: Date.now(),
                    name: newName,
                    number: newNumber
                }
                setPersons([...persons, newPerson]);
                
                fetch('http://localhost:3001/persons', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newPerson)
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to add new person');
                    }
                    return response.json();
                })
                .then(data => {
                    setPersons([...persons, data]);
                    console.log(data);
                })
                .catch(error => {
                    console.error('Error adding new person:', error);
                });
            }
        } else {
            alert(`${newName} is already added to the phonebook`)
        }
    };

    return (
        <div>
            <h2>Add a New Person:</h2>
            <form onSubmit={addNewPerson}>
                <div>
                    <label htmlFor="new-Name">Name: </label>
                    <input id="new-Name" value={newName} onChange={e => setNewName(e.target.value)} />
                    <br /><br />
                    <label htmlFor="new-Number">Number: </label>
                    <input id="new-Number" value={newNumber} onChange={e => handleNewNumber(e.target.value)} />
                </div>
                <br /><br />
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    );
}
