import { createContext, useState, FunctionComponent } from 'react';

export type ClassName = 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6' | 'c7';
export type NavStep = number;
export interface Colors {
  fontColor: string;
  backgroundColor: string;
}

export interface BackgroundContextProps {
  className: ClassName;
  prevClassName: ClassName;
  fontColor: string;
  backgroundColor: string;
  prevColors: Colors;
  navStep: Number;
  setNavStep: (navStep: NavStep) => void;
  setClass: (className: ClassName) => void;
  setColors: (colors: Colors) => void;
  setPreviousClassName: () => void;
  setPreviousColors: () => void;
}

export const BackgroundContext = createContext<BackgroundContextProps>({
  className: 'c1',
} as BackgroundContextProps);

export const BackgroundProvider: FunctionComponent = ({
  children,
  defaultColors,
}) => {
  const [className, setClassName] = useState<ClassName>(`c1`);
  const [prevClassName, setPrevClassNameState] = useState<ClassName>(`c1`);
  const setClass = (cls: ClassName) => {
    setPrevClassNameState(className);
    setClassName(cls);
    //console.log(cls+' applied')
  };
  const setPreviousClassName = () => {
    const newPrevious = className;
    setClassName(prevClassName);
    //console.log('set previous: '+prevClassName)
    setPrevClassNameState(newPrevious);
  };
  const [colorsState, setColorsState] = useState<Colors>(defaultColors);
  const [prevColors, setPrevColorsState] = useState<Colors>(defaultColors);

  const setColors = (colors: Colors) => {
    setPrevColorsState(colorsState);
    setColorsState((currentColors) => ({ ...currentColors, ...colors }));
  };
  const setPreviousColors = () => {
    const newPrevious = colorsState;
    setColorsState(prevColors);
    setPrevColorsState(newPrevious);
  };
  const [navStep, setNavStepState] = useState<NavStep>(1);
  const setNavStep = (navStep) => setNavStepState(navStep);

  return (
    <BackgroundContext.Provider
      value={{
        className,
        navStep,
        setNavStep,
        setClass,
        ...colorsState,
        setColors,
        setPreviousClassName,
        setPreviousColors,
        prevClassName,
      }}
    >
      {children}
    </BackgroundContext.Provider>
  );
};
