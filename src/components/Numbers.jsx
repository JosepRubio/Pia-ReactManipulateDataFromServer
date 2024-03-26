import { RemoveButton } from "./RemoveButton";
export const Numbers = ({ persons, newFilter }) => {
    return (
        <div>
            <h2>Numbers</h2>
            <ul>
                {
                    persons
                        .filter(person => (
                            person.name.includes(newFilter)
                        ))
                        .map((person, i) => (
                            <li key={i}>
                                {person.name} {person.number} <RemoveButton id={person.id} persons={persons} setPersons={persons} />
                            </li>
                        ))
                }
            </ul>
        </div>
    );
}