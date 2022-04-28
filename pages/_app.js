import { createGlobalStyle } from 'styled-components';
import '../styles/globals.css';

const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: #041C32;
    --primary-color: #ECB365;
    --secondary-color: #04293A;
    --tertiary-color: #064663;
    --black-color: #1E1E1E;
    --light-grey-color: #D1D1D1;
    --white-color: #F6F6F6;
    --light-background-color-2: #4D4D4D;
  }
`;

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
