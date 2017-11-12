/* @flow */
import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components/primitives";
import {
    inputStyleFocus,
    inputDisabledStyle,
    inputStyle,
    inputLabelStyle
} from "./inputStyles";
import { disabledTextStyle } from "../../branding/designSystem";

type Props = {
    label: string,
    value: string,
    children?: React$Element<any>
};

const Label = styled.Text`
    ${inputLabelStyle};
`;

const StyledInput = styled.Text`
    ${inputStyle};
    ${({ state }) => {
        switch (state) {
            case "focus":
                return inputStyleFocus;
                break;
            case "disabled":
                return inputDisabledStyle;
                break;
            case "empty":
                return disabledTextStyle;
                break;
        }
    }};
`;

const Input = ({ label, value, state, children }: Props) => (
    <View name="Input-field">
        <Label>{label}</Label>
        <StyledInput state={state}>{value}</StyledInput>
    </View>
);

export default Input;
