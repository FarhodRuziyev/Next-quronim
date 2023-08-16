import dynamic from "next/dynamic";
import axios from "axios";
export const Layout = dynamic(() => import("../components/layout"), {
  loading: () => <p>Loading...</p>,
});
export const Navbar = dynamic(() => import("../components/navbar"), {
  loading: () => <p>Loading...</p>,
});

export const instance = axios.create({
  baseURL: "http://api.alquran.cloud/v1/",
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});