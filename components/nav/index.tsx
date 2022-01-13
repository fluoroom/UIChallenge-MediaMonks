import useBackground from 'hooks/use-background';
import { FunctionComponent, VoidFunctionComponent } from 'react';

export interface NavLinkProps {
  to: string;
}

const NavLink: FunctionComponent<NavLinkProps> = (props) => {
  const { fontColor, backgroundColor, navStep } = useBackground();
  const fontColorTransparent = fontColor + '0';
  const fontColorSemiTransparent = fontColor + 'aa';
  const isCurrent = navStep == parseInt(props.to) ? true : false;
  const newFontColor = isCurrent ? backgroundColor : fontColor;
  const newBackgroundColor = isCurrent ? fontColor : fontColorTransparent;
  const newHoverBackground = isCurrent ? fontColor : fontColorSemiTransparent;

  const handleClick = (event) => {
    event.preventDefault();
    const view = document.getElementById(props.to);
    const backgroundColor = view.getAttribute('data-bg-color');
    const fontColor = view.getAttribute('data-font-color');
    view.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style jsx>{`
        a {
          width: 1.9em;
          height: 1.9em;
          border: 1px solid;
          border-color: ${fontColor};
          border-radius: 2em;
          font-weight: bold;
          font-size: 0.7em;
          color: ${newFontColor};
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${newBackgroundColor};
          margin: 0.4em 0;
          transition: all 70ms;
        }
        a:hover {
          cursor: pointer;
          background-color: ${newHoverBackground};
          color: ${backgroundColor};
        }
      `}</style>
      <a
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {props.children}
      </a>
    </>
  );
};

const Nav: FunctionComponent = () => {
  return (
    <>
      <style jsx>{`
        div {
          position: fixed;
          right: 3em;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 5;
        }
        @media (max-device-width: 820px) {
          div {
            right: 2em;
          }
        }
        @media (max-device-width: 720px) {
          div {
            right: 1.5em;
          }
        }
      `}</style>
      <div>
        <NavLink to="1">1</NavLink>
        <NavLink to="2">2</NavLink>
        <NavLink to="3">3</NavLink>
        <NavLink to="4">4</NavLink>
        <NavLink to="5">5</NavLink>
        <NavLink to="6">6</NavLink>
        <NavLink to="7">7</NavLink>
      </div>
    </>
  );
};

export default Nav;
