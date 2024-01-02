// Table.jsx
import React from 'react';

function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Vardas</th>
          <th className="darker">Parvardė</th>
          <th>Amžius</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
