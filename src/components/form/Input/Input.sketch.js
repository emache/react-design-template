import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components/primitives";
import {
    inputStyleFocus,
    inputStyleDisabled,
    inputStyle,
    inputLabelStyle,
    inputWrapperStyle
} from "./inputStyles";

import { disabledTextStyle } from "../../../branding/designSystem";

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
                return inputStyleDisabled;
                break;
            case "empty":
                return disabledTextStyle;
                break;
        }
    }};
`;

const InputWrapper = styled.View`
    ${inputWrapperStyle};
`;

const Input = ({ label, value, state, children }: Props) => (
    <InputWrapper name="Input-field">
        <Label>{label}</Label>
        <StyledInput state={state}>{value}</StyledInput>
    </InputWrapper>
);

export default Input;
