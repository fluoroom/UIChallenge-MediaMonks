import useBackground from "hooks/use-background";
import { Colors } from "context/background-context";
import { FunctionComponent } from "react";
import styled from "styled-components";

const Title = styled.h2`
    font-size:4em;
    font-family: 'HelveticaNow-Titles';
    text-align: left;
    padding-top:2em;
`;
const Wrapper = styled.div`
    min-height:100vh;`;

const Text = styled.p`
    max-width:18em;
    padding-top:6em;`

const Step: FunctionComponent = (props) => {
    return (
    <Wrapper>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <div>{props.graph}</div>
    </Wrapper>
)};


export default Step