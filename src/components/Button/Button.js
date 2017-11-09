/* @flow */
import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components";
import { primaryButtonStyle, secondaryButtonStyle } from "./buttonStyles";

type Props = {
    state: string,
    value: string
};

const InnerPrimaryButton = styled.div`
    ${primaryButtonStyle};
`;
const InnerSecondaryButton = styled.div`
    ${secondaryButtonStyle};
`;

export const PrimaryButton = ({ state, value }: Props) => (
    <InnerPrimaryButton state={state} tabIndex={0} role="button">
        {value}
    </InnerPrimaryButton>
);

export const SecondaryButton = ({ state, value }: Props) => (
    <InnerSecondaryButton state={state} tabIndex={0} role="button">
        {value}
    </InnerSecondaryButton>
);

export default PrimaryButton;
