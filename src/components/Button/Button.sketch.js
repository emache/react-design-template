/* @flow */
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

const Button = ({ state, value }: Props) => (
    <View name="Button">
        <InnerButton state={state}>{value}</InnerButton>
    </View>
);

export default Button;
