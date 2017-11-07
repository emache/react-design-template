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
import tinycolor from "tinycolor2";

type Props = {
    label: string,
    value: string,
    children?: React$Element<any>
};

const Label = styled(Text)`
    ${TextboxLabelStyle};
`;
// could have this in a separate file and share it with the Sketch version.
//Input fields are specials so passing styles instead.

const StyledInnerTextbox = styled.input`
    ${InnerTextboxStyle};
`;

const Textbox = ({ label, value, children }: Props) => (
    <View>
        <Label>
            <Text>{label}</Text>
        </Label>
        <StyledInnerTextbox defaultValue={value} />
    </View>
);

export default Textbox;
