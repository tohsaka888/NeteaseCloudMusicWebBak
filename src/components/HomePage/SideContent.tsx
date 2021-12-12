import styled from "styled-components";
import Login from "./Login";
import TopArtists from "./TopArtists";

const Container = styled.div`
  width: 16vw;
  height: 100%;
  border: 1px solid #cecece;
`;

export default function SideContent() {
  return (
    <Container>
      <Login />
      <TopArtists />
    </Container>
  );
}
