import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components/primitives";
import { disabledTextStyle } from "../../../branding/designSystem";
import TickIcon from "../../icons/Tick";
import {
    checkboxStyle,
    checkboxWrapperStyle,
    checkboxHoverSketch,
    checkboxDisabledSketch,
} from "./checkboxStyles";


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
        state === "disabled" ? disabledTextStyle : ""};
`;


export const Checkbox = ({ children, state }: Props) => (
    <StyledCheckbox name="checkbox" state={state}>
        {children}
        <CheckboxBox state={state} />
    </StyledCheckbox>
);

export default Checkbox;
