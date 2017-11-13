/* @flow */
import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components/primitives";
import { disabledTextStyle } from "../../branding/designSystem";
import {
    checkboxStyle,
    checkboxWrapperStyle,
    checkboxHoverSketch,
    checkboxDisabledSketch,
} from "./checkboxStyles";
type Props = {
    state: string,
    children?: React$Element<any>
};

const CheckboxBox = styled.View`
    ${checkboxStyle};
    ${({ state }) => {
        switch (state) {
            case "hover":
                return checkboxHoverSketch;
                break;
            case "disabled":
                return checkboxDisabledSketch;
                break;
        }
    }};
`;

const StyledCheckbox = styled.Text`
    ${checkboxWrapperStyle};
    ${({ state }) =>
        state === "disabled" || "checkedDisabled" ? disabledTextStyle : ""};
`;

export const Checkbox = ({ children, state }: Props) => (
    <StyledCheckbox name="Radio-button" state={state}>
        {children}
        <CheckboxBox state={state} />
    </StyledCheckbox>
);

export default Checkbox;
