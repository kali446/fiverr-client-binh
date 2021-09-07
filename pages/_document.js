import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* favicon */}
          {/* <link rel="icon" type="image/png" href="/assets/images/favicon.png" /> */}

          {/* CSS files */}
          <link rel="stylesheet" href="/plugins/bootstrap/bootstrap.min.css" />
          <link
            rel="stylesheet"
            href="/plugins/line-awesome/css/line-awesome.min.css"
          />
          <link rel="stylesheet" href="/plugins/swiper/swiper-bundle.min.css" />

          {/* main stylesheet */}
          <link href="/assets/css/style.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* JS files */}
          <script src="/plugins/jquery/jquery.min.js" />
          <script src="/plugins/bootstrap/bootstrap.bundle.min.js" />
          <script src="/plugins/swiper/swiper-bundle.min.js" />
          <script src="/plugins/isotope/isotope.min.js" />

          {/* Main Script */}
          <script src="/assets/js/script.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
