import styled from 'styled-components';

const Parent = styled.div`
	display: flex;
	gap: 30px;
	align-items: center;

	h2 {
		color: var(--white-color);
	}

	img {
		width: 150px;
	}
`;

const Header = () => {
	return (
		<>
			<Parent>
				<img src='/logo/logo-white.svg' alt='Feedbackly Logo' />
				<h2>Beta</h2>
			</Parent>
		</>
	);
};

export default Header;
