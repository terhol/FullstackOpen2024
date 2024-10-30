/* eslint-disable react/jsx-key */
import { useState } from "react";

export const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNameSubmit = (event) => {
    event.preventDefault();
    if (
      persons.find((existingPerson) => existingPerson.name === newName) !==
      undefined
    ) {
      console.log("Name exists");
    } else {
      const newNameObject = {
        name: newName,
      };
      setPersons(persons.concat(newNameObject), newNameObject);
      setNewName("");
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
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </div>
  );
};
