import styled from 'styled-components';

import FeedbackFormTitle from './FeedbackFormTitle';
import FeedbackForm from './FeedbackForm';

const Parent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

const FeedbackFormSection = () => {
	return (
		<>
			<Parent>
				<FeedbackFormTitle />
				<FeedbackForm />
			</Parent>
		</>
	);
};

export default FeedbackFormSection;
