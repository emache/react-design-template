/* @flow */
import React from "react";
import { View } from "react-sketchapp";
import Title from "./Title";
import { spacing } from "../branding/designSystem";
import { sectionStyle } from "./sharedStyles";
import styled from "styled-components/primitives";

const Section = styled.View`
    ${sectionStyle};
`;

export default ({ title, children }) => (
    <Section name={`${title} Wrapper`}>
        <Title>{title}</Title>
        {children}
    </Section>
);
