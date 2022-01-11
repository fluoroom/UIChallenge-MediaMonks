import { FunctionComponent } from "react";
import Underline from "components/underline";

const style = {
        position: "relative"
    }
const UnderlinedText: FunctionComponent = (props) => (
        <span style={style}>{props.children}<Underline/></span>
);
export default UnderlinedText