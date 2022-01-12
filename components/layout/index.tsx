import { FunctionComponent } from "react";
import { Parallax } from 'react-scroll-parallax';

import useBackground from "hooks/use-background";
import BgArt from "./bg-art";

import GlobalStyles from "./styles";
import Logo from "components/logo";
import styled from "styled-components";
import parallaxStyle from "./Parallax.module.sass";
import Nav from "../nav";
import { useMediaQuery } from "react-responsive";

const Wrapper = styled.div`
  margin: 0 7em 0 3em;
  @media(max-device-width:820px){
    margin: 0 6em 0 2em;
  }
`;

const Layout: FunctionComponent = ({ children }) => {
  const { fontColor, backgroundColor, setColors } = useBackground();
  const isMobile = useMediaQuery({
    query: '(max-device-width: 430px)'
  });
  console.log(isMobile);
  return (<>
    <Logo fill={fontColor}/>
      <Nav/>
    <Wrapper>
      <GlobalStyles fontColor={fontColor} backgroundColor={backgroundColor} />
      {children}
    </Wrapper>
  <Parallax className={parallaxStyle.outer} y={[isMobile?-90:-30,isMobile?120:130]}><BgArt/></Parallax></>
  );
};

export default Layout;
