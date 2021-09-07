import GoToTop from "../components/GoToTop";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoToTop />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
