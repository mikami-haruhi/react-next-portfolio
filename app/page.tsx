import styles from "./page.module.css";
import Image from "next/image"; 
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";

export const revalidate = 60


export default async function Home(){
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return(
    <>
    <section className={styles.top}>
    <div className={styles.box}>
      <div className={`${styles.wave} ${styles.one}`}></div>
      <div className={`${styles.wave} ${styles.two}`}></div>
      <div className={`${styles.wave} ${styles.three}`}></div>
      <div className={styles.title}>Portfolios</div>
    </div>
    
    

    
    </section>
    
    <section className={styles.about}>
      <div className={styles.aboutTitle}>About Me</div>
      <div className={styles.aboutText}>
        <p>三上 春陽</p>
        <p>京都デザイン＆テクノロジー専門学校で勉強中</p>
      </div>
      </section>

    <section className={styles.news}>
      <h2 className={styles.newsTitle}>News</h2>
      <NewsList news={data.contents} />
    <div className={styles.newsLink}>
    <ButtonLink href="/news">もっとみる</ButtonLink>
    </div>

    </section>
    </>
  );
}
