import { FunctionComponent } from 'react';
import Underline from 'components/underline';

const UnderlinedText: FunctionComponent = (props) => (
  <span style={{position:'relative'}}>
    {props.children}
    <Underline />
  </span>
);
export default UnderlinedText;
