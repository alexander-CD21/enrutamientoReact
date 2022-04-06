import React from "react";
const Parametro = (props) => {
    console.log(props);
    if(isNaN(props.match.params.id)){
        return <p>The world is : {props.match.params.id}</p>;
    }else {
        return <p>The number is: {props.match.params.id}</p>;
    }

    
}
export default Parametro