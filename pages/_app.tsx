import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return <>
		<Head>
			<title>MyTop - лучший топ</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Component {...pageProps} />
	</>;
}

export default MyApp;
