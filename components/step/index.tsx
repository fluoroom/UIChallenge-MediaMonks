import useBackground from "hooks/use-background";
import { Colors } from "context/background-context";
import { FunctionComponent } from "react";
import styled from "styled-components";

const Title = styled.h2`
    font-size:4em;
    font-family: 'HelveticaNow-Titles';
    text-align: left;
    max-width:100%;
    position:absolute;
    top:2em;
    @media(max-device-width:720px){
        font-size:2em;
        top:3em;
    }
    @media(min-device-width:800px){
        max-width:800px;
    }
`;
const Wrapper = styled.div`
    min-height:100vh;
    max-width: 1200px;
    margin: 0 auto;
    position:relative;
    `;
const Graph = styled.div`
    max-width:800px;
    position:relative;
    margin: 0 auto;
`;

const Text = styled.p`
    max-width:18em;
    bottom:6em;
    position:absolute;`

const Step: FunctionComponent = (props) => {
    return (
    <Wrapper>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Graph>{props.graph}</Graph>
    </Wrapper>
)};


export default Step