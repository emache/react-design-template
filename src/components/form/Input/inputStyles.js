// input styles
import { spacing } from "../../../branding/designSystem";
import {
    containerStyle,
    formLabelStyle,
    formItemWrapper,
    containerStyleFocus,
    containerStyleDisabled
} from "../sharedFormStyles";

export const inputLabelStyle = `
    ${formLabelStyle};
    margin-bottom: ${spacing.xs}px;
`;

export const inputStyle = `
    width: 300px;
    height: auto;
    ${containerStyle};
    padding: ${spacing.xs}px;
`;

export const inputWrapperStyle = `
    ${formItemWrapper};
    display: flex;
    flex-direction: column;
`;

export const inputStyleFocus = `
    ${containerStyleFocus}
`;

export const inputStyleDisabled = `
    ${containerStyleDisabled}
`;
