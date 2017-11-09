/* @flow */
import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components";
import {
    primaryButtonStyle,
    secondaryButtonStyle,
    primaryButtonInvertedStyle,
    secondaryButtonInvertedStyle
} from "./buttonStyles";

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

const InnerPrimaryInvButton = styled.div`
    ${primaryButtonInvertedStyle};
`;
const InnerSecondaryInvButton = styled.div`
    ${secondaryButtonInvertedStyle};
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

export const PrimaryInvertedButton = ({ state, value }: Props) => (
    <InnerPrimaryInvButton state={state} tabIndex={0} role="button">
        {value}
    </InnerPrimaryInvButton>
);

export const SecondaryInvertedButton = ({ state, value }: Props) => (
    <InnerSecondaryInvButton state={state} tabIndex={0} role="button">
        {value}
    </InnerSecondaryInvButton>
);

export default PrimaryButton;
