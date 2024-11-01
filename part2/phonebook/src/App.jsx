/* eslint-disable react/jsx-key */
import { useState } from "react";

export const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "123456" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addNewName = (event) => {
    setNewName(event.target.value);
  };

  const addNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleNewNameSubmit = (event) => {
    event.preventDefault();
    if (
      persons.find((existingPerson) => existingPerson.name === newName) !==
      undefined
    ) {
      window.alert(`${newName} is already added to phonebook.`);
    } else {
      const newNameObject = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(newNameObject), newNameObject);
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNewNameSubmit}>
        <div>
          Name: <input onChange={addNewName} value={newName} />
        </div>
        <div>
          Number: <input onChange={addNewNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <li key={person.name}>
          {person.name}: {person.number}
        </li>
      ))}
    </div>
  );
};
