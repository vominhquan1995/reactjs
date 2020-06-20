import Document, { Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <meta name="viewport" content="width=device-width, initial-scale=1.0;"></meta>
        <Head>
          <link
            rel="icon"
            type="image/x-icon"
            href="/assets/img/favicon.ico"
          />
          <link href="/assets/css/spinner-facebook.css" rel="stylesheet" />
          <link href="/assets/css/aos.css" rel="stylesheet" />  
          <link href="/assets/css/style.css" rel="stylesheet" />
          <link href="/assets/css/reponsive.css" rel="stylesheet" />
          <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
          <link href="/assets/fonts/flaticon/font/flaticon.css" rel="stylesheet" />
          <script type="text/javascript" src="/assets/js/jquery-2.1.4.min.js?ver=1"></script>
          <script type="text/javascript" src="/assets/js/bootstrap.min.js"></script>
          <script type="text/javascript" src="/assets/js/aos.js"></script>
          <script type="text/javascript" src="/assets/js/main.js"></script>
          <script type="text/javascript" src="/assets/js/jquery-3.3.1.min.js"></script>
        </Head>
        <body id="landing-page" className="landing-page">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
