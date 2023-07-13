import Head from 'next/head';

import { createGlobalStyle } from 'styled-components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.svg' />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
