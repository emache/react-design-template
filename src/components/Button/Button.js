import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components";
import { buttonStyle } from "./buttonStyles";

const InnerButton = styled.div`
    ${buttonStyle};
`;

export const Button = ({ state, value, isSecondary, isInverted }: Props) => (
    <InnerButton
        state={state}
        isSecondary={isSecondary}
        tabIndex={0}
        role="button"
        isInverted={isInverted}
    >
        {value}
    </InnerButton>
);

export default Button;
