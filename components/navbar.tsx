import { NextPage, GetStaticProps } from "next";
import style from "../styles/Home.module.css";
import Link from "next/link";
interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  return (
    <nav className={style.navbar}>
      <div>
        <h1>Quronim</h1>
      </div>
      <ul className={style.ul}>
        <Link href='/'><li>Home</li></Link>
        <Link href="/surah"><li>About</li></Link>
      </ul>
    </nav>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  };
};

export default Navbar;
