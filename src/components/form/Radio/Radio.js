/* @flow */
import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components";
import { radioBoxStyle, radioWrapperStyle } from "./radioStyles";
type Props = {
    label: string,
    value: string,
    children?: React$Element<any>
};

const RadioBox = styled.div`
    ${radioBoxStyle};
`;

const StyledRadio = styled.label`
    ${radioWrapperStyle};
`;

export const Radio = ({ value, children, name }: Props) => (
    <StyledRadio>
        {children}
        <input type="radio" value={value} name={name} />
        <RadioBox />
    </StyledRadio>
);

export default Radio;
