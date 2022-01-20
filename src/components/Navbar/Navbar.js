import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';
import userIcon from '../../images/userLogo.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS  ',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES ',
    },
  ];
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <h2>Bookstore CMS</h2>
        <ul className={styles.navbar_list}>
          {links.map((link) => (
            <li className={styles.linkTexts} key={link.id}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.navbarRight}>
        <img src={userIcon} width={25} alt="User logo" />
      </div>
    </nav>
  );
};
export default Navbar;
