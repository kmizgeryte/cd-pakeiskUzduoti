import { useState } from 'react'
import './App.css'

import Inputs from './component/Inputs';
import Button from './component/Button';
import Table from './component/Table';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [data, setData] = useState([
    { firstName: 'Jonas', lastName: 'Rimkus', age: 54 },
    { firstName: 'Vestina', lastName: 'Petronytė', age: 31 },
    { firstName: 'Marius', lastName: 'Dulinskas', age: 23 },
  ]);

  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);

  const handleAdd = () => {
    if (firstName && lastName && age > 0) {
      const newData = [...data, { firstName, lastName, age }];
      setData(newData);
      setFirstName('');
      setLastName('');
      setAge(0);
    } else if (age <= 0) {
      alert('Pataisykite amžių');
    } else {
      alert('Užpildykite visus langelius');
    }
  };

  const handleRemoveFirst = () => {
    if (data.length === 0) {
      alert('Jau viską ištrynei');
      return;
    }

    const newData = [...data];
    newData.shift();
    setData(newData);
  };

  const handleRemoveLast = () => {
    if (data.length === 0) {
      alert('Jau viską ištrynei');
      return;
    }

    const newData = [...data];
    newData.pop();
    setData(newData);
  };

  return (
    <div>
      <h1>Append table</h1>
      <div className="inputs">
        <Inputs
          firstName={firstName}
          lastName={lastName}
          age={age}
          onFirstNameChange={handleFirstNameChange}
          onLastNameChange={handleLastNameChange}
          onAgeChange={handleAgeChange}
        />
      </div>
      <div className="buttons">
        <Button id="add" onClick={handleAdd}>
          Pridėti
        </Button>
        <Button id="removeFirst" onClick={handleRemoveFirst}>
          Ištrinti pirmą
        </Button>
        <Button id="removeLast" onClick={handleRemoveLast}>
          Ištrinti paskutinį
        </Button>
      </div>
      <Table data={data} />
    </div>
  );
}

export default App;