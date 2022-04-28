import styled from 'styled-components';

const Parent = styled.div`
	background-color: ${(props) => (props.color ? props.color : 'none')};
	color: var(--black-color);
	border-radius: 10px;
	text-align: center;
	padding: 3px 0;
`;

const FeedbackStatusCard = (props) => {
	const { type } = props; /* feedback, issue, idea */

	return (
		<>
			<Parent
				color={
					type === 'feedback'
						? '#b2b200'
						: type === 'issue'
						? '#cc0000'
						: '#005900'
				}
			>
				<p>{type || 'none'}</p>
			</Parent>
		</>
	);
};

export default FeedbackStatusCard;
