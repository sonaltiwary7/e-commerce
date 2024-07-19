import React, { useState } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Form inline onSubmit={handleSearch}>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="outline-success" type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;
