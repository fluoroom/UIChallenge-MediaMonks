import useBackground from "hooks/use-background";
import { Colors } from "context/background-context";
import { FunctionComponent } from "react";
import styled from "styled-components";

const Title = styled.h2`
    font-size:4em;
    font-family: 'HelveticaNow-Titles';
    text-align: left;
    padding-top:1em;
`;
const Wrapper = styled.div`
    height:100vh;`;

const Text = styled.p`
    max-width:18em;
    margin-top:6em;`

const Step: FunctionComponent = (props) => {
    return (
    <Wrapper>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <div>{props.graph}</div>
    </Wrapper>
)};


export default Step