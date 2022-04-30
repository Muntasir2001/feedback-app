import Head from 'next/head';

import FeedbackFormSection from '../components/FeedbackFormSection';

export default function Home(props) {
	const { fullUrl } = props;

	return (
		<>
			<Head>
				<title>Feedback | Home</title>
			</Head>
			<FeedbackFormSection fullUrl={fullUrl} />
		</>
	);
}

Home.getInitialProps = async ({ req }) => {
	let fullUrl;

	if (req) {
		// Server side rendering
		fullUrl = req.headers.referer;
	} else {
		// Client side rendering
		fullUrl =
			window.location.protocol +
			'//' +
			window.location.hostname +
			(window.location.port ? ':' + window.location.port : '');
	}

	// if (req) {
	// 	// Server side rendering
	// 	fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	// } else {
	// 	// Client side rendering
	// 	fullUrl =
	// 		window.location.protocol +
	// 		'//' +
	// 		window.location.hostname +
	// 		(window.location.port ? ':' + window.location.port : '');
	// }

	// console.log(req.baseUrl);
	// console.log(fullUrl);

	return { fullUrl: fullUrl };
};
