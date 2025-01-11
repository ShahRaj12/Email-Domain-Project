import React, { useState } from "react";
import { Input, Button } from "antd";

export const AutocompleteInput = ({ recipients, onAddEmail, onSearch }) => {
  const [input, setInput] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (/\S+@\S+\.\S+/.test(input)) {
      onAddEmail(input);
      setInput("");
    } else {
      alert("Invalid email format");
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value); // Pass the search term to parent component
  };


  return (
    <div className="autocomplete-input" style={{ display: 'flex', alignItems: 'center', marginTop:"5%" }}>
    <div style={{ marginRight: '10px' }}>
      <Input
        type="text"
        value={inputValue}
        placeholder="Search by email or domain..."
        onChange={handleInputChange}
      />
    </div>
    <div style={{ marginRight: '10px' }}>
      <Input
        type="text"
        value={input}
        placeholder="Enter email or domain"
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
    <Button onClick={handleAdd}>Add</Button>
  </div>  
  );
};
