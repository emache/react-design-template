/* @flow */
import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components";
import { buttonStyle } from "./buttonStyles";

type Props = {
    state: string,
    value: string
};

const InnerButton = styled.div`
    ${buttonStyle};
`;

const Button = ({ state, value }: Props) => (
    <InnerButton state={state} tabIndex={0} role="button">
        {value}
    </InnerButton>
);

export default Button;
