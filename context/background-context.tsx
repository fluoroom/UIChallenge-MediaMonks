import { createContext, useState, FunctionComponent } from "react";

export interface Colors {
  backgroundColor?: string;
  fontColor?: string;
}

export interface BackgroundContextProps extends Colors {
  setColors: (colors: Colors) => void;
}

export interface BackgroundProviderProps {
  defaultColors: Colors;
}

export const BackgroundContext = createContext<BackgroundContextProps>(
  {} as BackgroundContextProps
);

export const BackgroundProvider: FunctionComponent<BackgroundProviderProps> = ({
  children,
  defaultColors,
}) => {
  const [colors, setColorsState] = useState<Colors>(defaultColors);

  const setColors = (colors) =>
    setColorsState((prevColors) => ({ ...prevColors, ...colors}));

  return (
    <BackgroundContext.Provider value={{ ...colors, setColors }}>
      {children}
    </BackgroundContext.Provider>
  );
};
