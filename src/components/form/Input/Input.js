/* @flow */
import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components";
import { inputStyle, inputLabelStyle, inputErrorStyle } from "./inputStyles";

type Props = {
    label: string,
    value: string,
    children?: React$Element<any>
};

const Label = styled(Text)`
    ${inputLabelStyle};
`;

const StyledInput = styled.input`
    ${inputStyle};
`;

export const Input = ({ label, value, children }: Props) => (
    <View name="Input-field">
        <Label>{label}</Label>
        <StyledInput defaultValue={value} placeholder="placeholder" />
    </View>
);

export default Input;
