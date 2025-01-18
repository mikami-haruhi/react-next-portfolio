import Image from "next/image";
import {getMembersList} from "@/app/_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "@/app/_constants";
import styles from "./page.module.css";

export default async function Page(){
    const data = await getMembersList({ limit: MEMBERS_LIST_LIMIT });
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
                <p className={styles.empty}>メンバーが登録されていません。</p>
            ) : (
                <ul>
                    {data.contents.map((member) =>(
                        <li key={member.id} className={styles.list}>
                            <Image
                            src={member.image.url}
                            alt=""
                            width={member.image.width}
                            height={member.image.height}
                            className={styles.image}
                            />
                            <dl>
                                <dt className={styles.name}>{member.name}</dt>
                                <dd className={styles.position}>{member.position}</dd>
                                <dd className={styles.profile}>{member.profile}</dd>
                            </dl>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
