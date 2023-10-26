import React from "react";
import "./Table.css";
const Table = ({ data }) => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
        {data.map((_data) => (
          <tr key={_data.id}>
            <td>{_data.name}</td>
            <td>{_data.username}</td>
            <td>{_data.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
