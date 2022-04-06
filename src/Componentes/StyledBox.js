import React from "react";
import styled from 'styled-components';

const styledBox = styled.div`
    color: ${props =>props.color1 };
    background-color: ${props => props.color2};
`;

export default styledBox;