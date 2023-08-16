import {single} from "../../utils/interface"
import style from "../../styles/Home.module.css"
export const getStaticPaths = async () => {
  const res = await fetch(`https://api.alquran.cloud/v1/surah`);
  const repo = await res.json();
  const paths = repo?.data?.map((p: any) => {
    return {
      params: {
        number: `${p?.number}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { params } = context;

  const res = await fetch(
    `https://quranenc.com/api/v1/translation/sura/uzbek_mansour/${params.number}`
  );
  const repo = await res.json();

  return { props: { repo } };
};

import React from "react";

const SingleProps = ({ repo }: any) => {
  console.log(repo);

  return (
    <>
      <div className={style.card2}>
        {repo?.result?.map((p: single, index:number) => (
            <div className={style.single} key={index}>
              <h3>{p.arabic_text}</h3>
              <p>{p.footnotes}</p>
              <p>{p.aya}</p>
              <p>{p.translation}</p>
            </div>
        ))}
      </div>
    </>
  );
};

export default SingleProps;
