/* @flow */
import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components/primitives";
import {
    primaryButtonStyle,
    secondaryButtonStyle,
    primaryButtonInvertedStyle,
    secondaryButtonInvertedStyle,
    primaryButtonColor,
    secondaryButtonColor
} from "./buttonStyles";

type Props = {
    state: string,
    value: string
};

const InnerPrimaryButton = styled.View`
    ${primaryButtonStyle};
`;
const InnerSecondaryButton = styled.View`
    ${secondaryButtonStyle};
`;

const InnerPrimaryInvButton = styled.View`
    ${primaryButtonInvertedStyle};
`;
const InnerSecondaryInvButton = styled.View`
    ${secondaryButtonInvertedStyle};
`;

export const PrimaryButton = ({ state, value }: Props) => (
    <InnerPrimaryButton state={state}>
        <Text style={{ color: "white" }}>{value}</Text>
    </InnerPrimaryButton>
);

export const SecondaryButton = ({ state, value }: Props) => (
    <InnerSecondaryButton state={state}>
        <Text style={{ color: "white" }}>{value}</Text>
    </InnerSecondaryButton>
);

export const PrimaryInvertedButton = ({ state, value }: Props) => (
    <InnerPrimaryInvButton state={state}>
        <Text style={{ color: primaryButtonColor }}>{value}</Text>
    </InnerPrimaryInvButton>
);

export const SecondaryInvertedButton = ({ state, value }: Props) => (
    <InnerSecondaryInvButton state={state}>
        <Text style={{ color: secondaryButtonColor }}>{value}</Text>
    </InnerSecondaryInvButton>
);

export default PrimaryButton;
