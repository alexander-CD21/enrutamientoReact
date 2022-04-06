import React from "react";
import StyledBox from "../StyledBox";

const Color  = (props) => {
    console.log(props);
    return(
        <div >
            <StyledBox color1={props.match.params.color1} color2={props.match.params.color2}>
            <p>The world is : {props.match.params.palabra} </p>
            </StyledBox>
        </div>
    );
}
export default Color;