import Link from "next/link";
import Head from "next/head";
import { Card } from "antd";
import { surah } from "../../utils/interface";
import style from "../../styles/Home.module.css";
import image from "../../public/assets/img/image6.png"
import Image from "next/image";

const { Meta } = Card;

export const getStaticProps = async () => {
  const res = await fetch("https://api.alquran.cloud/v1/surah");
  const repo = await res.json();
  return { props: { repo } };
};

interface surahData {
  code: number;
  repo: {
    data: surah[];
  };
  status: string;
}

const Surah = ({ repo }: surahData) => {
  return (
    <div className={style.surahdiv}>
      <Head>
        <title>All Quran page</title>
        <meta name="Farhod" content="this is test" />
      </Head>
      {repo?.data?.map((p: surah) => (
        <Link key={p.number} href={`/surah/${p.number}`}>
          <Card style={{ width: 300, marginTop: 16 }}>
           <div className={style.card1}>
            <div>
              <Image src={image} alt="rasm" width={50} height={50} layout="intrinsic" ></Image>
            </div>
           <Meta
              title={p.englishName}
              description={p.name}
            />
           </div>
            <br />
            <p>Ayahs {p.numberOfAyahs}</p>
          </Card>
        </Link>
      ))}
    </div>
  );
};
export default Surah;
