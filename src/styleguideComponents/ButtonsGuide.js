import React from "react";
import { View, Text } from "react-sketchapp";
import { spacing } from "../branding/designSystem";
import Section from "./Section";
import styled from "styled-components/primitives";
import { Annotation, Title, SecondaryTitle } from "./typography";
import { Button } from "../components/Button/Button";

const Row = styled.View`
    flex-direction: row;
    margin-bottom: ${spacing.s}px;
`;

const Col = styled.View`
    margin-right: ${spacing.m}px;
`;

export default () => (
    <View name="Buttons Guide">
        <Section name="Buttons">
            <SecondaryTitle>ButtonsInput </SecondaryTitle>
            <Annotation>
                Some buttons examples. States not rendered in Sketch due to the
                way the buttons styles are handled.
            </Annotation>
            <Row>
                <Col>
                    <Button value="button primary" />
                    <Button value="button secondary" isSecondary />
                </Col>
                <Col>
                    <Button value="button primary inv" isInverted />

                    <Button
                        value="button secondary inv"
                        isSecondary
                        isInverted
                    />
                </Col>
            </Row>
        </Section>
    </View>
);
