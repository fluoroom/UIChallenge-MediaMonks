import useBackground from "hooks/use-background";
import { FunctionComponent, VoidFunctionComponent } from "react";
import styled from "styled-components"
import { Colors } from "context/background-context";

const NavLink: VoidFunctionComponent = (props) => (
        <span>{props.children}</span>
    );

const Nav: FunctionComponent = () => {
    return (
    <div>
        <NavLink>1</NavLink>
        <NavLink>2</NavLink>
        <NavLink>3</NavLink>
    </div>
    )
};

export default Nav