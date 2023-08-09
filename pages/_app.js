import "./globals.scss";
import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}
