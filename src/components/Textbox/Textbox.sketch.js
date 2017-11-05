/* @flow */
import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components/primitives";
import {
    inputWidth,
    inputHeight,
    borderColor,
    borderWidth
} from "./textboxStyles";
import tinycolor from "tinycolor2";

type Props = {
    label: string,
    value: string,
    children?: React$Element<any>
};

const Label = styled.View`
    font-size: 14px;
    color: #000000;
    margin-bottom: 15px;
`;

const InnerTextBox = styled.View`
    width: ${inputWidth}px;
    height: ${inputHeight}px;
    border: ${borderWidth}px solid
        ${({ state }) =>
            state === "hover"
                ? tinycolor(borderColor)
                      .lighten(10)
                      .toString()
                : borderColor};
`;

const TextBox = ({ label, value, state, children }: Props) => (
    <View>
        <Label>{label}</Label>
        <InnerTextBox state={state}>
            <Text>{value}</Text>
        </InnerTextBox>
        {children}
    </View>
);

export default TextBox;
