import styles from "./page.module.css";
import Image from "next/image"; 
import { getBlogList } from "@/app/_libs/microcms";
import { TOP_BLOG_LIMIT } from "@/app/_constants";
import ButtonLink from "@/app/_components/ButtonLink";
import BlogList from "@/app/_components/Bloglist";

export const revalidate = 60


export default async function Home(){
  const data = await getBlogList({
    limit: TOP_BLOG_LIMIT,
  });

  return(
    <>
    <section className={styles.top}>
    <div className={styles.box}>
      <div className={`${styles.wave} ${styles.one}`}></div>
      <div className={`${styles.wave} ${styles.two}`}></div>
      <div className={`${styles.wave} ${styles.three}`}></div>
      <div className={styles.title}>Portfolio</div>
    </div>
    
    

    
    </section>
    
    <section className={styles.about}>
      <div className={styles.aboutTitle}>About Me</div>
      <div className={styles.aboutText}>
        <p>三上 春陽</p>
        <p>京都デザイン＆テクノロジー専門学校で勉強中</p>
      </div>
      <div className={styles.aboutLink}>
      <ButtonLink href="/about">もっとみる</ButtonLink>
      </div>
      </section>

    <section className={styles.blog}>
      <h2 className={styles.blogTitle}>Blog</h2>
      <BlogList blog={data.contents} />
    <div className={styles.blogLink}>
    <ButtonLink href="/blog">もっとみる</ButtonLink>
    </div>

    </section>
    </>
  );
}
