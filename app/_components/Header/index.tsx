import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import Menu from '../Menu';

export default function Header() {
    return (
        <header className={styles.header}>
        <Link href="/" className={styles.logoLink}>
        <span className={styles.logo}>Portfolio</span>
            </Link>
            <Menu />
        </header>
    );
}