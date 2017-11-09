/* @flow */
import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components/primitives";
import {
    inputWidth,
    inputHeight,
    borderColor,
    borderWidth,
    InnerTextboxStyleFocus,
    InnerTextboxStyle,
    TextboxLabelStyle
} from "./textboxSharedStyles";

type Props = {
    label: string,
    value: string,
    children?: React$Element<any>
};

const Label = styled.Text`
    ${TextboxLabelStyle};
`;

const StyledInnerTextbox = styled.View`
    ${InnerTextboxStyle};
    ${({ state }) => (state === "focus" ? InnerTextboxStyleFocus : "")};
`;

const TextBox = ({ label, value, state, children }: Props) => (
    <View>
        <Label>{label}</Label>
        <StyledInnerTextbox state={state}>
            <Text>{value}</Text>
        </StyledInnerTextbox>
    </View>
);

export default TextBox;
