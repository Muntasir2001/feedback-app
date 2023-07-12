import Head from 'next/head';

import FeedbackFormSection from '../components/FeedbackFormSection';
import styled from 'styled-components';
import Link from 'next/link';

const Parent = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.all-feedback-link-div {
		margin-top: 20px;
		color: #fff;

		a {
			&:link,
			&:visited {
				color: #fff;
			}
		}
	}
`;

export default function Home(props) {
	return (
		<>
			<Head>
				<title>Feedback | Home</title>
			</Head>
			<Parent>
				<FeedbackFormSection />
				<div className='all-feedback-link-div'>
					<p>
						To view all feedbacks, click{' '}
						<Link href='/feedback'>here</Link>.
					</p>
				</div>
			</Parent>
		</>
	);
}
