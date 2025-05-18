import styles from "./Navbar.module.css";
import {useState,useEffect} from 'react';
import {Link,useLocation} from 'react-router-dom';
//import {getImageUrl} from "../../utils";
export const Navbar = () =>{
    const[menuOpen,setMenuOpen]=useState(false);
    const {pathname}=useLocation();
    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname]);
    return (
    <nav className={styles.navbar}>
        <a href="/" ><img className={styles.logo} src="/assets/S .png"/></a>
        <div className={styles.menu}>
        <img className={styles.menuBtn} 
        src={menuOpen 
        ? "/assets/image 17.png" 
        : "/assets/menu.png"} 
        alt="menu-button" 
        onClick={()=>setMenuOpen(!menuOpen)}
        />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>setMenuOpen(false)}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/skills">Skills</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
    );
};
