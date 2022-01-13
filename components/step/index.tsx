import useBackground from 'hooks/use-background';
import { FunctionComponent, useEffect, useRef, Ref } from 'react';
import styled from 'styled-components';
import { useIsVisible } from 'react-is-visible';

type useIsVisible = (ref: Ref<any>) => boolean;

const Title = styled.h2`
  font-size: 4em;
  font-family: 'HelveticaNow-Titles';
  text-align: left;
  max-width: 100%;
  @media (max-device-width: 720px) {
    font-size: 2em;
  }
  @media (min-device-width: 800px) {
    max-width: 800px;
  }
  @media(min-device-width: 800px) and (max-device-height:769px){
    font-size:3em;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 10vh;
  display:flex;
  flex-direction:column;
  align-items: left;
  justify-content:center;
  gap:12em;
  @media(max-device-width:430px){
    gap:8em;
  }
`;

const Graph = styled.div`
  max-width: 800px;
  position: relative;
  display: flex;
  height: 100vh;
  width:100%;
  justify-content: center;
  align-items: center;
  align-self:center;
`;

const Text = styled.p`
  max-width: 18em;
`;

export interface StepProps {
  id: string;
  text?: JSX.Element|string;
  title?: JSX.Element|string;
  graph?: JSX.Element;
  fontColor: string;
  backgroundColor: string;
}

const Step: FunctionComponent<StepProps> = ({
  id,
  title,
  text,
  graph,
  backgroundColor,
  fontColor,
}) => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  const {
    setClass,
    setColors,
    setPreviousColors,
    setPreviousClassName,
    setNavStep,
    prevClassName,
  } = useBackground();

  useEffect(() => {
    const word = isVisible ? '' : 'un';
    //console.log(id+' went '+word+'visible')

    if (!isVisible) {
      const elementClassName = 'c' + id;

      if (
        prevClassName != elementClassName &&
        !(
          (elementClassName == 'c1' && prevClassName == 'c2') ||
          (elementClassName == 'c2' && prevClassName == 'c1')
        )
      ) {
        setPreviousClassName();
        setPreviousColors();
      }
    } else {
      setNavStep(parseInt(id));
      setClass(`c${id}` as any);
      setColors({ fontColor, backgroundColor });
    }
  }, [isVisible]);

  return (
    <Wrapper
      ref={ref}
      id={id}
      data-bg-color={backgroundColor}
      data-font-color={fontColor}
    >
      {title && <Title>{title}</Title> }
      {text && <Text>{text}</Text>}
      {graph && !title && !text && <Graph>{graph}</Graph> }
    </Wrapper>
  );
};

export default Step;
