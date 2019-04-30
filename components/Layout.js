import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = url => {
  console.log(url);
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.OnRouteChangeError = () => NProgress.done();

export default ({ children, title }) => (
  <div className="root">
    <Head>
      <title>Nextssr</title>
    </Head>
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/hireme">
        <a>Hire Me</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </header>

    <h1>{title}</h1>
    {children}
    <footer>&copy; {new Date().getFullYear()}</footer>
    <style jsx>
      {`
        .root {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        header {
          width: 100%;
          display: flex;
          justify-content: space-around;
          padding: 1em;
          font-size: 1.2rem;
          background: indigo;
        }

        header a {
          color: darkgrey;
          text-decoration: none;
        }

        header a:hover {
          color: white;
        }

        footer {
          padding: 1em;
        }
      `}
    </style>
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
  </div>
);
