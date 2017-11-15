import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components/primitives";
import { buttonStyle } from "./buttonStyles";

type Props = {
    state: string,
    value: string
};

const InnerButton = styled.Text`
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
