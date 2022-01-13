import { FunctionComponent } from 'react';
import Underline from 'components/underline';
import styled from 'styled-components';

const style = {
  position: 'relative',
};
const Container = styled.span`
  position: relative;
`;
const UnderlinedText: FunctionComponent = (props) => (
  <Container>
    {props.children}
    <Underline />
  </Container>
);
export default UnderlinedText;
