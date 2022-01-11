import useBackground from "hooks/use-background";
import { Colors } from "context/background-context";
import { FunctionComponent } from "react";
import styled from "styled-components";

const Title = styled.h2`
font-size:4.5em;
font-family: 'HelveticaNow-Titles'`;

const Step: FunctionComponent = (props) => {
    /*
    const { setColors } = useBackground();
    const colors: Colors = {textColor:"#FF0000",backgroundColor:"#CCFFCC"};
    setColors<Colors>(colors); */
    return (
    <div>
        <Title>{props.title}</Title>
        <p>{props.text}</p>
    </div>
)};


export default Step