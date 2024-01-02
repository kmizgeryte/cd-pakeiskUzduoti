// Inputs.jsx
import React from 'react';

function Inputs({ firstName, lastName, age, onFirstNameChange, onLastNameChange, onAgeChange }) {
  return (
    <>
      <input id="firstName" type="text" placeholder="vardas" value={firstName} onChange={onFirstNameChange} />
      <input id="lastName" type="text" placeholder="pavardė" value={lastName} onChange={onLastNameChange} />
      <input id="age" type="number" placeholder="amžius" value={age} onChange={onAgeChange} />
    </>
  );
}

export default Inputs;
