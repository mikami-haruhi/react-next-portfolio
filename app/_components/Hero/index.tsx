import Image from "next/image";
import styles from "./index.module.css";

type Props = {
    title: string;
};

export default function Hero({title}: Props) {
    return(
        <section className={styles.container}>
        <div className={styles.box}>
        <div className={`${styles.wave} ${styles.one}`}></div>
        <div className={`${styles.wave} ${styles.two}`}></div>
        <div className={`${styles.wave} ${styles.three}`}></div>
        <div className={styles.title}>{title}</div>
        </div>
        
        
    
        
        </section>
        
    );
}