import Head from 'next/head';

import styled from 'styled-components';

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

const FeedbackPage = () => {
	return (
		<>
			<Head>
				<title>Feedbacks</title>
			</Head>
			<Parent>
				<h1>Feedback</h1>
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
						<tr>
							<td>jon don</td>
							<td>email@email.com</td>
							<td>Lorem ipsum dolor sitsdf.</td>
							<td>compalin</td>
						</tr>
						<tr>
							<td>jon don</td>
							<td>email@email.com</td>
							<td>Lorem ipsum dolor sitsdf.</td>
							<td>compalin</td>
						</tr>
					</tbody>
				</table>
			</Parent>
		</>
	);
};

export default FeedbackPage;
