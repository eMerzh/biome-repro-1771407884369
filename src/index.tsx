import styled from "styled-components";

const color = "red";

const TooltipStyled = styled.div`
	max-width: 150px;
	max-height: 150px;
	color: ${color};
`;

const Container = styled.div`
	display: flex;
`;

export default function App() {
	return (
		<Container>
			<h1>
				Welcome to the App!
				<TooltipStyled>dd</TooltipStyled>
			</h1>
		</Container>
	);
}
