import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import BookSearch from './components/BookSearch';
import styles from './App.module.css';

function App({ signOut, user }) {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Library App</h1>
        <div className={styles.userInfo}>
          <span>Welcome, {user.username}</span>
          <button onClick={signOut} className={styles.signOutButton}>Sign out</button>
        </div>
      </header>
      <main className={styles.main}>
        <BookSearch />
      </main>
    </div>
  );
}

export default withAuthenticator(App);
