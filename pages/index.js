import Head from 'next/head';

import FeedbackFormSection from '../components/FeedbackFormSection';

export default function Home(props) {
	return (
		<>
			<Head>
				<title>Feedback | Home</title>
			</Head>
			<FeedbackFormSection />
		</>
	);
}
