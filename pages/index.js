import Head from 'next/head';

import FeedbackFormSection from '../components/FeedbackFormSection';

import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Feedback | Home</title>
			</Head>
			<FeedbackFormSection />
		</>
	);
}
