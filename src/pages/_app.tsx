import { StickyNote } from 'components/StickyNote';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

import GlobalStyles from 'styles/global';
import seo from '../../next-seo.config';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
          integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
          crossOrigin=""
        />
      </Head>
      <NextSeo {...seo} />
      <GlobalStyles />
      <NextNProgress
        color="#f231a5"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
      <StickyNote>
        <p>
          Criado com ❤️ por{' '}
          <a href="https://github.com/x-SpeedBlack-X">X-SpeedBlack-X</a>
        </p>
      </StickyNote>
    </>
  );
}

export default App;
