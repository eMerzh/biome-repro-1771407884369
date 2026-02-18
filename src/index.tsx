import styled from "styled-components";

function graphql(_query: TemplateStringsArray) {
	return "graphql";
}
function useQuery(_query: string, _variables: object) {
	return "useQuery";
}
const color = "red";

const TooltipStyled = styled.div`
	max-width:      150px;
	max-height: 150px;
	color: ${color};

`;

const Container = styled.div`
		display: flex;
`;

export default function App() {
	const brol = useQuery(
		graphql`
query Woo {
						hello
			}
		`,
		{}
	);
	console.log(brol);
	return (
		<Container>
			<h1>
				Welcome to the App!
				<TooltipStyled>dd</TooltipStyled>
			</h1>
		</Container>
	);
}
