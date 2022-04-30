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

const FeedbackFormSection = (props) => {
	const { fullUrl } = props;

	return (
		<>
			<Parent>
				<FeedbackFormTitle />
				<FeedbackForm fullUrl={fullUrl} />
			</Parent>
		</>
	);
};

export default FeedbackFormSection;
