import { FunctionComponent } from "react";
import { Parallax } from 'react-scroll-parallax';

import useBackground from "hooks/use-background";
import BgArt from "./bg-art";

import GlobalStyles from "./styles";
import Logo from "components/logo";
import styled from "styled-components";
import parallaxStyle from "./Parallax.module.sass";

const Layout: FunctionComponent = ({ children }) => {
  const { fontColor, backgroundColor, setColors } = useBackground();
  return (<>
    <Logo fill={fontColor}/>
    <div style={{margin:'0 7em 0 3em'}}>
      <GlobalStyles fontColor={fontColor} backgroundColor={backgroundColor} />
      {children}
  <Parallax className={parallaxStyle.outer} y={[-20,100]}><BgArt/></Parallax>
    </div></>
  );
};

export default Layout;
