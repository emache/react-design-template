/* @flow */
import React from "react";
import { View } from "react-sketchapp";
import { spacing } from "../branding/designSystem";
import { sectionStyle } from "./sharedStyles";
import styled from "styled-components/primitives";
import Input from "../components/Input/Input";
import { Radio } from "../components/Radio/Radio";

const Section = styled.View`
    ${sectionStyle};
    flex-direction: row;
`;

const Col = styled.View`
    min-width: 500px;
    padding: 20px;
    border: 1px solid black;
    min-height: 500px;
`;

const Divider = styled.View`
    width: 500px;
    height: 50px;
`;

export default () => (
    <Section name="Components">
        <Col name="1">
            <Input label="Input label" value="Placeholder" state="empty" />
            <Divider />
            <Input label="Input label" value="Focused field" state="focus" />
            <Divider />
            <Input
                label="Input label"
                value="Disabled field"
                state="disabled"
            />
            <Divider />
            <Radio value="" name="radio-unchecked" state="unchecked">
                Radio button, unchecked
            </Radio>
            <Radio value="" name="radio-unchecked" state="hover">
                Radio button, unchecked hover
            </Radio>
            <Radio value="" name="radio-checked" state="checked">
                Radio button, checked
            </Radio>
            <Radio value="" name="radio-checked" state="checkedHover">
                Radio button, checked hover
            </Radio>
            <Radio value="" name="radio-checked" state="disabled">
                Radio button, unchecked disabled
            </Radio>
            <Radio value="" name="radio-checked" state="checkedDisabled">
                Radio button, checked disabled
            </Radio>
        </Col>
    </Section>
);
