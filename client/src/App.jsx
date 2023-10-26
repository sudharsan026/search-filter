import React, { useEffect, useState } from "react";
import "./App.css";
import { Users } from "./users";
import Table from "./Table";
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`http://localhost:5000/?que=${query}`);
      setData(response.data);
    };
    if (query.length === 0 || query.length > 2) fetchUsers();
  }, [query]);
  return (
    <div className="app">
      <input
        className="search"
        type="text"
        placeholder="Search.."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <Table data={data} />
    </div>
  );
};

export default App;
