import React from "react";
import { Text, View } from "react-sketchapp";
import { titleContainerStyle, titleStyle } from "./sharedStyles";
import styled from "styled-components/primitives";

const TitleContainer = styled.View`
    ${titleContainerStyle};
`;

const TitleText = styled.Text`
    ${titleStyle};
`;
const Title = ({ children }) => (
    <TitleContainer name="Title-container">
        <TitleText>{children}</TitleText>
    </TitleContainer>
);

export default Title;
