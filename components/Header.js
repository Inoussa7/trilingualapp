import React from 'react';
import styles from './Header.module.css';
export default Header;

function Header() {
  return (
    <header className={styles.header}>
      <h1>Welcome to TEAC 882B</h1>
      <h1>Database and Interactive Web Development Week 11</h1>
      <h1>Trilingual Learning App</h1>
      <nav className={styles.nav}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Sign up</a></li>
          <li><a href="/courses">Courses</a></li>
        </ul>
      </nav>
    </header>
  );
}

