import styled from 'styled-components';

const Parent = styled.div`
	color: var(--white-color);
	text-align: center;
`;

const FeedbackFormTitle = () => {
	return (
		<>
			<Parent>
				<h2>Submit your feedback!</h2>
			</Parent>
		</>
	);
};

export default FeedbackFormTitle;
