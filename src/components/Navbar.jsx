import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaHome, FaCompass, FaMusic } from 'react-icons/fa';
import { auth } from '../firebase';

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <NavLink to="/">MusicApp</NavLink>
      </div>
      <ul className={styles.navlinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.navlink} ${isActive ? styles.active : ''}`
            }
          >
            <FaHome />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/browse"
            className={({ isActive }) =>
              `${styles.navlink} ${isActive ? styles.active : ''}`
            }
          >
            <FaCompass />
            <span>Browse</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/playlists"
            className={({ isActive }) =>
              `${styles.navlink} ${isActive ? styles.active : ''}`
            }
          >
            <FaMusic />
            <span>Playlists</span>
          </NavLink>
        </li>
      </ul>
      <div className={styles.authButtons}>
        {user ? (
          <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/login" className={styles.loginButton}>
              Login
            </NavLink>
            <NavLink to="/signup" className={styles.signupButton}>
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
