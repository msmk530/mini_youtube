import React from 'react';
import styles from './styles/header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.symbol}>
        <img className={styles.logo} src='/images/logo.png' alt='header logo' />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input className={styles.input} type='search' placeholder='Search...' />
      <button className={styles.button} type='subimt'>
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
