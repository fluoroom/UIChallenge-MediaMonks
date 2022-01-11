import { FunctionComponent } from "react";

import useBackground from "hooks/use-background";

import GlobalStyles from "./styles";
import Logo from "components/logo";

const Layout: FunctionComponent = ({ children }) => {
  const { fontColor, backgroundColor, setColors } = useBackground();
  return (<>
    <Logo fill={fontColor}/>
    <div style={{margin:'0 7em 0 3em'}}>
      <GlobalStyles fontColor={fontColor} backgroundColor={backgroundColor} />
      {children}
    </div></>
  );
};

export default Layout;
