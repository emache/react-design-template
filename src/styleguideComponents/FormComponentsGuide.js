import React from "react";
import { View, Text } from "react-sketchapp";
import { spacing } from "../branding/designSystem";
import { sectionStyle } from "./sharedStyles";
import styled from "styled-components/primitives";
import { Annotation, Title, SecondaryTitle } from "./typography";
import Input from "../components/form/Input/Input";
import Radio from "../components/form/Radio/Radio";
import Checkbox from "../components/form/Checkbox/Checkbox";

const Section = styled.View`
    ${sectionStyle};
    flex-direction: column;
    width: 800px;
`;

const Row = styled.View`
    flex-direction: row;
    margin-top: ${spacing.s}px;
`;

const Col = styled.View`
    margin-right: ${spacing.m}px;
`;

export default () => (
    <Section name="Components">
        <SecondaryTitle>Input fields</SecondaryTitle>
        <Annotation>
            Forms share some basic styles. Those include the containers styles
            for text boxes, select dropdowns and checkboxes; text styles for
            form labels; and some element margins and paddings.
        </Annotation>
        <Row>
            <Col>
                <Input
                    label="Input: empty with placeholder"
                    value="Placeholder"
                    state="empty"
                />
                <Input
                    label="Input: focused & filler"
                    value="Filled text"
                    state="focus"
                />
            </Col>
            <Col>
                <Input label="Input: filled text" value="Filled text" />
                <Input
                    label="Input: disabled"
                    value="Disabled"
                    state="disabled"
                />
            </Col>
        </Row>

        <SecondaryTitle>Radio buttons</SecondaryTitle>
        <Annotation>
            Radio buttons share limited styles with input fields, only the
            colors.
        </Annotation>

        <Row>
            <Col>
                <Radio value="" name="radio-unchecked" state="unchecked">
                    Radio button, unchecked
                </Radio>
                <Radio value="" name="radio-unchecked" state="hover">
                    Radio button, unchecked hover
                </Radio>
            </Col>
            <Col>
                <Radio value="" name="radio-checked" state="checked">
                    Radio button, checked
                </Radio>
                <Radio value="" name="radio-checked" state="checkedHover">
                    Radio button, checked hover
                </Radio>
            </Col>
            <Col>
                <Radio value="" name="radio-checked" state="disabled">
                    Radio button, unchecked disabled
                </Radio>
                <Radio value="" name="radio-checked" state="checkedDisabled">
                    Radio button, checked disabled
                </Radio>
            </Col>
        </Row>

        <SecondaryTitle>Checkboxes</SecondaryTitle>
        <Annotation>
            Checkboxes share the same base container style as input fields.
            Cannot render the checked status as SVG rendering isn't yet
            supported
        </Annotation>
        <Row>
            <Col>
                <Checkbox value="">Checkbox unchecked</Checkbox>
                <Checkbox value="" state="hover">
                    Checkbox unchecked, hover
                </Checkbox>
                <Checkbox value="" state="disabled">
                    Checkbox disabled
                </Checkbox>
            </Col>
        </Row>
    </Section>
);
