/* @flow */
import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components/primitives";
import { buttonStyle } from "./buttonStyles";

type Props = {
    state: string,
    value: string
};

const InnerButton = styled.View`
    ${buttonStyle};
`;

const Button = ({ state, value }: Props) => (
    <View>
        <InnerButton state={state}>
            <Text>{value}</Text>
        </InnerButton>
    </View>
);

export default Button;
