import { useEffect, useState } from 'react';
//import axios from 'axios';
//import styles from './SearchBar.module.css';

const SearchBar = () => {
    const [value, setValue] = useState('');
  return (
    <div >
      <input
        type="text"
        
        placeholder="Search data..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );

}
export default SearchBar;