/* @flow */
import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components";
import {
    inputWidth,
    inputHeight,
    borderColor,
    borderWidth,
    InnerTextboxStyle,
    TextboxLabelStyle
} from "./textboxSharedStyles";

type Props = {
    label: string,
    value: string,
    children?: React$Element<any>
};

const Label = styled(Text)`
    ${TextboxLabelStyle};
`;

const StyledInnerTextbox = styled.input`
    ${InnerTextboxStyle};
`;

const Textbox = ({ label, value, children }: Props) => (
    <View name="textbox">
        <Label>{label}</Label>
        <StyledInnerTextbox defaultValue={value} />
    </View>
);

export default Textbox;
