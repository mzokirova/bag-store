import { NavLink, Link } from "react-router-dom";
import styles from './Header.module.scss';
import Button from '/src/components/Button/Button'
function Header() {
    return (  
        <>
            <header className={styles.header}>
                <nav className={styles['header-nav']}>
                    <Link to='/'><img src="/src/assets/images/logo.png" alt="" /></Link>
                    <ul className={styles['nav-list']}>
                        <li className={styles['nav-link']}>
                            <NavLink to='/'>Home</NavLink>
                       </li>
                        <li className={styles['nav-link']}>
                            <NavLink  to='/feature'>Feature</NavLink>
                       </li>
                        <li className={styles['nav-link']}>
                            <NavLink  to='/about'>About</NavLink>
                        </li>
                        <li className={styles['nav-link']}>
                            <NavLink  to='/category'>Product</NavLink>
                        </li>
                        <li className={styles['nav-link']}>
                            <NavLink to='/shop'><Button text='Shop Now'/></NavLink>
                        </li>
                   </ul>

                </nav>
                
            </header>
        </>
    );
}

export default Header;