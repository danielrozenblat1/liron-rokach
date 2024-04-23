import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.css';
import {Link as ScrollLink } from 'react-scroll';
import logo from "../../images/לירון רוקח לוגו.png"
const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [width,setWidth]=useState(window.innerWidth)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
        document.body.style.overflow = 'hidden';
    } 
  };
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {

    window.addEventListener("scroll", handleScroll);

    console.log(window.pageYOffset)
}, [props.scrolled]);


  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflowY = 'auto';
  };

 
    

 


  return (
    <>
      <nav className={scrolled ? styles.floatNav :  styles.navbar}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
          <img className={styles.image} src={logo} alt="לירון רוקח לוגו"/>
          </div>
        </div>
       {width<850 && <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>}
        {width>=850 && <div className={styles.row}>
        <ScrollLink to="צור קשר" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>צור קשר</div></ScrollLink>
        <ScrollLink to="שאלות נפוצות" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>שאלות נפוצות</div></ScrollLink>
        <ScrollLink to="קצת עלי" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>קצת עלי</div></ScrollLink>
          </div>}
        <div className={`${styles.navLinks} ${isOpen ? styles.openLinks : ''}`}>
          <div className={styles.closeButton} onClick={closeMenu}>
            &times;
          </div>
          <ul>
            <li><ScrollLink onClick={closeMenu} to="צור קשר" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>צור קשר</div></ScrollLink></li>
            <li ><ScrollLink onClick={closeMenu} to="שאלות נפוצות" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>שאלות נפוצות</div></ScrollLink></li>
            <li ><ScrollLink  onClick={closeMenu} to="קצת עלי" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>קצת עלי</div></ScrollLink></li>
      
          </ul>
        </div>
      </nav>
      {isOpen && (
        <div className={`${styles.overlay} ${styles.openOverlay}`}></div>
      )}
    </>
  );
};

export default NavBar;
