//import styled from "styled-components";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
interface Props {
  bgcolor: string;
}

const Father = styled.div`
  display: flex;
`;
const Box = styled.div<Props>`
  background-color: ${(props) => props.bgcolor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;
const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <Father>
      <Box bgcolor="blue">
        <Text>hello</Text>
      </Box>
      <Circle bgcolor="yellow">
        <Text>Mr.</Text>
      </Circle>
      <Circle bgcolor="red">
        <Text>KANG</Text>
      </Circle>
      <Circle bgcolor="red">
        <Text>KANG</Text>
      </Circle>
      <Button variant="contained" color="error">
        DOOYOUNG
      </Button>
    </Father>
  );
}
export default App;
