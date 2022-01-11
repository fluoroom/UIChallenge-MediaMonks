import { FunctionComponent } from "react";

import useBackground from "hooks/use-background";

import GlobalStyles from "./styles";
import Logo from "components/logo";

const Layout: FunctionComponent = ({ children }) => {
  const { fontColor, backgroundColor, setColors } = useBackground();
  return (
    <div style={{margin:'0 3em'}}>
      <GlobalStyles fontColor={fontColor} backgroundColor={backgroundColor} />
      <Logo fill={fontColor}/>
      {children}
    </div>
  );
};

export default Layout;
