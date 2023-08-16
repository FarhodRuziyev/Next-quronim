import { NextPage, GetStaticProps } from "next";
import { Navbar } from "../utils/axios";

interface Props {
  children: React.ReactNode | React.ReactElement;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div className="pages">
      {/* <Navbar /> */}
      {children}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  };
};

export default Layout;
