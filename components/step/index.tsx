import useBackground from 'hooks/use-background';
import { Colors } from 'context/background-context';
import { FunctionComponent, useState, useEffect, useRef, Ref } from 'react';
import styled from 'styled-components';
import { useIsVisible } from 'react-is-visible';

type useIsVisible = (ref: Ref<any>) => boolean;

const Title = styled.h2`
  font-size: 4em;
  font-family: 'HelveticaNow-Titles';
  text-align: left;
  max-width: 100%;
  position: absolute;
  top: 2em;
  @media (max-device-width: 720px) {
    font-size: 2em;
    top: 3em;
  }
  @media (min-device-width: 800px) {
    max-width: 800px;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 10vh;
`;

const Graph = styled.div`
  max-width: 800px;
  position: relative;
  margin: 0 auto;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  max-width: 18em;
  bottom: 6em;
  position: absolute;
  @media (max-device-width: 430px) {
    bottom: 24em;
  }
`;

export interface StepProps {
  id: string;
  text?: JSX.Element;
  title: JSX.Element;
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
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Graph>{graph}</Graph>
    </Wrapper>
  );
};

export default Step;
