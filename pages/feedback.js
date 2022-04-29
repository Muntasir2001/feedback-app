import Head from 'next/head';

import styled from 'styled-components';

import FeedbackStatusCard from '../components/FeedbackStatusCard';
import prisma from '../lib/prisma';
// import { feedback } from '../data/feedback';

const Parent = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		color: var(--white-color);
		text-align: left;
	}

	table {
		margin-top: 20px;
		max-width: 70rem;
		border-spacing: 0;

		thead {
			color: var(--white-color);
			background-color: var(--tertiary-color);
			text-align: left;

			th {
				padding: 10px 20px;
				text-transform: uppercase;
			}
		}

		tbody {
			color: var(--white-color);
			background-color: var(--secondary-color);

			tr {
				border-bottom: 5px solid var(--white-color);

				td {
					padding: 15px 20px;
				}
			}
		}
	}
`;

const FeedbackPage = ({ feedback }) => {
	return (
		<>
			<Head>
				<title>Feedbacks</title>
			</Head>
			<Parent>
				<h1>Feedbacks</h1>
				<table>
					<thead>
						<tr>
							<th scope='col'>Name</th>
							<th scope='col'>Email</th>
							<th scope='col'>Message</th>
							<th scope='col'>Feedback Type</th>
						</tr>
					</thead>
					<tbody>
						{feedback.map((data) => {
							return (
								<tr key={data.id}>
									<td>{data.fullName}</td>
									<td>{data.email}</td>
									<td>{data.message}</td>
									<td>
										<FeedbackStatusCard type={data.feedbackType} />
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</Parent>
		</>
	);
};

export default FeedbackPage;

export const getServerSideProps = async () => {
	const feedback = await prisma.feedback.findMany({
		select: {
			message: true,
			id: true,
			feedbackType: true,
			fullName: true,
			email: true,
		},
	});

	return {
		props: { feedback },
	};
};
