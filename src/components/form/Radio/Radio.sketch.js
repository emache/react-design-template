import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components/primitives";
import { disabledTextStyle } from "../../../branding/designSystem";
import {
    radioBoxStyle,
    radioWrapperStyle,
    radioCheckedSketch,
    radioHoverSketch,
    radioCheckedHoverSketch,
    radioDisabledSketch,
    radioCheckedDisabledSketch
} from "./radioStyles";

const RadioBox = styled.View`
    ${radioBoxStyle};
    ${({ state }) => {
        switch (state) {
            case "checked":
                return radioCheckedSketch;
                break;
            case "hover":
                return radioHoverSketch;
                break;
            case "checkedHover":
                return radioCheckedHoverSketch;
                break;
            case "disabled":
                return radioDisabledSketch;
                break;
            case "checkedDisabled":
                return radioCheckedDisabledSketch;
                break;
        }
    }};
`;

const StyledRadio = styled.Text`
    ${radioWrapperStyle};
    ${({ state }) => {
        switch (state) {
            case "disabled":
                return disabledTextStyle;
                break;
            case "checkedDisabled":
                return disabledTextStyle;
                break;
        }
    }};
`;

export const Radio = ({ children, state }) => (
    <StyledRadio name="Radio-button" state={state}>
        {children}
        <RadioBox state={state} />
    </StyledRadio>
);

export default Radio;
