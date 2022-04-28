import Head from 'next/head';

import FeedbackFormSection from '../components/FeedbackFormSection';

import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Feedback App</title>
				<link rel='icon' href='/feedback.svg' />
			</Head>
			<FeedbackFormSection />
		</>
	);
}
