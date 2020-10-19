import React from 'react';
import { useRef } from 'react';
import styles from './styles/header.module.css';

const Header = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.symbol}>
        <img className={styles.logo} src='/images/logo.png' alt='header logo' />
        <h1 className={styles.title}>Subtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type='search'
        placeholder='Search...'
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type='subimt' onClick={onClick}>
        <img
          className={styles.searchBtn}
          src='/images/search.png'
          alt='search'
        />
      </button>
    </header>
  );
};

export default Header;
