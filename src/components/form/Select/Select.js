/* @flow */
import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components";
import { selectStyle, selectLabelStyle, selectErrorStyle } from "./selectStyles";

type Props = {
    label: string,
    value: string,
    children?: React$Element<any>
};

const Label = styled(Text)`
    ${selectLabelStyle};
`;

const StyledSelect = styled.input`
    ${selectStyle};
`;

export const Select = ({ label, value, children }: Props) => (
    <View name="Select-field">
        <Label>{label}</Label>
        <StyledSelect defaultValue={value} placeholder="placeholder" />
    </View>
);

export default Select;
