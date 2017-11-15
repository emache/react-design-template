import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components";
import { inputStyle, inputLabelStyle, inputWrapperStyle } from "./inputStyles";

const Label = styled(Text)`
    ${inputLabelStyle};
`;

const StyledInput = styled.input`
    ${inputStyle};
`;

const InputWrapper = styled.div`
    ${inputWrapperStyle};
`;

export const Input = ({ label, value, children, placeholder }) => (
    <InputWrapper name="Input-field">
        <Label>{label}</Label>
        <StyledInput defaultValue={value} placeholder={placeholder} />
    </InputWrapper>
);

export default Input;
