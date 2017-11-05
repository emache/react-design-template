/* @flow */
import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components";
import {
    inputWidth,
    inputHeight,
    borderColor,
    borderWidth,
    InnerTextboxStyle
} from "./textboxSharedStyles";
import tinycolor from "tinycolor2";

type Props = {
    label: string,
    value: string,
    children?: React$Element<any>
};

const Label = styled(View)`
    font-size: 14px;
    color: #000000;
    margin-bottom: 15px;
`; // could have this in a separate file and share it with the Sketch version. Input fields are specials so passing styles instead.

const StyledInnerTextBox = styled.input`
    ${InnerTextboxStyle};
    &:hover {
        border-color: ${tinycolor(borderColor)
            .lighten(10)
            .toString()};
    }
`;

const TextBox = ({ label, value, children }: Props) => (
    <View>
        <Label>
            <Text>{label}</Text>
        </Label>
        <StyledInnerTextBox defaultValue={value} />
    </View>
);

export default TextBox;
