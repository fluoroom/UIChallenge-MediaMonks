import { FunctionComponent } from "react";

import useBackground from "hooks/use-background";

import GlobalStyles from "./styles";

const Layout: FunctionComponent = ({ children }) => {
  const { fontColor, backgroundColor, setColors } = useBackground();
  return (
    <div>
      <GlobalStyles fontColor={fontColor} backgroundColor={backgroundColor} />
      {children}
    </div>
  );
};

export default Layout;
