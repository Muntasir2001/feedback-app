import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const Parent = styled.div`
	--width: 18rem;
	background-color: var(--secondary-color);
	border-radius: 5px;
	margin-top: 20px;

	form {
		display: flex;
		flex-direction: column;
		padding: 25px;

		input[type='text'] {
			padding: 12px 10px;
			margin-bottom: 18px;
			background-color: var(--tertiary-color);
			border: 0;
			border-radius: 5px;
			color: var(--white-color);
			width: var(--width);
		}

		select {
			margin-bottom: 18px;
			padding: 12px 10px;
			border: 0;
			border-radius: 5px;
			background-color: var(--tertiary-color);
			color: var(--white-color);
			width: var(--width);
		}

		textarea {
			background-color: var(--tertiary-color);
			border: 0;
			border-radius: 5px;
			padding: 12px 10px;
			color: var(--white-color);
			font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
				Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
				sans-serif;
			width: var(--width);
			resize: none;
		}

		input[type='submit'] {
			padding: 12px 8px;
			margin-top: 25px;
			background-color: var(--primary-color);
			border: 0;
			border-radius: 5px;
			color: var(--white-color);
			width: var(--width);

			&:hover {
				cursor: pointer;
				filter: brightness(0.95);
			}
		}
	}
`;

const FeedbackForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		// handle prisma
		console.log(data);
	};

	return (
		<>
			<Parent>
				<form className='feedback-form' onSubmit={handleSubmit(onSubmit)}>
					<input
						type='text'
						name='full-name'
						placeholder='Full name'
						{...register('fullName', { required: true })}
						required
					/>
					<input type='text' name='email' placeholder='Email' />
					<select
						name='feedback-type'
						id='feedback-type'
						defaultValue='feedback'
						{...register('feedbackType', { required: true })}
						required
					>
						<option value='feedback'>Feedback</option>
						<option value='issue'>Issue</option>
						<option value='idea'>Idea</option>
					</select>
					<textarea
						name='message'
						id='message'
						cols='30'
						rows='4'
						placeholder='Message'
						{...register('message', { required: true })}
					></textarea>
					<input type='submit' name='submit' value='Submit' />
				</form>
			</Parent>
		</>
	);
};

export default FeedbackForm;