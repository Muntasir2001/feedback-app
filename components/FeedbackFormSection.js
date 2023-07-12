import styled from 'styled-components';

import FeedbackFormTitle from './FeedbackFormTitle';
import FeedbackForm from './FeedbackForm';

const Parent = styled.div``;

const FeedbackFormSection = (props) => {
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
