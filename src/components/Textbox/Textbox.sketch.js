/* @flow */
import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components/primitives";
import {
    inputWidth,
    inputHeight,
    borderColor,
    borderWidth,
    InnerTextboxStyle,
    TextboxLabelStyle
} from "./textboxSharedStyles";
import { colors } from "../../branding/brandName";
import tinycolor from "tinycolor2";

type Props = {
    label: string,
    value: string,
    children?: React$Element<any>
};

const Label = styled.Text`
    ${TextboxLabelStyle};
    text-color: #b1dfc1;
`;

const StyledInnerTextbox = styled.View`
    ${InnerTextboxStyle};
    ${({ state }) =>
        state === "hover"
            ? "border-color: " +
              tinycolor(borderColor)
                  .lighten(10)
                  .toString()
            : ""};
`;

const TextBox = ({ label, value, state, children }: Props) => (
    <View>
        <Label> {label}</Label>
        <StyledInnerTextbox state={state}>
            <Text>{value}</Text>
        </StyledInnerTextbox>
        {children}
    </View>
);

export default TextBox;
