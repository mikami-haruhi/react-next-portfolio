import Image from "next/image";
import {getAboutList} from "@/app/_libs/microcms";
import { ABOUT_LIST_LIMIT } from "@/app/_constants";
import styles from "./page.module.css";

export default async function Page(){
    const data = await getAboutList({ limit: ABOUT_LIST_LIMIT });
    return(
        
        <div className={styles.container}>
            <section className={styles.about}>
        <div className={styles.aboutTitle}>About Me</div>
        <div className={styles.aboutText}>
    <p className={styles.name}>三上 春陽</p>
    <p className={styles.study}>京都デザイン＆テクノロジー専門学校で学んでいます。</p>
    <p className={styles.skills}>現在学んでいる内容: Next.js, Pythonなど</p>
        </div>
</section>

            {data.contents.length === 0 ? (
                <p className={styles.empty}>作品がありません。</p>
            ) : (
                <ul>
                     <h1 className={styles.title}>作品集</h1>
                    {data.contents.map((about) =>(
                        <li key={about.id} className={styles.list}>
                            <Image
                            src={about.image.url}
                            alt=""
                            width={about.image.width}
                            height={about.image.height}
                            className={styles.image}
                            />
                            <dl>
                                <dt className={styles.name}>{about.title}</dt>
                                <dd className={styles.profile}>{about.explanation}</dd>
                            </dl>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
