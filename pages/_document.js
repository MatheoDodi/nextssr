import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="description" content="testing site for Next" />
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');

          #nprogress .bar {
            background: red;
          }

          body {
            margin: 0;
            font-family: 'Lato', sans-serif;
            font-size: 110%;
            background: #fafafa;
          }
        `}</style>
      </html>
    );
  }
}
